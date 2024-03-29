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
    'https://i.ibb.co/7rY5ySX/Whats-App-Image-2024-03-18-at-4-51-00-PM-3.jpg',
    'https://i.ibb.co/GkZTdqL/Whats-App-Image-2024-03-18-at-4-51-00-PM.jpg',
    'https://i.ibb.co/4RGRzcT/Whats-App-Image-2024-03-18-at-4-50-58-PM.jpg',
    'https://i.ibb.co/4RGRzcT/Whats-App-Image-2024-03-18-at-4-50-58-PM.jpg',
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
          The Daffodil Robotics Lab, located within Daffodil International University&apos;s Faculty of FSIT in DSC, is dedicated to advancing robotics and artificial intelligence. We&apos;re dedicated to making industries more efficient through our research in autonomous robotics, robotic systems, and human-machine interaction. Collaborating with industry and academia, we develop practical applications like the KITI Autonomous Delivery Robot and explore drone technology, shaping the future of robotics. Our commitment to improving efficiency and precision in all domains is reflected in the recognition our students, faculty, and alumni receive as leaders in the field. In addition to our research initiatives, we actively engage with the robotics community through the organization of robotics competitions and workshops. These events provide platforms for students, faculty, and industry professionals to showcase their innovations, exchange ideas, and foster collaboration in the field of robotics.
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
          Other Robots From Our Lab
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