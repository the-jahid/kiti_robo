'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import AcceptDeleteModal from '@/components/shared/AcceptDeleteModal';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';


const OwnerDashboard = () => {

    
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('jwtToken'); // get jwt token from local storage

            try {
                const response = await axios.get('http://203.190.8.197/food/get_order_list',
                    {
                        headers: {
                            'Authorization': `Bearer ${token}` // send the jwt token in the header
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


    const AcceptDeleteOrder = async (item) => {
        const { value, order_id } = item;

        console.log('value', value, order_id);
        const token = localStorage.getItem('jwtToken'); // get jwt token from local storage

        try {
            const response = await axios.post(`http://203.190.8.197/food/change_status/${order_id}`,
                { "status": `${value}` },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // send the jwt token in the header
                    }
                }
            );

            console.log(response.data);
            toast.success('Success');
        } catch (error) {
            console.error(`Error: ${error}`);
            toast.error('Error Happened');
        }
    }


    if(orders.length === 0) {
        return(
            <div>

            </div>
        )
    }


    return (
        <div className=" flex  w-full  " >
            <Tabs defaultValue="orders" className="w-full flex ">
                <TabsList className="basis-2/12 flex flex-col space-y-4">
                    <TabsTrigger className="text-xl" value="orders">Orders</TabsTrigger>
                    <TabsTrigger className="text-xl" value="history">Orders History</TabsTrigger>
                </TabsList>
                <TabsContent value="orders" className="bg-gradient-to-r from-slate-50 to-blue-100 p-5 basis-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center align-items-center">

                    {/* Display orders here */}
                    {orders.map(order => {
                        const { id: foodID, name, price, description, photo: foodPhoto } = order?.food;
                        const { id: userId, first_name, last_name } = order?.user;
                        const quantity = order?.quantity;
                        const status = order?.status;
                        const id = order?.id;


                        return (
                            <div key={order.id} className='w-full bg-white shadow-md rounded-md flex flex-col p-3 space-y-4 ' >
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
                                <hr />
                                <div className='flex justify-evenly' >

                                    <AcceptDeleteModal
                                        id={`my_modal_accept_${id}`}
                                        title="Are you sure you want to accept this order?"
                                        buttonText="Accept"
                                        buttonColor="bg-primary"
                                        onConfirm={() => AcceptDeleteOrder({ value: "A", order_id: id })}
                                    />
                                    <AcceptDeleteModal
                                        id={`my_modal_delete_${id}`}
                                        title="Are you sure you want to delete this order?"
                                        buttonText="Delete"
                                        buttonColor="bg-gradient-to-r from-rose-400 to-red-500"
                                        onConfirm={() => AcceptDeleteOrder({ value: "D", order_id: id })}
                                    />

                                </div>
                                <hr />
                                <div className='flex  justify-evenly ' >
                                    <p>User Id: <span className='font-bold  ' >{userId}</span></p>
                                    <p>Ordered by: <span className='font-bold' >{first_name}</span></p>

                                </div>
                            </div>
                        )
                    })}
                </TabsContent>
                <TabsContent value="history" className="bg-blue-500 basis-10/12 " >
                    <h2>Hello world</h2>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default OwnerDashboard;


