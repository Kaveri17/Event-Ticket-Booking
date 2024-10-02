import { IoLocationOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-orange-400 py-3">
      <div className="w-11/12 mx-auto flex justify-between items-center flex-wrap">
        <div className="container w-full md:w-1/4 py-2 md:py-0 px-5 flex flex-col justify-center ">
          <Link to="/">
            <div className="title flex items-center py-2">
              <div className="logo w-[15%] sm:w-[5%] md:w-[10%]">
                <img
                  src="/logo.png"
                  alt="AKA Ticket"
                  className="rounded-full w-full"
                />
              </div>
              <h2 className="ps-1 heading text-white text-lg md:text-xl tracking-wider">
                AKA Events
              </h2>
            </div>
          </Link>
          <div className="description text-white text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fuga
            rem culpa repudiandae? Amet, quasi nisi ratione saepe perferendis
            ipsam.
          </div>
        </div>
        <div className="container w-full md:w-1/4 py-2 md:py-0 px-5 flex flex-col justify-center">
          <div className="title py-2">
            <h2 className="heading text-white text-lg md:text-xl tracking-wider">
              Quick Links
            </h2>
          </div>
          <div className="description text-white text-sm md:text-lg list-none">
            <Link to="/">
              <li className=" hover:text-slate-200">Home</li>
            </Link>
            <Link to="/about">
              <li className=" hover:text-slate-200">About Us</li>
            </Link>
            <Link to="/events">
              <li className=" hover:text-slate-200">Upcoming Events</li>
            </Link>
            <Link to="/faq">
              <li className=" hover:text-slate-200">FAQ</li>
            </Link>
          </div>
        </div>
        <div className="container w-full md:w-1/4 py-2 md:py-0 px-5 flex flex-col justify-center">
          <div className="title py-2">
            <h2 className="heading text-white text-lg md:text-xl tracking-wider">
              Contact Us
            </h2>
          </div>
          <div className="description text-white text-sm md:text-lg list-none ">
            <Link to="/contact" className="flex items-center pb-3">
              <IoLocationOutline className="text-lg md:text-xl" />
              <li className="text-white hover:text-slate-200 ps-2">
                Sanepa, Lalitpur, Nepal
              </li>
            </Link>
            <Link to="/contact" className="flex items-center pb-3">
              <IoIosMail className="text-lg md:text-xl" />
              <li className="text-white hover:text-slate-200 ps-2">
                akatravel@gmail.com
              </li>
            </Link>
            <Link to="/contact" className="flex items-center pb-3">
              <FaPhoneAlt className="text-lg md:text-xl" />
              <li className=" text-white hover:text-slate-200 ps-2">
                +977 9817894456
              </li>
            </Link>
          </div>
        </div>
        <div className="container-icon w-full md:w-1/4 py-2 md:py-0 px-5 flex flex-col justify-center">
          <div className="title py-2">
            <h2 className="heading text-white text-lg md:text-xl tracking-wider">
              Follow Us
            </h2>
          </div>
          <div className="description text-white text-sm md:text-lg list-none ">
            <Link
              to="/contact"
              className="flex items-center pb-1 hover:text-slate-200"
            >
              <FaFacebook className="text-lg md:text-xl" />
              <li className="text-white ps-2">Facebook</li>
            </Link>
            <Link
              to="/contact"
              className="flex items-center pb-1 hover:text-slate-200"
            >
              <FaInstagram className="text-lg md:text-xl" />
              <li className="text-white ps-2">Intstagram</li>
            </Link>
            <Link
              to="/contact"
              className="flex items-center pb-1 hover:text-slate-200"
            >
              <FaLinkedin className="text-lg md:text-xl" />
              <li className=" text-white ps-2">LinkedIn</li>
            </Link>
            <Link
              to="/contact"
              className="flex items-center pb-1 hover:text-slate-200"
            >
              <FaTwitter className="text-lg md:text-xl" />
              <li className=" text-white ps-2">Twitter</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
