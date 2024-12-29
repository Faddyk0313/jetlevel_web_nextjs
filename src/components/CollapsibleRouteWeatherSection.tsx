"use client";
import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import RouteGoogleMaps from "./RouteGoogleMaps";
import WeatherWidget from "./WeatherWidget";

interface AirportMarkerInfo {
    fields: {
        name: { text: string; };
        latitude: { number: number; };
        longitude: { number: number; };
    };
}

interface Item {
    fields: {
        title?: { text: string; };
        heading?: { text: string; };
        google_maps_content?: {
            blocks: AirportMarkerInfo[];
        };
        weather_widget?: { text: string; };
    };
}

interface CollapsibleRouteWeatherSectionProps {
    title: string;
    items: Item[];
    isDefaultOpen?: boolean;
}

const CollapsibleRouteWeatherSection: React.FC<
    CollapsibleRouteWeatherSectionProps
> = ({ title, items, isDefaultOpen = false }) => {
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
                <h2
                    className={`transition-colors duration-200 ${isOpen ? "text-blue" : "text-darkBlue group-hover:text-blue"
                        }`}
                >
                    {title}
                </h2>
                <span
                    className={`transition-all duration-200 border-2 rounded-full ${isOpen
                        ? "rotate-45 text-blue border-blue"
                        : "text-darkBlue border-darkBlue group-hover:text-blue group-hover:border-blue"
                        }`}
                >
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[3000px] sm:max-h-[3000px]" : "max-h-0"
                    }`}
            >
                <div className="mt-5">
                    {/* Tab Buttons */}
                    <div className="flex justify-center">
                        {items.map((item, index) => (
                            <h3 key={index} className="mb-0">
                                <button
                                    className={`px-4 py-2 font-bold ${activeTab === index
                                        ? "text-blue  border border-[#d5d8dc] border-b-white"
                                        : "text-darkBlue"
                                        }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {item.fields.title ? item.fields.title.text : item.fields.heading ? item.fields.heading.text : ""} Airports
                                </button>
                            </h3>
                        ))}
                    </div>

                    {/* Weather Widget Content */}
                    <div className="-mt-[1px] border border-[#d5d8dc] p-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`${activeTab === index ? "block" : "hidden"}`}
                            >
                                {item.fields.google_maps_content?.blocks ? (
                                    <>
                                        <div className="flex items-baseline justify-center gap-2">
                                            <h4 className="min-w-[50%] text-end">{item.fields.title ? item.fields.title.text : item.fields.heading ? item.fields.heading.text : ""}:&nbsp;</h4>
                                            <div className="min-w-[50%]">
                                                {item.fields.google_maps_content?.blocks.map((airport, index) => (
                                                    <p key={index} >{airport.fields.name.text}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div key={index} className="mt-3">
                                            <RouteGoogleMaps airports={item.fields.google_maps_content?.blocks} />
                                        </div>
                                    </>
                                ) : item.fields.weather_widget?.text != '' ? (
                                    <WeatherWidget widgetHtml={item.fields.weather_widget?.text} />
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollapsibleRouteWeatherSection;
