"use client";
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

interface TravelGuideSection {
    title: string;
    key: string;
    items: { name: string; description: string; link: string; }[];
}

interface TravelGuideData {
    conciergeServices: {
        description: string;
        imageUrl: string;
    };
    sections: TravelGuideSection[];
    emergencyContacts: { name: string; phone: string; }[];
}

interface CollapsibleTravelGuideSectionProps {
    title: string;
    data: TravelGuideData;
    isDefaultOpen?: boolean;
}

const CollapsibleTravelGuideSection: React.FC<CollapsibleTravelGuideSectionProps> = ({ title, data, isDefaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);

    const toggleSection = () => setIsOpen((prev) => !prev);

    return (
        <section className="border-b py-5">
            <div
                className="group flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
                aria-expanded={isOpen}
            >
                <h2 className={`transition-colors duration-200 ${isOpen ? 'text-[#0071ba]' : 'text-gray-600 group-hover:text-[#0071ba]'}`}>
                    {title}
                </h2>
                <span className={`transition-all duration-200 border-2 rounded-full ${isOpen ? 'rotate-45 text-[#0071ba] border-[#0071ba]' : 'text-gray-600 border-gray-600 group-hover:text-[#0071ba] group-hover:border-[#0071ba]'}`}>
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px]' : 'max-h-0'}`}>
                <div className="mt-5 space-y-8">


                    {/* Weather Section */}
                    {/* <div>
                            
                        </div> */}

                    {/* Travel Concierge Services */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Travel Concierge Services</h3>
                        <p className="text-gray-700 mt-2">{data.conciergeServices.description}</p>
                        <img src={data.conciergeServices.imageUrl} alt="Concierge Services" className="w-full mt-4 shadow-lg max-w-[1000px] max-h-[750px]" />
                    </div>

                    {/* Dynamically render sections */}
                    {data.sections.map((section, sectionIndex) => (
                        <div key={section.key || sectionIndex}>
                            <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
                            {section.items.map((item, itemIndex) => (
                                <p key={itemIndex} className="text-gray-700 mt-2">
                                    <a href={item.link} className="text-[#0071ba] underline">{item.name}</a>: {item.description}
                                </p>
                            ))}
                        </div>
                    ))}

                    {/* Emergency Services */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Emergency Services and Contacts in Addison, TX</h3>
                        <p className="text-gray-700 mt-2">In case of emergencies, here are some important contacts:</p>
                        <p className="text-gray-700 mt-1">Police Department: <a href="tel:972-450-7100" className="text-[#0071ba]">972-450-7100</a></p>
                        <p className="text-gray-700 mt-1">Fire Department: <a href="tel:972-450-7201" className="text-[#0071ba]">972-450-7201</a></p>
                        <p className="text-gray-700 mt-1">Medical Center: <a href="tel:972-888-7200" className="text-[#0071ba]">972-888-7200</a></p>
                        <p className="text-gray-700 mt-2">Call <a href="tel:911" className="text-[#0071ba] font-semibold">911</a> for immediate assistance in any emergency situation.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CollapsibleTravelGuideSection;


