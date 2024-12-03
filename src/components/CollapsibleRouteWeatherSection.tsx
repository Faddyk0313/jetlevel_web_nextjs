"use client";
import React, { useState, useEffect } from 'react';
import { FiPlus } from "react-icons/fi";
import WeatherWidget from './WeatherWidget';


interface Item {
    heading: string;
    airports?: string;
    widgetHtml: string;
}

interface CollapsibleRouteWeatherSectionProps {
    title: string;
    items: Item[];
    isDefaultOpen?: boolean;
}

const CollapsibleRouteWeatherSection: React.FC<CollapsibleRouteWeatherSectionProps> = ({ title, items, isDefaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isDefaultOpen);
    }, [isDefaultOpen]);

    const toggleSection = () => setIsOpen((prev) => !prev);
    const [activeTab, setActiveTab] = useState(0); // State to track active tab
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
                <span className={`transition-all duration-200 border-2 rounded-full ${isOpen ? 'rotate-45 text-blue border-blue' : 'text-darkBlue border-darkBlue group-hover:text-blue group-hover:border-blue'}`}>
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] sm:max-h-[3000px]' : 'max-h-0'}`}>
                <div className="mt-5">
                    {/* Tab Buttons */}
                    <div className="flex justify-center">
                        {items.map((item, index) => (
                            <h3>
                                <button
                                    key={index}
                                    className={`px-4 py-2 font-bold ${activeTab === index
                                        ? "text-blue  border border-[#d5d8dc] border-b-white"
                                        : "text-darkBlue"
                                        }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {item.heading}
                                </button>
                            </h3>
                        ))}
                    </div>

                    {/* Weather Widget Content */}
                    <div className="-mt-[1px] border border-[#d5d8dc] p-4">

                        {items.map((item, index) => (
                            <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
                                <div className='flex items-baseline justify-center gap-2'>
                                    <h4>{item.heading.split(" ")[0]}:</h4>
                                    <p className='max-w-72'>{item.airports}</p>
                                </div>
                                <div
                                    key={index}
                                >
                                    <WeatherWidget widgetHtml={item.widgetHtml} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollapsibleRouteWeatherSection;
