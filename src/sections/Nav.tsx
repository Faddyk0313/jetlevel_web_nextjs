"use client";

import { FaPhone } from "react-icons/fa6";
import NavbarDropdown from "@/components/Nav/MobileNav";
import NavOptions from "@/components/Nav/NavOptions";

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";
const Nav = () => {
  const [search, setSearch] = useState('');
  const [searchBar, setSearchBar] = useState(false);

  const highlightText = () => {
    const bodyElement = document.getElementsByTagName('body')[0];
    const contentElements = bodyElement.getElementsByTagName('*');

    let firstMatchFound = false;

    Array.from(contentElements).forEach((element) => {
      const textContent = element.textContent;

      if (textContent) {
        const index = textContent.toLowerCase().indexOf(search.toLowerCase());

        if (index !== -1 && !firstMatchFound) {
          const regex = new RegExp(`(${search})`, 'gi');

          element.innerHTML = element.innerHTML.replace(regex, '<mark>$1</mark>');

          element.scrollIntoView({ behavior: 'smooth', block: 'center' });

          firstMatchFound = true;
        }
      }
    });
  };

  return (
    <header className="bg-black sticky top-0 z-50 px-5 md:px-10 lg:px-20 ">
      <nav className="text-white sticky flex items-center lg:items-end justify-between py-4 sm:py-3 lg:pt-2  max-w-[1800px] mx-auto ">
        <Link id="logo" className="flex-1 min-w-40 max-w-56 mr-4" href={"/"}>
          <Image
            width={790}
            height={142}
            className="w-auto h-auto"
            src="/images/Logo.png"
            alt="Jet Level Aviation Logo"
          />
        </Link>
        <div className="flex items-end gap-2 md:gap-5">
          <div className="hidden lg:block pb-[10px]">
            <NavOptions />
          </div>

          <div id="contact-request" className="flex flex-col text-xs xl:text-sm items-end gap-2 lg:gap-0.5 ">
            <div className="hidden lg:flex items-center gap-1 text-[11px] mr-3">
              {/* <div className='flex items-center pr-4 cursor-pointer ' onClick={() => setSearchBar(true)}>
               <FiSearch className="text-xl" />
                <p>Search</p>
            </div>
              {
                searchBar &&
                <div 
                  className={`flex justify-between flex-col rounded-lg absolute right-0 w-[65%] bg-black h-[133px] items-end z-50 transition-all duration-300 ease-in-out transform ${
                    searchBar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  >
                  <div onClick={() => setSearchBar(false)} className='relative flex items-end justify-end '>
                    <div className="">
                    <RiCloseLargeFill className="text-xl cursor-pointer absolute right-0 text-white top-[49px]" />
                    </div>
                  </div>
                  <div className='w-full h-[43px] flex items-center mb-[13px] bg-white rounded-[10px] pl-4'>
                      <button className='text-black' onClick={highlightText}>
                        <FiSearch className="text-xl"  />
                      </button>
                      <input
                        onKeyDown={(e) => e.key === 'Enter' && highlightText()}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                        className="focus:outline-transparent text-black text-[15px] pl-4 w-[96%] max-[700px]:w-[90%]"
                        type="text"
                      />
                    </div>
                </div>
              } */}
              <FaPhone className=" animate-ringing" />
              <a href="tel:+18555385383" className="whitespace-nowrap" >(855) 538-5383</a>
            </div>
            <Link href='/request-a-quote' className="cursor-pointer whitespace-nowrap bg-gradient-to-br from-[#a94442] via-[#d9534f] to-[#c9302c] text-white py-2 md:py-2.5 px-2 md:px-3 rounded-full transition-all  duration-300 hover:-translate-y-0.5 ">
              Request a Quote
            </Link>
          </div>
          <div id="dropdown-nav" className="lg:hidden ">
            <NavbarDropdown />
          </div>
        </div>
      </nav>
    </header>

  );
};

export default Nav;
