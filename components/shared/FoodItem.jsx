'use client'

import { BsFillCartCheckFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

import ConfirmOrder from "./ConfirmOrder";
import Image from "next/image";

const FoodItem = ({ item }) => {
  
  const {id, name, description, price, photo: image } = item;


  return (
    <div>
      <div className="card  w-full bg-base-100 shadow-xl image-full ">


        <figure className="w-full h-60" >
          <Image src={image} alt={name} className="rounded-md" layout="fill" objectFit="cover"  />
        </figure>
        <div className="card-body justify-end p-5">
          <div className=" flex flex-col flex-start">

            <div className=" mx-auto w-2/4 text-black  font-bold text-xl backdrop-blur-md drop-shadow-md bg-white bg-opacity-40 p-2 rounded-md"> 
                <h2 className="drop-shadow-xl animate-bounce ">{name}</h2>
            <h2 className="">{price} tk</h2>
            </div>
          

            <div className="card-actions flex justify-between">
           
              <ConfirmOrder  item={item} />
             
   
              
              <div className="flex gap-2">
                <BsFillCartCheckFill className="text-green-700 text-3xl font-bold" />
                <MdFavorite className="text-green-700 text-3xl font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;