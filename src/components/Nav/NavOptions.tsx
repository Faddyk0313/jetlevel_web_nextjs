"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import NavClickedContent from './NavClickedContent'; // Import your dropdown component
import Link from 'next/link';

function NavOptions() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navOptionsRef = useRef<HTMLDivElement>(null); // Ref for the entire dropdown and trigger container

    const handleClick = (menu: string) => {
        // Toggle the dropdown menu
        setActiveDropdown((prev) => (prev === menu ? null : menu));
    };

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
        <div id="nav-options" className="flex items-center font-bold" ref={navOptionsRef}>
            {/* OUR SERVICES Dropdown */}
            <div onClick={() => { handleClick('services'); }}>
                <span className="flex items-center cursor-pointer gap-1 mx-2 text-white text-xs text-nowrap min-[1200px]:text-sm">
                    OUR SERVICES <FaChevronDown />
                </span>
                {activeDropdown === 'services' && (
                    <div onClick={(e) => e.stopPropagation()}> {/* Prevent the click inside the dropdown from closing it */}
                        <NavClickedContent
                            subOptions={[
                                { name: 'On-Demand Charter', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/On-Demand-Charter.png' },
                                { name: 'Group Charter', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Group-Charter.png' },
                                { name: 'Air Ambulance', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Air-Ambulance.png' },
                                { name: 'Helicopter', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Helicopter.png' },
                            ]}
                        />
                    </div>
                )}
            </div>

            {/* Repeat for other dropdowns */}
            {/* JET CHARTER Dropdown */}
            <div onClick={() => { handleClick('jet-charter'); }}>
                <span className="flex items-center cursor-pointer gap-1 mx-2 text-white text-xs text-nowrap min-[1200px]:text-sm">
                    JET CHARTER <FaChevronDown />
                </span>
                {activeDropdown === 'jet-charter' && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <NavClickedContent
                            subOptions={[
                                { name: 'US & Canada', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/US-CANADA.png' },
                                { name: 'International', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/International.png' },
                                { name: 'Popular Routes', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Popular-Routes.png' },
                                { name: 'Empty Legs', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Empty-Legs.png' },
                            ]}
                        />
                    </div>
                )}
            </div>

            <div onClick={() => { handleClick('charter-resources')}}>
                <span className="flex items-center cursor-pointer gap-1 mx-2 text-white text-xs text-nowrap min-[1200px]:text-sm">
                    CHARTER RESOURCES <FaChevronDown />
                </span>
                {activeDropdown === 'charter-resources' && (
                    <div onClick={(e) => e.stopPropagation()}>
                    <NavClickedContent
                        subOptions={[
                            { name: 'Private Jet Airports', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Private-jet-Airports.png' },
                            { name: 'Aircraft Types', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Aircraft-Types.png' },
                            { name: 'Cost Estimator', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Cost-Estimator.png' },
                            { name: 'Flight Tracker', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Flight-Tracker.png' },
                            { name: 'Distance Calculator', link: '#', image: 'https://jetlevel.com/wp-content/uploads/2023/07/Distance-Calculator.png' },
                        ]}
                    />
                    </div>
                )}
            </div>

            <Link href="#" className="flex items-center gap-1 lg:mx-2 min-[1200px]:mx-2 text-white text-xs text-nowrap min-[1200px]:text-sm">
                PRICING
            </Link>

            <div onClick={() => handleClick('company')}>
                <span className="flex items-center cursor-pointer gap-1 mx-2 text-white text-xs text-nowrap min-[1200px]:text-sm">
                    COMPANY <FaChevronDown />
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
    );
}

export default NavOptions;
