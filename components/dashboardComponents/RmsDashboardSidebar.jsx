'use client'

import { getRobotByid, getallRobotsList } from "@/features/robots/robotsSlice";
import { useEffect } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { MdAddCircleOutline } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const RmsDashboardSidebar = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getallRobotsList());
    }, [])

    const robots = useSelector((state) => state.robots)

    const { lists, singlerobot } = robots;

    const getBadgeProperties = (live) => {
        const badgeColor = live ? 'border-green-500' : 'border-red-500';
        const badgeText = live ? 'live' : 'available';
        return { badgeColor, badgeText };
    }

    const { badgeColor, badgeText } = getBadgeProperties(singlerobot.live);

    return (
        <div className="space-y-5" >
            {/* <Image src={'/assets/Kiti-Logo.png'} alt="kiti_logo_image" width={200} height={200} /> */}
            <div className="bg-primary flex space-x-3 p-2 px-5 rounded-md flex-start" >
                <CgMenuLeft size={25} />
                <p className="font-semibold" >Robots List</p>
            </div>

            <div className="flex space-x-4 shadow-sm p-3 bg-slate-50 border rounded-md justify-around items-center">
                <span className="flex items-center space-x-4" >
                    <RiRobot2Line size={40} />
                    <p className="font-semibold">{singlerobot.robotName}</p>
                </span>
                <div className={`badge ${badgeColor}`}>{badgeText}</div>
            </div>

            <div className="space-y-3 overflow-y-auto h-96 scrollbar-thin scrollbar-thumb-primary scrollbar-track-blue-100 scrollbar-rounded px-4 ">
                {lists.slice(1,).map((item) => {
                    const { badgeColor, badgeText } = getBadgeProperties(item.live);

                    return (
                        <btn onClick={() => dispatch(getRobotByid(item.id))} key={item.id} className=" cursor-pointer flex space-x-4 shadow-sm p-3 bg-slate-50 border rounded-md justify-between items-center">
                            <span className="flex items-center space-x-4" >
                                <RiRobot2Line size={40} />
                                <p className="font-semibold">{item.robotName}</p>
                            </span>
                            <div className={`badge ${badgeColor}`}>{badgeText}</div>
                        </btn>
                    );
                })}
            </div>

            <button className="bg-primary w-full flex justify-center items-center space-x-4 p-3 rounded-md" >
                <h2 className="font-semibold" >Add Robot</h2>
                <MdAddCircleOutline size={30} />
            </button>
        </div>
    )
}

export default RmsDashboardSidebar