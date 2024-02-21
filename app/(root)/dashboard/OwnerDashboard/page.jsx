'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminUserTable } from '@/components/shared/UserTable';

const OwnerDashboard = () => {

    const [orders, setOrders] = useState([]);

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
    }, []);



    if(orders.length === 0) {
        return(
            <div className='h-screen' >
                    <h2>Loading</h2>
            </div>
        )
    }
    

    return (
        <Tabs defaultValue="all" className="w-100vw min-h-screen ">
            <div className='px-5' >
                <TabsContent value="all" className="min-h-screen" >
                    {orders && <AdminUserTable data={orders} />}
                </TabsContent>
                <TabsContent className="min-h-screen" value="pending">
                {orders && <AdminUserTable data={orders} filterStatus="pending" />}
                </TabsContent>
                <TabsContent className="min-h-screen" value="accepted">
                {orders && <AdminUserTable data={orders} filterStatus="apcepted" />}
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

export default OwnerDashboard;


