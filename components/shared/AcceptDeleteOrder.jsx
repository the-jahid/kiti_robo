import axios from "axios";
import toast from "react-hot-toast";

export const AcceptDeleteOrder = async (item) => {
    const { value, order_id } = item;

    
    const token = localStorage.getItem('jwtToken');

    try {
        const response = await axios.post(`http://203.190.8.197/food/change_status/${order_id}`,
            { "status": `${value}` },
            {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }
        );
        console.log('Responsee101', response);
        
        toast.success('Success');
        window.location.reload();
    } catch (error) {
        console.error(`Error: ${error}`);
        toast.error('Error Happened');
    }
}


