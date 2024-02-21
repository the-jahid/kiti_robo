import axios from 'axios';
import toast from 'react-hot-toast';

const CancelOrder = async (id, setStatus) => {

  console.log('idddd', id);

  const token = localStorage.getItem('jwtToken');
  
  try {
    const response = await axios.get(`http://203.190.8.197/food/change_status/${id}`,
     
        {
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        }
    );
    
    window.location.reload();
    toast.success('Success');
} catch (error) {
    console.error(`Error: ${error}`);
    toast.error('Error Happened');
}
}

export default CancelOrder;