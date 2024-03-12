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
import { useSelector } from "react-redux";

const Rms = () => {

    const singleRobot = useSelector((state) => state.robots.singlerobot)

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

    socket.on("connect", () => {
      console.log("Connected to server");
  
      socket.on("message", (message) => {
        console.log("Message received: ", message);
      });
  
      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });
    });
  
    useEffect(() => {
      // set time interval to get the location
      const interval = setInterval(() => {
        // get the location from the api
        axios
          .get("http://dsttamal.me/read_GPS.php")
          .then((response) => {
            // handle the response here
            const location = response.data;
            const position = { lat: location.latitude, lng: location.longitude };
            dispatch(setLocation(position));
          })
          .catch((error) => {
            // handle the error here
            console.error(error);
          });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
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
  
    return (
        <div className="flex justify-between h-full ">

            {/* sidebar */}
            <div className="basis-3/12 bg-white px-5 space-y-3 hidden md:block my-auto ">
                <RmsDashboardSidebar />

            </div>
            {/* sidebar ends */}

            <div className=" basis-12/12 md:basis-9/12 bg-blue-50 flex flex-col p-4 space-y-4 w-full " >

                {/* top section */}
                <div className="flex flex-col md:flex-row justify-between w-full md:space-x-4 space-y-3 md:space-y-0 " >

                    <div className="md:hidden mx-auto flex justify-between w-full space-x-4 " >
                        <Sheet >
                            <SheetTrigger asChild>
                                <Button variant="outline" className='font-semibold' >Robots list</Button>
                            </SheetTrigger>
                            <SheetContent className="flex flex-col items-center justify-center" >
                                <RmsDashboardSidebar />
                            </SheetContent>
                        </Sheet>

                        <Button className='flex-1 font-bold space-x-4' variant="outline" >
                            <GiRobotAntennas size={25} />
                            {singleRobot.robotName}</Button>
                    </div>


                    <div className="flex justify-between space-x-4" >

                        <span className="bg-white flex flex-col md:flex-row space-x-4 items-center rounded-md p-4 md:px-12 shadow-md " >
                            <AiOutlineDeliveredProcedure size={40} color="blue" />
                            <div className="font-semibold" >
                                <p>255</p>
                                <h2>Total delivered</h2>

                            </div>
                        </span>
                        <span className="bg-white flex flex-col md:flex-row space-x-4 items-center rounded-md p-4 md:px-12 shadow-md " >
                            <FaCartArrowDown size={40} color="blue" />
                            <div className="font-semibold" >
                                <p>300</p>
                                <h2>Total orders</h2>

                            </div>
                        </span>
                    </div>
                    <div className="shadow-md rounded-md w-full flex flex-col-reverse md:flex-row items-center justify-center md:space-x-5 space-y-3 bg-white p-2 " >

                        <div className="flex space-x-8 mt-5 md:mt-0 " >
                            <div className="bg-blue-200 relative p-3 rounded-md " >
                                <IoMdNotificationsOutline size={30} color="blue" />
                                <span className="absolute bg-blue-500 -right-2 -top-2 rounded-full p-1 " >
                                    <p className="text-white" >35</p>
                                </span>
                            </div>
                            <div className="bg-blue-200 relative p-3 rounded-md " >
                                <FaRegMessage size={30} color="blue" />
                                <span className="absolute bg-blue-500 -right-2 -top-2 rounded-full p-1 " >
                                    <p className="text-white" >35</p>
                                </span>
                            </div>
                            <div className="bg-blue-200 relative p-3 rounded-md " >
                                <IoSettingsOutline size={30} color="blue" />
                                <span className="absolute bg-blue-500 -right-2 -top-2 rounded-full p-1 " >
                                    <p className="text-white" >35</p>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg flex items-center space-x-4 rounded-md p-1 px-4 " >
                            <h3 className="font-semibold text-lg " >Hafizul Imran</h3>
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* top section end */}

                {/* bottom section */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between space-x-4 " >

                    <div className=" md:basis-8/12 space-y-3 " >
                        <h2 className="font-semibold" >Camera View</h2>
                        <div className="flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 w-full">
                            <div className=" md:basis-9/12 space-y-4 " >

                                <Image src={'https://i.ibb.co/b7wpjtB/2151176287.jpg'} alt="dummy_image" width={1000} height={1000} className="w-full h-64 rounded" />
                                <div className="flex justify-evenly" >
                                    <Button className='bg-primary' >Front</Button>
                                    <Button className='bg-primary' >Back</Button>
                                    <Button className='bg-primary' >Left</Button>
                                    <Button className='bg-primary' >Right</Button>
                                </div>
                            </div>
                            <div className=" hidden md:flex justify-between md:flex-col md:basis-3/12 md:space-y-4 ">
                                <Image src={'https://i.ibb.co/CvCq1rp/43822.jpg'} alt="camera_image" className="w-full h-24" width={100} height={100} />
                                <Image src={'https://i.ibb.co/GdtXkbC/2151153910.jpg'} alt="camera_image" className="w-full h-24" width={100} height={100} />
                                <Image src={'https://i.ibb.co/pxjMBR2/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg'} alt="camera_image" className="w-full h-24" width={100} height={50} />
                            </div>

                        </div>
                        <div className="bg-cyan-400 " >
                            <MapPath />
                        </div>
                    </div>

                    {/* bottom section end */}
                    <div className="basis-4/12 bg-white shadow-lg px-5 space-y-4 py-4 rounded-md " >
                        <h1 className="text-center h1">Selected points</h1>
                        <div className="flex items-center justify-center">
                            {positions.map((position, index) => {
                                return (
                                    <div
                                        className="w-8 h-8 bg-red-500 text-white mr-[10px] text-center cursor-pointer rounded-full"
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
                        <div className=" flex flex-row md:flex-col justify-between space-x-5 md:space-x-0 md:space-y-4">
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
    )
}

export default Rms