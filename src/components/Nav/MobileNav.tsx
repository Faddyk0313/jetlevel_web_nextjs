"use client";

import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import NavClickedContent from "./NavClickedContent";

function NavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the class to show or hide the nav options
  const showNavOptions = () => {
    setIsOpen(!isOpen);
  };

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleClick = (menu: string) => {
    // If the clicked menu is already active, close it. Otherwise, open the clicked menu.
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      <div id="hamburgerIcon" onClick={showNavOptions} className="z-50 relative cursor-pointer">
        {
          isOpen ? <RxCross1 className="h-8 w-7 text-white" /> : <RxHamburgerMenu className="h-8 w-7 text-white" />
        }
      </div>
      <div
        id="nav-dropdown"
        className={`fixed top-20 left-0 h-full w-full bg-black flex flex-col pl-5 space-y-6 transform transition-transform duration-500 ease-in-out  ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Link href="tel:+18555385383" className="text-white text-sm font-bold no-underline">
          1-855-JETLEVEL
        </Link>
        <div onClick={() => handleClick('services')}>
          <span className="flex items-center gap-4 text-white text-sm font-bold no-underline">
            OUR SERVICES
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === 'services' && (
            <NavClickedContent
              subOptions={[
                { name: 'On-Demand Charter', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/On-Demand-Charter.png' },
                { name: 'Group Charter', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Group-Charter.png' },
                { name: 'Air Ambulance', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Air-Ambulance.png' },
                { name: 'Helicopter', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Helicopter.png' },
              ]}
            />
          )}
        </div>

        <div onClick={() => handleClick('jet-charter')}>
          <span className="flex items-center gap-4 text-white text-sm font-bold no-underline">
            JET CHARTER
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === 'jet-charter' && (
            <NavClickedContent
              subOptions={[
                { name: 'US & Canada', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/US-CANADA.png' },
                { name: 'International', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/International.png' },
                { name: 'Popular Routes', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Popular-Routes.png' },
                { name: 'Empty Legs', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Empty-Legs.png' },
              ]}
            />
          )}
        </div>
        <div onClick={() => handleClick('charter-resources')}>
          <span className="flex items-center gap-4 text-white text-sm font-bold no-underline">
            CHARTER RESOURCES
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === 'charter-resources' && (
            <NavClickedContent
              subOptions={[
                { name: 'Private Jet Airports', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Private-jet-Airports.png' },
                { name: 'Aircraft Types', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Aircraft-Types.png' },
                { name: 'Cost Estimator', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Cost-Estimator.png' },
                { name: 'Flight Tracker', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Flight-Tracker.png' },
                { name: 'Distance Calculator', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Distance-Calculator.png' },
              ]}
            />
          )}
        </div>
        <Link href="#" className="text-white text-sm font-bold no-underline">
          PRICING
        </Link>
        <div onClick={() => handleClick('company')}>
          <span className="flex items-center gap-4 text-white text-sm font-bold no-underline">
            COMPANY
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === 'company' && (
            <NavClickedContent
              subOptions={[
                { name: 'About Us', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/About-us.png' },
                { name: 'Contact Us', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Contact-Us.png' },
                { name: 'Blogs', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Blogs.png' },
                { name: 'Charter FAQs', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Charter-FAQs.png' },
                { name: 'Out Team', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Our-Team.png' },
              ]}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default NavbarDropdown;
