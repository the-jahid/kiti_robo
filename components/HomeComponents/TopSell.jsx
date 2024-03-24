"use client";
import FoodItem from "../shared/FoodItem";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useData } from "@/hooks/useData";


const TopSell = () => {
  const { data: foodsData } = useData("http://203.190.8.197/food/foods");
  return (
    <section className="flex flex-col items-center justify-center h-full p-5 w-full ">
      <div className="text-center space-y-2  ">
        <h2 className="text-4xl font-semibold text-deep_blue ">
          Our Food Items
        </h2>
        <p>Order your favourite food</p>

    {foodsData.length == 0 ?   
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" > 
{Array.from({length: 3}).map((item, index) => 
<div key={index} role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
</div>

)}
</div> :     <div className="w-full mt-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            // className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4  "
            style={{
              width: "90vw",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            {foodsData?.map((item) => (
              <SwiperSlide
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "375px",
                  height: "full",
                }}
                key={item.id}
              >
                <FoodItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>  }
      </div>
    </section>
  );
};

export default TopSell;
