import Form from "@/components/shared/Form/Form";
import { CgWebsite } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdOutlineFacebook } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="bg-sky-100 p-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p>Having any queries or problem ? Just let us know!</p>
      </section>
      <section className="bg-white w-2/3 flex items- mx-auto p-5 mt-10 rounded-lg">
        <div className="flex flex-col gap-20 bg-sky-300 p-8 rounded-lg w-1/2">
          <div>
            <h1 className="text-3xl font-bold text-deep_blue">
              Contact Information
            </h1>
            <p>Ask Anything, we did love to here.</p>
          </div>
          <div>
            <ul className="flex gap-5 flex-col">
              <li className="flex gap-4 items-center">
                <FaPhoneVolume />
                <span>+880xxx-xxxxxx</span>
              </li>
              <li className="flex gap-4 items-center">
                <MdEmail />
                <span>robotics@daffodil-bd.com</span>
              </li>
              <li className="flex gap-4 items-center">
                <FaLocationDot />
                <span>
                  Level 6, knowledge Tower, <br /> Daffodil International
                  University
                </span>
              </li>
            </ul>
          </div>
          <div className="flex gap-16 justify-center items-center text-3xl">
            <CgWebsite />
            <MdOutlineFacebook />
            <FaYoutube />
          </div>
        </div>
        <div className="w-1/2 -mt-20">
          <Form feedback={true} />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
