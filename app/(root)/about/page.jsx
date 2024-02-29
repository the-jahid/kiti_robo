"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "./style.css";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

// import required modules
import { Button } from "@/components/ui/button";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import { advisorInfo, teamInfo } from "@/constants";
import TeamInfoCard from "@/components/shared/TeamInfoCard";

const AboutPage = () => {

  const imageUrls = [
    'https://i.ibb.co/cYyPJBj/322733638-588320723135399-4255754482603456451-n.jpg',
    'https://i.ibb.co/jLpR5vt/144396528-10158270962907203-2704272389211756919-n.jpg',
    'https://i.ibb.co/w00QQTY/143612997-10158270962587203-2482701882574694851-n.jpg',
  ];

  return (
    <div className="bg-sky-100 p-5 md:py-10 md:px-10 lg:px-20 flex flex-col gap-10 md:gap-16 lg:gap-28">

      <section className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16">
        <div className="w-full lg:w-6/12 order-2 lg:order-1">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep_blue mb-3 sm:mb-5 md:mb-10"
          >
            Robotics Lab
          </h1>
          <p className="text-xs sm:text-sm md:text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            natus autem aspernatur vitae incidunt minus magni esse optio velit!
            Quia rem ullam officia veritatis, praesentium molestiae iste tenetur
            sint asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eligendi natus autem aspernatur vitae incidunt minus magni
            esse optio velit! Quia rem ullam officia veritatis, praesentium
            molestiae iste tenetur sint asperiores. Lorem ipsum dolor sit amet.
          </p>
          <div className="mt-5 sm:mt-10 flex gap-5 md:gap-10">
            <Button
              className="bg-primary hover:bg-deep_blue duration-300 hover:scale-110"
            >
              Read More
            </Button>
            <Button
              className="hover:bg-primary bg-deep_blue duration-300 hover:scale-110"
            >
              Order Food
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 order-1 lg:order-2">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="h-48 sm:h-72 lg:h-full w-full"
          >
            {imageUrls.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full relative">
                  <Image src={imageUrl} layout="fill" alt="about_images" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
       <section>
        <div>
            <h1
              className="text-2xl md:text-4xl text-deep_blue 
            font-bold text-center mb-3"
            >
              Advisor Panel
            </h1> 
         </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 " >
            {advisorInfo.map((item) => <div key={item.id} className="shadow-md border rounded-md flex flex-col justify-center items-center p-3 space-y-3" > 
                <div className="w-[150px] h-[150px] relative" >
                   <Image src={item.imageLInk} layout="fill" alt="advisor_image" className="rounded-full" />
                   
                </div>
                <p className="text-primary font-semibold" >{item.name}</p>
             </div> )}
          </div>
       </section>

      <section>
        <div>
          <h1
            className="text-2xl md:text-4xl text-deep_blue 
          font-bold text-center mb-3"
          >
            Our Team
          </h1> 
        </div>
     
        <div className="bg-transparent w-full  mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  " >
              {
                teamInfo.map((item) => <TeamInfoCard key={item.id} item={item} />  )
              }
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-16 justify-center items-center">
        <h1 className="text-4xl text-deep_blue font-bold">
          Other Robots Developed By Us
        </h1>

        <Image
          src="https://i.ibb.co/ZmCH5VT/50327611-221923692022614-1140279294140874752-n.jpg"
          alt="Description of Image"
          width={1400} // replace with actual width
          height={400} // replace with actual height
        />
      </section>
    </div>
  );
};

export default AboutPage;