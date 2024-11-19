import Link from "next/link";
import React from "react";

import { IoMail, IoCall } from "react-icons/io5";
import { IoIosAirplane } from "react-icons/io";

const ContactMenu = () => { 
  return (
    <section className="sticky bottom-0 p-0 bg-[#f7f7f7] z-20">
      <div className="max-w-[1800px] mx-auto px-0 md:px-10 lg:px-20 grid grid-cols-3 gap-1">
        <a
          className="flex items-center justify-center gap-2 bg-[#ebecee] text-xs md:text-base font-bold md:font-normal text-gray-800 py-2 text-center hover:text-blue transition-all duration-100"
          href={"tel:+18555385383"}
        >
          <IoCall className="hidden md:block text-2xl" />
          <span>CALL US</span>
        </a>
        <a
          className="flex items-center justify-center gap-2  bg-[#ebecee] text-xs md:text-base font-bold md:font-normal text-gray-800 py-2 text-center hover:text-blue transition-all duration-100"
          href={"mailto:Sales@jetlevel.com"}
        >
          <IoMail className="hidden md:block text-2xl" /> 
          <span>EMAIL US</span>
        </a>
        <Link
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8]  text-xs md:text-base font-bold md:font-normal text-white py-2 text-center hover:text-blue transition-all duration-100"
          href={"https://jetlevel.com/request-a-quote"}
        >
          <IoIosAirplane className="hidden md:block text-2xl" /> 
          <span>INQUIRE NOW</span>
          
        </Link>
      </div>
    </section>
  );
};

export default ContactMenu;
