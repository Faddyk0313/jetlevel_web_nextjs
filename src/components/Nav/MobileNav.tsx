"use client";

import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaChevronDown, FaPhone } from "react-icons/fa6";
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
  const closeDropdown = () => setIsOpen(false);

  return (
    <>
      <div id="hamburgerIcon" onClick={showNavOptions} className="z-50 relative cursor-pointer">
        {
          isOpen ? <RxCross1 className="h-8 w-7 text-white" /> : <RxHamburgerMenu className="h-8 w-7 text-white" />
        }
      </div>
      <div
        id="nav-dropdown"
        className={`fixed top-[4rem] left-0 h-full overflow-hidden w-full bg-black flex flex-col pt-5 pl-5 space-y-4 transform transition-transform duration-500 ease-in-out  ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Link href="tel:+18555385383" className="flex items-center gap-3 text-white text-base font-bold">
          <FaPhone className=" animate-ringing" />
          1-855-JETLEVEL
        </Link>
        <div onClick={() => handleClick('services')}>
          <span className="flex items-center gap-4 text-white text-sm font-bold">
            OUR SERVICES
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === 'services' && (
            <NavClickedContent
              subOptions={[
                { name: 'On-Demand Charter', link: '/our-services/on-demand-charter', image: 'https://jetlevel.com/wp-content/uploads/2023/07/On-Demand-Charter.png' },
                { name: 'Group Charter', link: '/our-services/group-charter', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Group-Charter.png' },
                { name: 'Air Ambulance', link: '/our-services/air-ambulance', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Air-Ambulance.png' },
                { name: 'Helicopter', link: '/our-services/helicopter', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Helicopter.png' },
              ]}
              closeDropdown={closeDropdown} // Pass the closeDropdown function here

            />
          )}
        </div>

        <div onClick={() => handleClick('jet-charter')}>
          <span className="flex items-center gap-4 text-white text-sm font-bold ">
            JET CHARTER
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === 'jet-charter' && (
            <NavClickedContent
              subOptions={[
                { name: 'US & Canada', link: '/us-canada-chartered-cities', image: 'https://jetlevel.com/wp-content/uploads/2023/07/US-CANADA.png' },
                { name: 'International', link: '/international-chartered-cities', image: 'https://jetlevel.com/wp-content/uploads/2023/07/International.png' },
                { name: 'Popular Routes', link: '/popular-routes', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Popular-Routes.png' },
                { name: 'Empty Legs', link: '/empty-leg-flights', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Empty-Legs.png' },
              ]}
              closeDropdown={closeDropdown} // Pass the closeDropdown function here

            />
          )}
        </div>
        <div onClick={() => handleClick('charter-resources')}>
          <span className="flex items-center gap-4 text-white text-sm font-bold ">
            CHARTER RESOURCES
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === 'charter-resources' && (
            <NavClickedContent
              subOptions={[
                { name: 'Private Jet Airports', link: '/charter-resources/private-jet-charter', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Private-jet-Airports.png' },
                { name: 'Aircraft Types', link: '/charter-resources/aircraft-types', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Aircraft-Types.png' },
                { name: 'Cost Estimator', link: '/charter-resources/cost-estimator', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Cost-Estimator.png' },
                { name: 'Flight Tracker', link: '/charter-resources/flight-tracker', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Flight-Tracker.png' },
                { name: 'Distance Calculator', link: '/charter-resources/distance-calculator', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Distance-Calculator.png' },
              ]}
              closeDropdown={closeDropdown} // Pass the closeDropdown function here

            />
          )}
        </div>
        <Link href="#" className="text-white text-sm font-bold ">
          PRICING
        </Link>
        <div onClick={() => handleClick('company')}>
          <span className="flex items-center gap-4 text-white text-sm font-bold ">
            COMPANY
            <FaChevronDown className="border w-9 h-4 rounded-lg" />
          </span>
          {activeDropdown === 'company' && (
            <NavClickedContent
              subOptions={[
                { name: 'About Us', link: '/company/about-us', image: 'https://jetlevel.com/wp-content/uploads/2023/07/About-us.png' },
                { name: 'Contact Us', link: '/company/contact-us', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Contact-Us.png' },
                { name: 'Blogs', link: '/company/blogs', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Blogs.png' },
                { name: 'Charter FAQs', link: '/company/charter-faqs', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Charter-FAQs.png' },
                { name: 'Out Team', link: '/company/our-team', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Our-Team.png' },
              ]}
              closeDropdown={closeDropdown} // Pass the closeDropdown function here

            />
          )}
        </div>
      </div>
    </>
  );
}

export default NavbarDropdown;
