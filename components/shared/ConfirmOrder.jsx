'use client'
import Image from "next/image"
import { Button } from "../ui/button"
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ConfirmOrder = ( {item}) => {
        const {id, name, description, price, photo: image } = item;
        const [quantity, setQuantity] = useState(1)

    
const ConfirmOrder = async (id, quantity) => {
    const token = localStorage.getItem('jwtToken'); 
  
    try {
      const response = await axios.post('http://203.190.8.197/food/submit_order', 
        { food_id:String(id), quantity:String(quantity) }, 
        {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        }
      );
        
      toast.success(' sucessfully ordered')
      return response.data;
    } catch (error) {
        toast.error('Please Login to order the food');
        
    }
  }

  return (
    <> 
    <Button className="bg-primary" onClick={()=>document.getElementById(`my_modal_${id}`).showModal()}>Order</Button>
        <dialog id={`my_modal_${id}`} className="modal">
                <div className="modal-box bg-white space-y-4 ">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-xl">{name}</h3>

                 <div className="flex space-x-4 justify-center items-center " >
                     <Image src={image} alt="show_product" width={200} height={200} className="rounded" />

                     <div className="flex flex-col items-start" >
                        <p className="font-bold" >Quantity: {quantity}</p>
                        <p className="font-bold" >Price: {price}</p>
                        <p className="font-bold" >Total Price: {price*quantity}</p>
                     </div>
                 </div>

                    <div className="flex flex-col space-y-4 " >
                     
                       <div className="flex space-x-2 bg-blue-200 items-center justify-center rounded " >
                          <Button className='bg-primary px-10 font-bold ' onClick={() => setQuantity(quantity-1)}  >-</Button>
                          <p className="font-bold" >{quantity}</p>
                          <Button className="bg-primary px-10 font-bold" onClick={() => setQuantity(quantity+1)} >+</Button>
                       </div>
                       <Button className='bg-primary' onClick={() => ConfirmOrder(id, quantity)} >Confirm Order</Button>
                    </div>
                </div>
              </dialog>
    </>
  )
}

export default ConfirmOrder
