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
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29183.554488498266!2d90.31956364999999!3d23.89159335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1706485148845!5m2!1sen!2sbd"
                                className="w-full h-[240px]"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* bottom section end */}
                    <div className="basis-4/12 bg-white shadow-lg px-5 space-y-4 py-4 rounded-md " >

                        <div className="flex flex-col items-center justify-center bg-white shadow-lg p-2 " >
                            <p className="text-xl font-semibold text-primary " >Enter Details</p>
                            <hr />
                            <form className="flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
                                {formFields.map((field) => (
                                    <div className="flex flex-col" key={field.id}>
                                        <label htmlFor={field.id} className="font-semibold">{field.label}</label>
                                        <Input type='text' {...register(field.id, { required: true })} />
                                    </div>
                                ))}
                                <Button type='submit'>Confirm Destination</Button>
                            </form>
                        </div>
                        <div className=" flex flex-row md:flex-col justify-between space-x-5 md:space-x-0 md:space-y-4 " >
                            <button className="p-4 md:py-6 flex-1 bg-primary rounded " >
                                <h2 className="text-xl text-white " >Kiti Run</h2>
                            </button>
                            <button className="p-4 md:py-6 flex-1 bg-red-500 rounded " >
                                <h2 className="text-xl text-white " >Kiti Stop</h2>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rms