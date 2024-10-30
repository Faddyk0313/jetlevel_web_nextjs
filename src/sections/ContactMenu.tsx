import Link from "next/link";
import React from "react";

import { IoMail, IoCall } from "react-icons/io5";
import { IoIosAirplane } from "react-icons/io";

const ContactMenu = () => {
  return (
    <section className="sticky bottom-0 p-0 bg-white z-50">
      <div className="max-w-[1800px] mx-auto md:px-5 grid grid-cols-3 md:grid-cols-4 gap-1">
        <Link
          className="flex items-center justify-center gap-2 bg-[#ebecee] text-xs md:text-base font-bold md:font-normal text-gray-800 py-3 text-center"
          href={"#"}
        >
          <IoCall className="hidden md:block text-2xl" />
          <span>CALL US</span>
        </Link>
        <Link
          className="hidden md:flex items-center justify-center gap-2  bg-[#ebecee] text-xs md:text-base font-bold md:font-normal text-gray-800 py-3 text-center"
          href={"#"}
        >
          <IoMail className="hidden md:block text-2xl" /> 
          <span>EMAIL US</span>
          

        </Link>
        <Link
          className="flex items-center justify-center gap-2 bg-[#ebecee] text-xs md:text-base font-bold md:font-normal text-gray-800 py-3 text-center"
          href={"#"}
        >
          <IoCall className="hidden md:block text-2xl" />
          <span>CALLBACK</span>
          
        </Link>
        <Link
          className="flex items-center justify-center gap-2 bg-[#0071ba] text-xs md:text-base font-bold md:font-normal text-white py-3 text-center"
          href={"#"}
        >
          <IoIosAirplane className="hidden md:block text-2xl" /> 
          <span>INQUIRE NOW</span>
          
        </Link>
      </div>
    </section>
  );
};

export default ContactMenu;
