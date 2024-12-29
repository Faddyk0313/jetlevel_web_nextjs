"use client"; // Makes this component a client component

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IoMail, IoCall } from "react-icons/io5";
import { IoIosAirplane } from "react-icons/io";

const ContactMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the ContactMenu when scrolled down even slightly
      setIsVisible(window.scrollY > 0);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`hidden md:block sticky bottom-0 p-0 bg-[#f7f7f7] z-20 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-0 md:px-10 lg:px-20 grid grid-cols-3 gap-1">
        <a
          className="flex items-center justify-center gap-2 group bg-[#ebecee] text-xs md:text-base font-bold md:font-normal !text-gray-800 py-2 text-center hover:!text-blue transition-all duration-100"
          href={"tel:+18555385383"}
        >
          <IoCall className="hidden md:block text-2xl" />
          <span className='!text-[#1F2937] !font-[400] group-hover:!text-blue'>CALL US</span>
        </a>
        <a
          className="flex items-center justify-center gap-2 group bg-[#ebecee] text-xs md:text-base font-bold md:font-normal !text-gray-800 py-2 text-center hover:!text-blue transition-all duration-100"
          href={"mailto:Sales@jetlevel.com"}
        >
          <IoMail className="hidden md:block text-2xl" />
          <span className='!text-[#1F2937] !font-[400] group-hover:!text-blue'>EMAIL US</span>
        </a>
        <Link
          className="flex items-center group justify-center gap-2 bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8]  text-xs md:text-base font-bold md:font-normal text-white py-2 text-center hover:text-darkBlue transition-all duration-100"
          href={"/request-a-quote"}
        >
          <IoIosAirplane className="hidden md:block text-2xl" />
          <span className='!text-white !font-[400] group-hover:!text-darkBlue'>INQUIRE NOW</span>
        </Link>
      </div>
    </section>
  );
};

export default ContactMenu;
