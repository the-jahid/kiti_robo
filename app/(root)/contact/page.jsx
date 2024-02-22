'use client'
import Form from "@/components/shared/Form/Form";
import { useEffect, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdOutlineFacebook } from "react-icons/md";

const ContactPage = () => {

  const [iconSize, setIconSize] = useState(24);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(24);
      } else {
        setIconSize(30);
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-sky-100 p-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p>Having any queries or problem ? Just let us know!</p>
      </section>
      <section className="bg-white w-full md:w-2/3 flex flex-col md:flex-row items- mx-auto p-4 mt-10 rounded-lg">
      <div className="flex flex-col gap-6 sm:gap-10 bg-sky-300 p-4 sm:p-8 rounded-lg w-full md:w-1/2">
  <div>
    <h1 className="text-2xl sm:text-3xl font-bold text-deep_blue">
      Contact Information
    </h1>
    <p className="text-sm sm:text-base">Ask Anything, we did love to here.</p>
  </div>
  <div>
    <ul className="flex gap-3 sm:gap-5 flex-col">
      <li className="flex gap-2 sm:gap-4 items-center">
        <FaPhoneVolume />
        <span className="text-sm sm:text-base">+880xxx-xxxxxx</span>
      </li>
      <li className="flex gap-2 sm:gap-4 items-center">
        <MdEmail />
        <span className="text-sm sm:text-base">robotics@daffodil-bd.com</span>
      </li>
      <li className="flex gap-2 sm:gap-4 items-center">
        <FaLocationDot />
        <span className="text-sm sm:text-base">
          Level 6, knowledge Tower, <br /> Daffodil International
          University
        </span>
      </li>
    </ul>
  </div>
  <div className="flex gap-6 sm:gap-10 justify-center items-center text-2xl sm:text-3xl">
  <CgWebsite size={iconSize} />
  <MdOutlineFacebook size={iconSize} />
  <FaYoutube size={iconSize} />
</div>
</div>
        <div className=" w-full md:w-1/2 -mt-20">
          <Form feedback={true} />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;





