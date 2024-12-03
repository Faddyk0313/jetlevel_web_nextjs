"use client";
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { FaUserFriends, FaPlane } from "react-icons/fa";
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

interface Aircraft {
    type: string;
    imageUrl: string;
    capacity: string;
    model: string;
    priceRange: string;
}

interface CollapsibleAircraftSectionProps {
    title: string;
    description: string;
    aircrafts: Aircraft[];
    isDefaultOpen?: boolean;
}

const CollapsibleAircraftSection: React.FC<CollapsibleAircraftSectionProps> = ({ title, description, aircrafts, isDefaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);

    const toggleSection = () => setIsOpen((prev) => !prev);

    return (
        <section className="border-b py-5">
            <div
                className="group flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
                aria-expanded={isOpen}
            >
                <h2 className={`transition-colors duration-200 ${isOpen ? 'text-blue' : 'text-darkBlue group-hover:text-blue'}`}>
                    {title}
                </h2>
                <span className={`transition-all duration-200 border-2 rounded-full ${isOpen ? 'rotate-45 text-blue border-blue' : 'text-darkBlue border-gray-600 group-hover:text-blue group-hover:border-blue'}`}>
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] sm:max-h-[3000px]' : 'max-h-0'}`}>
                <div className='my-2 details leading-8 text-gray-700'>
                    <Markdown
                        options={{
                            overrides: {
                                a: {
                                    props: {
                                        className: ' text-blue',
                                    },
                                },
                            },
                        }}
                    >
                        {description as string}
                    </Markdown>
                </div>

                {/* Aircraft Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aircrafts.map((aircraft, index) => (
                        <div key={index} className="bg-blue-background bg-cover shadow-md rounded-lg overflow-hidden">
                            <img src={aircraft.imageUrl} alt={aircraft.model} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white">{aircraft.type}</h3>
                                <div className="flex items-center text-gray-300 mt-2">
                                    <FaUserFriends className="mr-2" /> <p>{aircraft.capacity}</p>
                                </div>
                                <div className="flex items-center text-gray-300 mt-2">
                                    <FaPlane className="mr-2" /> <p>{aircraft.model}</p>
                                </div>
                                <p className="text-gray-300 font-semibold mt-3">{aircraft.priceRange}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer Message */}
                <p className="text-gray-500 text-center text-xs italic mt-3">
                    For more information on these and other charter aircraft, visit our <Link href="#" className="text-blue">Private Jet Charter Aircraft Page</Link>.
                </p>
            </div>
        </section>
    );
};

export default CollapsibleAircraftSection;
