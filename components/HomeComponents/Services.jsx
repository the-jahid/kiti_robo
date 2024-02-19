import { ServicesItem } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section  className="flex justify-center items-center p-5  flex-col  ">
        <div  className="text-center space-y-3" >
            <h1 className="text-4xl font-bold " ><span className="text-primary">Our</span> <span className="text-deep_blue"  >Services</span></h1>
            <p>Your Smart Link Between Cravings and Convenience</p>
        </div>
        
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-10  " >
            {ServicesItem.map(( item) => <div key={item.id} className="shadow-md bg-gradient-to-tl from-blue-300 to-indigo-500 rounded-md"  >
                  <Image src={item.image} width={300} height={300} alt="services_image" />
                  <h2 className="text-center  font-bold text-deep_blue text-3xl " >{item.title}</h2>
            </div>  )}
        </div>

    
          
    </section>
  )
}

export default Services;



