'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import { cn } from '@/lib/utils';

const UserDashboard = () => {
    const [userdata, setuserdata] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            const jwtToken = localStorage.getItem('jwtToken'); 

            try {
                const response = await axios.get('http://203.190.8.197/food/submit_order', {
                    headers: {
                        'Authorization': `Bearer ${jwtToken}` 
                    }
                });

                setuserdata(response.data); 
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); 
    }, []);

    return (
        <div className=" flex  w-full  " >
            <Tabs defaultValue="myOrders" className="w-full flex  min-h-screen">
                <TabsList className="basis-2/12 flex flex-col space-y-4">
                    <TabsTrigger className="text-xl" value="myOrders">My orders</TabsTrigger>
                    <TabsTrigger className="text-xl" value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="myOrders" className=" bg-gradient-to-r from-slate-50 to-blue-100 p-5 basis-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center align-items-center">
                    
                    {userdata && userdata.map((order) => {

                        const {  name, price,  photo: foodPhoto } = order?.food;
                       
                        const quantity = order?.quantity;
                        const status = order?.status;
                        const id = order?.id;
                        return <div key={order.id} className='w-full bg-white shadow-md rounded-md flex flex-col p-3 space-y-4 ' >
                        <div className='flex font-semibold justify-around items-center ' >
                            <p  >Order id: {id} </p>
                            <p   >Quantity: {quantity}</p>
                            <div className={cn(' p-1 rounded text-sm mb-1', {
                                'bg-green-300': status == 'APCEPTED',
                                'bg-red-300': status == 'PENDING',

                            })}>
                                {status.toLowerCase()}
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-evenly ' >
                            <Image src={`http://203.190.8.197${foodPhoto}`} alt='food_photo' width={100} height={100} className='rounded-md' />
                            <div className=' flex flex-col justify-start font-semibold space-y-1' >
                                <p>Name: <span className='font-bold' > {name}</span></p>
                                <p>Price: <span className='font-bold' > {price}</span></p>
                                <p>Total Price: <span className='font-bold' > {price * quantity}</span></p>
                            </div>
                        </div>
                        
                    </div>
                    })}
                  
                </TabsContent>
                <TabsContent value="password" className="bg-blue-500 basis-10/12 " >
                    <h2>Hello worlddddddddddd</h2>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default UserDashboard;

