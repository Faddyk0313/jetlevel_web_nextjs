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
                                { name: 'On-Demand Charter', link: '/private-jet-charter', image: '/navInsideIcons/On-Demand Charter.svg' },
                                { name: 'Group Charter', link: '/group-charter-flight', image: '/navInsideIcons/Group Charter.svg' },
                                { name: 'Industry Specific', link: '/industry-specific-charter', image: '/navInsideIcons/industry_specific_charter.svg' },
                                { name: 'Air Ambulance', link: '/medical-flight-transport', image: '/navInsideIcons/Air Ambulance.svg' },
                                { name: 'Helicopter', link: '/Helicopter-Charter-Flight', image: '/navInsideIcons/Helicopter.svg' },
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
                                { name: 'Private Jet Airports', link: '/usa-airport-directory', image: '/navInsideIcons/Private jet Airports.svg' },
                                { name: 'Aircraft Types', link: '/aircraft-charters/', image: '/navInsideIcons/Aircraft Types.svg' },
                                { name: 'Cost Estimator', link: '/charter-flights-cost-calculator', image: '/navInsideIcons/Cost Estimator.svg' },
                                { name: 'Flight Tracker', link: '/flight-tracker', image: '/navInsideIcons/Flight Tracker.svg' },
                                { name: 'Distance Calculator', link: '/distance-calculator', image: '/navInsideIcons/Distance Calculator.svg' },
                            ]}
                            closeDropdown={closeDropdown} // Pass the closeDropdown function here
                        />
                    </div>
                )}
            </div>

            <Link href="/cost-of-chartering-a-private-jet" className="flex items-center text-white text-nowrap  hover:text-blue transition-all duration-100 text-[16px]">
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
                                { name: 'About Us', link: '/about-jet-level', image: '/navInsideIcons/About us.svg' },
                                { name: 'Contact Us', link: '/contact-us', image: '/navInsideIcons/Contact Us.svg' },
                                { name: 'Blogs', link: '/blog', image: '/navInsideIcons/On-Demand Charter.svg' },
                                { name: 'Charter FAQs', link: '/private-jet-frequently-asked-questions', image: '/navInsideIcons/Charter FAQs.svg' },
                                { name: 'Our Team', link: '/our-team', image: '/navInsideIcons/Our Team.svg' },
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
