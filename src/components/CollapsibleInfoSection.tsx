"use client";
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

interface SectionItem {
    title: string;
    description: string;
}

interface Section {
    heading: string;
    content?: string;
    items?: SectionItem[];
    requestItenararyMsg?: boolean;
}

interface CollapsibleInfoSectionProps {
    title: string;
    intro?: string;
    sections: Section[];
    isDefaultOpen?: boolean;
}

const CollapsibleInfoSection: React.FC<CollapsibleInfoSectionProps> = ({ title, intro, sections, isDefaultOpen = false }) => {
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
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2100px] sm:max-h-[1200px]' : 'max-h-0'}`}>
                {/* Render Intro Text */}
                {intro && (
                    <p className="mt-2 text-gray-700 leading-7">
                        {intro}
                    </p>
                )}

                {/* Render Sections */}
                {sections.map((section, index) => (
                    <div key={index} className="mt-4">
                        <h3 className="text-lg font-bold text-gray-900">{section.heading}</h3>

                        {/* Render Section Content if available */}
                        {section.content && (
                            <p className="mt-2 text-gray-700 leading-7">
                                {section.content}
                            </p>
                        )}

                        {/* Render Section Items if available */}
                        {section.items && (
                            <ul className="mt-2 list-disc pl-5">
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="mt-1">
                                        <strong>{item.title} – </strong> {item.description}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.requestItenararyMsg && (
                            <div>
                                <p className="mt-2 text-gray-700 leading-7">
                                    Don’t see your itinerary above?
                                    Click here to request a quote using your exact destinations or call us to discuss your routing – 1-855-JetLevel
                                </p>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </section>
    );
};

export default CollapsibleInfoSection;
