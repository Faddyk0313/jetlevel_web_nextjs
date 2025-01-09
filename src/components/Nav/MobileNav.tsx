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
        className={`fixed top-[4rem] left-0 w-screen h-full box-border wsce bg-black flex flex-col pt-5 px-7 md:px-12 space-y-4 transform transition-transform duration-500 ease-in-out  ${isOpen ? "translate-x-0" : "-translate-x-full"
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
                { name: 'On-Demand Charter', link: '/private-jet-charter', image: '/navInsideIcons/On-Demand Charter.svg' },
                { name: 'Group Charter', link: '/group-charter-flight', image: '/navInsideIcons/Group Charter.svg' },
                { name: 'Industry Specific', link: '/industry-specific-charter', image: '/navInsideIcons/industry_specific_charter.svg' },
                { name: 'Air Ambulance', link: '/medical-flight-transport', image: '/navInsideIcons/Air Ambulance.svg' },
                { name: 'Helicopter', link: '/Helicopter-Charter-Flight', image: '/navInsideIcons/Helicopter.svg' },
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
                { name: 'US & Canada', link: '/us-canada-chartered-cities', image: '/navInsideIcons/US & CANADA.svg' },
                { name: 'International', link: '/international-chartered-cities', image: '/navInsideIcons/International.svg' },
                { name: 'Popular Routes', link: '/popular-routes', image: '/navInsideIcons/Popular Routes.svg' },
                { name: 'Empty Legs', link: '/empty-leg-flights', image: '/navInsideIcons/Empty Legs.svg' },
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
                { name: 'Private Jet Airports', link: '/usa-airport-directory', image: '/navInsideIcons/Private Jet Airports.svg' },
                { name: 'Aircraft Types', link: '/aircraft-charters/', image: '/navInsideIcons/Aircraft Types.svg' },
                { name: 'Cost Estimator', link: '/charter-flights-cost-calculator', image: '/navInsideIcons/Cost Estimator.svg' },
                { name: 'Flight Tracker', link: '/flight-tracker', image: '/navInsideIcons/Flight Tracker.svg' },
                { name: 'Distance Calculator', link: '/distance-calculator', image: '/navInsideIcons/Distance Calculator.svg' },
              ]}
              closeDropdown={closeDropdown} // Pass the closeDropdown function here

            />
          )}
        </div>
        <Link href="/cost-of-chartering-a-private-jet" className="text-white text-sm font-bold ">
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
                { name: 'About Us', link: '/about-jet-level', image: '/navInsideIcons/About Us.svg' },
                { name: 'Contact Us', link: '/contact-us', image: '/navInsideIcons/Contact Us.svg' },
                { name: 'Blogs', link: '/blog', image: '/navInsideIcons/On-Demand Charter.svg' },
                { name: 'Charter FAQs', link: '/private-jet-frequently-asked-questions/', image: '/navInsideIcons/Charter FAQs.svg' },
                { name: 'Our Team', link: '/our-team', image: '/navInsideIcons/Our Team.svg' },
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
