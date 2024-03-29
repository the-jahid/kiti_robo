'use client'

import RmsDashboardSidebar from "@/components/dashboardComponents/RmsDashboardSidebar";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useForm } from "react-hook-form";

// import MapPath from "../map/MapPath";
import MapPath from "@/components/map/MapPath";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux"
// import io from "socket.io-client";
import { useEffect, useState } from "react";
import axios from "axios";
import { setLocation } from "@/features/robots/currentPosition";
import { setRoute } from "@/features/robots/makeRoute";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";


import { AcceptDeleteOrder } from "@/components/shared/AcceptDeleteOrder";



const Rms = () => {

    const dispatch = useDispatch();
    const positions = useSelector((state) => state.positions.positions);
    const [orders, setOrders] = useState([]);
    const singleRobot = useSelector((state) => state.robots.singlerobot);
    const [refresh, setRefresh] = useState(false);

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
            const position = { lat: json.latitude, lon: json.longitude };
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
                toast.success('Route Send Successfully')
            })
            .catch((error) => {
                alert("Route not Sent");
                console.log(error);
            });
    };

    const images = [
        'https://i.ibb.co/23S9DB5/Icon-Camera-svg.png',
        'https://i.ibb.co/23S9DB5/Icon-Camera-svg.png',
        'https://i.ibb.co/23S9DB5/Icon-Camera-svg.png'
    ];


    const DeliveryItem = (id) => {
        AcceptDeleteOrder({order_id:id, value:'S' })
        setRefresh(!refresh);
    }


    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('jwtToken');

            try {
                const response = await axios.get('http://203.190.8.197/food/get_order_list',
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                setOrders(response.data);
            } catch (error) {
                console.error(`Error: ${error}`);
            }
        };

        fetchOrders();
    }, [refresh]);



    return (
        <div className="flex justify-between h-full ">

            {/* sidebar */}
            <div className="basis-3/12 bg-white px-5 space-y-3 hidden md:block my-auto ">
                <RmsDashboardSidebar />

            </div>
            {/* sidebar ends */}

            <div className=" basis-12/12 md:basis-9/12 bg-blue-50 flex flex-col p-4 space-y-4 w-full " >

                {/* top section */}
                {/* <div className="flex flex-col md:flex-row justify-between w-full md:space-x-4 space-y-3 md:space-y-0 " >

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
                </div> */}
                {/* top section end */}

                {/* bottom section */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between space-x-4 " >

                    <div className=" md:basis-8/12 space-y-3 " >
                        <div className=" w-full" >
                            <div>
                                <Sheet>
                                    <SheetTrigger className={cn('bg-white shadow-md px-4 py-2 rounded flex space-x-4 items-center')} > Show Orders<MdOutlineShoppingCartCheckout size={25} /></SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                                            <SheetDescription className={cn('h-[90vh] overflow-y-auto ')}  >

                                                {orders.map((item, index) => {

                                                    const { id, food, user, quantity, status, address } = item;
                                                    const { id: foodId, name, price, description, photo } = food;
                                                    const { id: userId, first_name, last_name, email } = user;

                                                    return (
                                                        <div key={id} className="space-y-2  " >
                                                            {
                                                                status == 'APCEPTED' && <div className="flex p-2  justify-between bg-white border rounded-md mt-2 shadow-md  " >
                                                                    <p>{address}</p>
                                                                    <div>
                                                                        <button onClick={() => DeliveryItem(id)} className="bg-gray-200 p-1 rounded-md shadow-sm " > Deliverd</button>
                                                                    </div>
                                                                </div>
                                                            }


                                                        </div>
                                                    );
                                                })}

                                            </SheetDescription>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>

                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 w-full">
                            <div className=" md:basis-9/12 space-y-4 " >
                                <div>
                                    <video width="100%" height="100%" controls>
                                    <source src="video.mp4" type="video/mp4" />
                                    <source src="video.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                    </video>   
                                </div>

                                <div className="flex justify-evenly" >
                                    <Button className='bg-primary' >Front</Button>
                                    <Button className='bg-primary' >Back</Button>
                                    <Button className='bg-primary' >Left</Button>
                                    <Button className='bg-primary' >Right</Button>
                                </div>
                            </div>
                            <div className=" hidden md:flex justify-between md:flex-col md:basis-3/12 md:space-y-4 ">
                                <Image src={'https://i.ibb.co/m0HL19M/360-F-107579101-QVl-TG43-Fwg9-Q6ggw-F436-MPIBTVpa-KKtb.jpg'} alt="camera_image" className="w-full h-24 border-2" width={100} height={100} />
                                <Image src={'https://i.ibb.co/m0HL19M/360-F-107579101-QVl-TG43-Fwg9-Q6ggw-F436-MPIBTVpa-KKtb.jpg'} alt="camera_image" className="w-full h-24 border-2" width={100} height={100} />
                                <Image src={'https://i.ibb.co/m0HL19M/360-F-107579101-QVl-TG43-Fwg9-Q6ggw-F436-MPIBTVpa-KKtb.jpg'} alt="camera_image" className="w-full h-24 border-2" width={100} height={50} />
                            </div>

                        </div>
                        <div className="bg-cyan-400  h-96" >
                            <MapPath />
                        </div>
                    </div>

                    {/* bottom section end */}
                    <div className="  flex flex-col  bg-white p-5 shadow-lg  space-y-4  rounded-md lg:items-center " >



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
                        <div className=" flex flex-col space-y-4 justify-between   p-2 w-full">
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
            <div>
            </div>
        </div>
    )
}

export default Rms