'use client'

import RmsDashboardSidebar from "@/components/dashboardComponents/RmsDashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaCartArrowDown, FaRegMessage } from "react-icons/fa6";
import { GiRobotAntennas } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
// import MapPath from "../map/MapPath";
import MapPath from "@/components/map/MapPath";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux"
// import io from "socket.io-client";
import { useEffect } from "react";
import axios from "axios";
import { setLocation } from "@/features/robots/currentPosition";
import { setRoute } from "@/features/robots/makeRoute";


const Rms = () => {
    const dispatch = useDispatch();
    const positions = useSelector((state) => state.positions.positions);
    const singleRobot = useSelector((state) => state.robots.singlerobot);

    // const { lists, singlerobot } = robots;

    const formFields = [
        { id: 'robotId', label: 'Enter Robot Id' },
        { id: 'customerId', label: 'Enter Customer Id' },
        { id: 'pickUpPoint', label: 'Enter Pickup Point' },
        { id: 'destination', label: 'Enter Destination' },
    ];

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const socket = io("http://203.190.8.197:5000");
    const socket2 = io("http://203.190.8.197:5001");

    socket.on("connect", () => {
      console.log("Connected to server");
  
      socket.on("message", (message) => {
        console.log("Message received: ", message);
      });
      socket2.on("json", (json) => {
        console.log("Json received: ", json);
        const position = { lat: json.latitude, json: location.longitude };
        dispatch(setLocation(position));
      });
  
      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });
    });
  
    // useEffect(() => {
    //   // set time interval to get the location
    //   const interval = setInterval(() => {
    //     // get the location from the api
    //     axios
    //       .get("http://dsttamal.me/read_GPS.php")
    //       .then((response) => {
    //         // handle the response here
    //         const location = response.data;
    //         const position = { lat: location.latitude, lng: location.longitude };
    //         dispatch(setLocation(position));
    //       })
    //       .catch((error) => {
    //         // handle the error here
    //         console.error(error);
    //       });
    //   }, 1000);
  
    //   return () => clearInterval(interval);
    // }, []);
  
    const setToServer = () => {
      axios
        .post("http://dsttamal.me/set_GPS.php", {
          positions: positions,
        })
        .then((response) => {
          console.log(response.data);
          socket.send("get");
          alert("Route Sent");
        })
        .catch((error) => {
          alert("Route not Sent");
          console.log(error);
        });
    };

    const images = [
        'https://i.ibb.co/CvCq1rp/43822.jpg',
        'https://i.ibb.co/GdtXkbC/2151153910.jpg',
        'https://i.ibb.co/pxjMBR2/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg'
    ];
  
    return (
        <div className="flex justify-between h-full ">

            {/* sidebar */}
            <div className="basis-2/12 bg-white px-5 space-y-3 hidden md:block my-auto ">
                <RmsDashboardSidebar />

            </div>
            {/* sidebar ends */}

            <div className=" basis-12/12 md:basis-10/12 bg-blue-50 flex flex-col p-4  w-full  space-y-4" >

               

                <div className="flex flex-col  space-y-4 md:space-y-0 justify-between space-x-4 " >

                    <div className=" hidden lg:block space-y-3 mb-5 h-[60vh]  p-5" >
                        
                        <div className="  flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 w-full h-full">
                            <div className=" flex  flex-col md:basis-8/12 space-y-4 " >

                               <div className="relative  lg:grow  " >
                                    <Image src={'https://i.ibb.co/b7wpjtB/2151176287.jpg'} alt="dummy_image"  className="w-full h-full rounded" layout="fill"  />
                                    
                                    
                               </div>
                                <div className="flex justify-evenly grow-0 " >
                                    <Button className='bg-primary px-4 py-2  ' >Front</Button>
                                    <Button className='bg-primary px-4 py-2' >Back</Button>
                                    <Button className='bg-primary px-4 py-2' >Left</Button>
                                    <Button className='bg-primary px-4 py-2' >Right</Button>
                                </div>
                            </div>
                        <div className="hidden md:flex justify-between md:flex-col md:basis-4/12 md:space-y-4">
                            {images.map((src, index) => (
                                <Image 
                                    key={index}
                                    src={src} 
                                    alt="camera_image" 
                                    className=" flex w-full h-32" 
                                    width={100} 
                                    height={index === 2 ? 50 : 100} 
                                />
                            ))}
                        </div>

                        </div>
                       
                    </div>

                    {/* bottom section end */}
                    <div className="  flex flex-col lg:flex-row bg-white p-5 shadow-lg  space-y-4  rounded-md lg:items-center " >
                        <div className=" basis-full lg:basis-9/12  h-96 " >
                                <MapPath />
                        </div>
                
                      <div className=" basis-full lg:basis-3/12 p-4" >
                      <h1 className="text-center h1">Selected points</h1>
                        <div className="flex items-center justify-center flex-wrap space-x-2 space-y-2 ">
                            {positions.map((position, index) => {
                                return (
                                    <div
                                        className="w-8 h-8 bg-red-500  text-white   text-center cursor-pointer rounded-full"
                                        key={position.id}
                                    >
                                        {index < 9 ? `0${index + 1}` : index + 1}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white shadow-lg p-2">
                            <hr />
                        </div>
                        <div className=" flex flex-col space-y-4 justify-between   p-2">
                            <button
                                onClick={() => {
                                    dispatch(setRoute({ route: true }));
                                    socket.send("stop");
                                    setToServer();
                                }}
                                className="p-4 md:py-6 flex-1 bg-primary rounded " >
                                <h2 className="text-xl text-white " >Sent Route</h2>
                            </button>
                            <button
                                onClick={() => {
                                    socket.send("go");
                                }}
                                className="p-4 md:py-6 flex-1 bg-primary rounded " >
                                <h2 className="text-xl text-white " >Kiti GO</h2>
                            </button>
                            <button
                                onClick={() => {
                                    socket.send("stop");
                                }}
                                className="p-4 md:py-6 flex-1 bg-red-500 rounded " >
                                <h2 className="text-xl text-white  " >Kiti Stop</h2>
                            </button>
                        </div>
                      </div>
                      
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rms