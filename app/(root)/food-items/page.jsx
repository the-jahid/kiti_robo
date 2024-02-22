"use client";

import FoodItem from "@/components/shared/FoodItem";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useData } from "@/hooks/useData";
import Image from "next/image";
import { FaBurger, FaPizzaSlice, FaIceCream } from "react-icons/fa6";
import { MdRamenDining } from "react-icons/md";
import { RiCake3Line } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Skeleton } from "@/components/ui/skeleton";

const tabsData = [
  { value: 'burger', icon: FaBurger, label: 'Burger' },
  { value: 'pizza', icon: FaPizzaSlice, label: 'Pizza' },
  { value: 'cupcake', icon: RiCake3Line, label: 'Cupcake' },
  { value: 'ramen', icon: MdRamenDining, label: 'Ramen' },
  { value: 'icecream', icon: FaIceCream, label: 'Ice Cream' },
];

// Start Food Item page function
const FoodItemPage = () => {
  const { data: foodsData } = useData("http://203.190.8.197/food/foods");

  return (
    <main className="bg-primary_background px-5 md:px-10 lg:px-16 py-16">
      <section className="px-4 sm:px-8 md:px-16">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-center text-primary font-bold"
        >
          Choose Your Desired Dishes From our Shop Partners
        </h2>
        <div
          className="flex flex-col md:flex-row justify-end items-stretch md:items-center gap-2 sm:gap-4 md:gap-8 py-10"
        >
          <Input
            type="text"
            placeholder="What would you like to eat?"
            className="w-full md:w-auto flex-grow"
          />
          <Button className="bg-primary w-full md:w-auto mt-2 md:mt-0 md:ml-2">Search</Button>
        </div>
      </section>
      <section style={{ background: "#EAFFEA" }} className="rounded-lg pb-10">
        <div className="flex flex-col md:flex-row items-center justify-center ml-4 sm:ml-8 md:ml-10 gap-4 sm:gap-6 md:gap-10 ">
          <Image
            src={"https://i.ibb.co/8NZMsSq/green-Garden-logo.png"}
            alt="food_item_card"
            width={100}
            height={100}
            className="rounded-full md:w-32 md:h-32 lg:w-48 lg:h-48"
          />
          <h3
            className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-800"
          >
            Menu That Always <br /> Makes You Fall In Love
          </h3>
        </div>
        <Tabs defaultValue="burger" className="w-full flex flex-col md:flex-row items-center">
          <TabsList className="flex md:flex-start flex-row md:flex-col gap-2 w-full bg-transparent flex-wrap basis-1/6">
            {tabsData.map(({ value, icon: Icon, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="data-[state=active]:bg-green-800 rounded-full p-3 pr-10 flex items-center justify-start gap-3"
              >
                <Icon className="bg-white rounded-full text-yellow-700 text-2xl p-1" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          <section className="md:basis-3/4">
            <TabsContent value="burger">

              {foodsData.length !== 0 ? <div className="w-full mt-10">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4000,
                    
                  }}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 6,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  
                  style={{
                    width: "80vw",
                    paddingTop: "20px",
                    paddingBottom: "50px",
                  }}
                >
                  {foodsData?.map((item) => (
                    <SwiperSlide
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "300px",
                        height: "full",
                      }}
                      key={item.id}
                    >
                      <FoodItem item={item} />
                    </SwiperSlide>
                  ))}
                  {foodsData?.map((item) => (
                    <SwiperSlide
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "300px",
                        height: "full",
                      }}
                      key={item.id}
                    >
                      <FoodItem item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>: <div className="h-full w-full flex justify-center items-center" >
              <Skeleton className=" w-full h-72" />
              </div> }
            </TabsContent>
            <TabsContent value="pizza">
             <h2>Pizza</h2>
            </TabsContent>
          </section>
        </Tabs>
      </section>
    </main>
  );
};

export default FoodItemPage;
