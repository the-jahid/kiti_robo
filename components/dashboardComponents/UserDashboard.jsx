import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';

import { UserTable } from '../shared/UserTable';


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
        <Tabs defaultValue="all" className="w-100vw min-h-screen ">
            <div className='px-10' >
               
                
                <TabsContent className="min-h-screen" value="pending">
                    {userdata && <UserTable data={userdata} filterStatus="pending" />}
                </TabsContent>
                <TabsContent value="all" className="min-h-screen" >
                    {userdata && <UserTable data={userdata} />}
                </TabsContent>
                <TabsContent className="min-h-screen" value="accepted">
                    {userdata && <UserTable data={userdata} filterStatus="apcepted" />}
                </TabsContent>
            </div>
            <div className='sticky bottom-5 mx-auto  flex justify-center items-center  '>
                <TabsList className="p-2 md:p-4 rounded-md text-black border" >
                   <TabsTrigger value="pending" className='text-md'>Pending Orders</TabsTrigger>
                    
                   <TabsTrigger value="all" className='text-md'>All Orders</TabsTrigger>
                    <TabsTrigger value="accepted" className='text-md'>Accepted Orders</TabsTrigger>
                </TabsList>
            </div>
        </Tabs>
    )
}

export default UserDashboard;