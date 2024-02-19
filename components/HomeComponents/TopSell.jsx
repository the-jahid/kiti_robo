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

        <div className="w-full mt-10">
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
        </div>
      </div>
    </section>
  );
};

export default TopSell;
