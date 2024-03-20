import Image from "next/image";
import { Button } from "../ui/button";
import AcceptDeleteModal from "./AcceptDeleteModal";
import { AcceptDeleteOrder } from "./AcceptDeleteOrder";
import CancelOrder from "./CancelOrder";

export const UserTable = ({ data, filterStatus }) => {
    const filteredData = filterStatus ? data.filter(item => item.status.toLowerCase() === filterStatus) : data;

    return (
        <div className="overflow-x-auto">
            {
                data.length == 0 ? <div className="flex justify-center items-center flex-col space-y-2" >
                    <h2 className="text-2xl" >No Items is added</h2>
                    <Image src={'https://i.ibb.co/59S6dzt/9214769.jpg'} width={600} height={400}  alt="nothing"/>
                </div> : <table className="table-auto w-full text-center mt-4">
                    <thead>
                        <tr className="bg-primary text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 md:px-3 sm:px-2">Food ID</th>
                            <th className="py-3 px-6 md:px-3 sm:px-2">Food Name</th>
                            <th className="py-3 px-6 md:px-3 sm:px-2">Price</th>
                            <th className="py-3 px-6 md:px-3 sm:px-2">Photo</th>
                            <th className="py-3 px-6 md:px-3 sm:px-2">Quantity</th>
                            <th className="py-3 px-6 md:px-3 sm:px-2">Total Price</th>
                            <th className="py-3 px-6 md:px-3 sm:px-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-light">
                        {filteredData.map((item, index) => {
                            const { id, food, user, quantity, status } = item;
                            const { id: foodId, name, price, description, photo } = food;
                            const { id: userId, first_name, last_name, email, role } = user;

                            return (
                                <tr key={id} className={`${index % 2 === 0 ? 'bg-blue-100' : ''} text-black`}>
                                    <td className="py-3 px-6 md:px-3 sm:px-2 ">{foodId}</td>
                                    <td className="py-3 px-6 md:px-3 sm:px-2">{name}</td>
                                    <td className="py-3 px-6 md:px-3 sm:px-2">{price}</td>
                                    <td className="py-3 px-6 md:px-3 sm:px-2 flex justify-center items-center">
                                        <Image
                                            src={`http://203.190.8.197${photo}`}
                                            alt={name}
                                            width={500}
                                            height={500}
                                            className="object-cover md:w-16 md:h-16 sm:w-12 sm:h-12 rounded-md"
                                        />
                                    </td>
                                    <td className="py-3 px-6 md:px-3 sm:px-2">{quantity}</td>
                                    <td className="py-3 px-6 md:px-3 sm:px-2">{quantity * price}</td>
                                    <td className="py-3 px-6 md:px-3 sm:px-2">{status == 'PENDING' ? <AcceptDeleteModal
                                        id={`my_modal_delete_${id}`}
                                        title="Are you sure you want to cancel this order?"
                                        buttonText="Cancel Order"
                                        buttonColor="bg-gradient-to-r from-rose-400 to-red-500"
                                        onConfirm={() => CancelOrder(Number(id))}
                                    /> : status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            }
        </div>
    );
};

export const AdminUserTable = ({ data, filterStatus }) => {
    const filteredData = filterStatus ? data.filter(item => item.status.toLowerCase() === filterStatus) : data;

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full text-center mt-4">
                <thead>
                    <tr className="bg-primary text-black uppercase text-sm leading-normal">
                        <th className="py-3 px-6 md:px-3 sm:px-2">Food ID</th>
                        <th className="py-3 px-6 md:px-3 sm:px-2">User ID</th>
                        <th className="py-3 px-6 md:px-3 sm:px-2">Orderd By</th>
                        <th className="py-3 px-6 md:px-3 sm:px-2">Food Name</th>
                        <th className="py-3 px-6 md:px-3 sm:px-2">Price</th>
                        <th className="py-3 px-6 md:px-3 sm:px-2">Photo</th>
                        <th className="py-3 px-6 md:px-3 sm:px-2">Quantity</th>
                        <th className="py-3 px-6 md:px-3 sm:px-2">Total Price</th>
                        <th className="py-3 px-6 md:px-3 sm:px-2">Status</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-light">
                    {filteredData.map((item, index) => {
                        const { id, food, user, quantity, status } = item;
                        const { id: foodId, name, price, description, photo } = food;
                        const { id: userId, first_name, last_name, email, role } = user;

                        return (
                            <tr key={id} className={`${index % 2 === 0 ? 'bg-blue-100' : ''} text-black`}>
                                <td className="py-3 px-6 md:px-3 sm:px-2 ">{foodId}</td>
                                <td className="py-3 px-6 md:px-3 sm:px-2 ">{userId}</td>

                                <td className="py-3 px-6 md:px-3 sm:px-2 ">{first_name + last_name}</td>
                                <td className="py-3 px-6 md:px-3 sm:px-2">{name}</td>
                                <td className="py-3 px-6 md:px-3 sm:px-2">{price}</td>
                                <td className="py-3 px-6 md:px-3 sm:px-2 flex justify-center items-center">
                                    <Image
                                        src={`http://203.190.8.197${photo}`}
                                        alt={name}
                                        width={500}
                                        height={500}
                                        className="object-cover md:w-16 md:h-16 sm:w-12 sm:h-12 rounded-md"
                                    />
                                </td>
                                <td className="py-3 px-6 md:px-3 sm:px-2">{quantity}</td>
                                <td className="py-3 px-6 md:px-3 sm:px-2">{quantity * price}</td>
                                <td className="py-3 px-6 md:px-3 sm:px-2">{status == 'PENDING' ? <div className=' flex flex-col space-y-2' >
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

                                </div> : 'Accepted'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

