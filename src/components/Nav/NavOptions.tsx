"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import NavClickedContent from './NavClickedContent'; // Import your dropdown component
import Link from 'next/link';

function NavOptions() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navOptionsRef = useRef<HTMLDivElement>(null);

    const handleClick = (menu: string) => {
        setActiveDropdown((prev) => (prev === menu ? null : menu));
    };

    // Close dropdown function
    const closeDropdown = () => setActiveDropdown(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // If there is an active dropdown and the click happened outside the dropdown container, close it
            if (navOptionsRef.current && !navOptionsRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside); // Clean up the event listener
        };
    }, [activeDropdown]);

    return (
        <div id="nav-options" className="flex items-center xl:gap-3 font-playfair text-sm tracking-wider" ref={navOptionsRef}>
            {/* OUR SERVICES Dropdown */}
            <div onClick={() => { handleClick('services'); }}>
                <span className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap  hover:text-blue transition-all duration-100">
                    OUR SERVICES <FaChevronDown />
                </span>
                {activeDropdown === 'services' && (
                    <div onClick={(e) => e.stopPropagation()}> {/* Prevent the click inside the dropdown from closing it */}
                        <NavClickedContent
                            subOptions={[
                                { name: 'On-Demand Charter', link: '/our-services/on-demand-charter', image: '/navInsideIcons/On-Demand Charter.svg' },
                                { name: 'Group Charter', link: '/our-services/group-charter', image: '/navInsideIcons/Group Charter.svg' },
                                { name: 'Air Ambulance', link: '/our-services/air-ambulance', image: '/navInsideIcons/Air Ambulance.svg' },
                                { name: 'Helicopter', link: '/our-services/helicopter', image: '/navInsideIcons/Helicopter.svg' },
                            ]}
                            closeDropdown={closeDropdown} // Pass the closeDropdown function here
                        />
                    </div>
                )}
            </div>

            {/* Repeat for other dropdowns */} 
            {/* JET CHARTER Dropdown */}
            <div onClick={() => { handleClick('jet-charter'); }}>
                <span className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap  hover:text-blue transition-all duration-100">
                    JET CHARTER <FaChevronDown />
                </span>
                {activeDropdown === 'jet-charter' && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <NavClickedContent
                            subOptions={[
                                { name: 'US & Canada', link: '/us-canada-chartered-cities', image: '/navInsideIcons/US & CANADA.svg' },
                                { name: 'International', link: '/international-chartered-cities', image: '/navInsideIcons/International.svg' },
                                { name: 'Popular Routes', link: '/popular-routes', image: '/navInsideIcons/Popular Routes.svg' },
                                { name: 'Empty Legs', link: '/empty-leg-flights', image: '/navInsideIcons/Empty Legs.svg' },
                            ]}
                            closeDropdown={closeDropdown} // Pass the closeDropdown function here
                        />
                    </div>
                )}
            </div>

            <div onClick={() => { handleClick('charter-resources'); }}>
                <span className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap  hover:text-blue transition-all duration-100">
                    CHARTER RESOURCES <FaChevronDown />
                </span>
                {activeDropdown === 'charter-resources' && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <NavClickedContent
                            subOptions={[
                                { name: 'Private Jet Airports', link: '/charter-resources/private-jet-charter', image: '/navInsideIcons/Private Jet Airports.svg' },
                                { name: 'Aircraft Types', link: '/charter-resources/aircraft-types', image: '/navInsideIcons/Aircraft Types.svg' },
                                { name: 'Cost Estimator', link: '/charter-resources/cost-estimator', image: '/navInsideIcons/Cost Estimator.svg' },
                                { name: 'Flight Tracker', link: '/charter-resources/flight-tracker', image: '/navInsideIcons/Flight Tracker.svg' },
                                { name: 'Distance Calculator', link: '/charter-resources/distance-calculator', image: '/navInsideIcons/Distance Calculator.svg' },
                            ]}
                            closeDropdown={closeDropdown} // Pass the closeDropdown function here
                        />
                    </div>
                )}
            </div>

            <Link href="/pricing" className="flex items-center text-white text-nowrap  hover:text-blue transition-all duration-100">
                PRICING
            </Link>

            <div onClick={() => handleClick('company')}>
                <span className="flex items-center cursor-pointer gap-2 mx-2 text-white text-nowrap  hover:text-blue transition-all duration-100">
                    COMPANY <FaChevronDown />
                </span>
                {activeDropdown === 'company' && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <NavClickedContent
                            subOptions={[
                                { name: 'About Us', link: '/company/about-us', image: '/navInsideIcons/About Us.svg' },
                                { name: 'Contact Us', link: '/company/contact-us', image: '/navInsideIcons/Contact Us.svg' },
                                { name: 'Blogs', link: '/company/blogs', image: '/navInsideIcons/On-Demand Charter.svg' },
                                { name: 'Charter FAQs', link: '/company/charter-faqs', image: '/navInsideIcons/Charter FAQs.svg' },
                                { name: 'Our Team', link: '/company/our-team', image: '/navInsideIcons/Our Team.svg' },
                            ]}
                            closeDropdown={closeDropdown} // Pass the closeDropdown function here
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavOptions;
