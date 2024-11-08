"use client";
import Markdown from 'markdown-to-jsx';
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

interface SectionItem {
    title: string;
    description: string;
}

interface Section {
    heading: string;
    content?: string;
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
                <h2 className={`transition-colors duration-200 ${isOpen ? 'text-darkBlue' : 'text-gray-600 group-hover:text-darkBlue'}`}>
                    {title}
                </h2>
                <span className={`transition-all duration-200 border-2 rounded-full ${isOpen ? 'rotate-45 text-darkBlue border-darkBlue' : 'text-gray-600 border-gray-600 group-hover:text-darkBlue group-hover:border-darkBlue'}`}>
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2100px] sm:max-h-[1200px]' : 'max-h-0'}`}>
                {/* Render Intro Text */}
                {intro && (
                    <div className='mt-2 details leading-8 text-gray-700'>
                        <Markdown
                            options={{
                                overrides: {
                                    a: {
                                        props: {
                                            className: 'text-darkBlue',
                                        },
                                    },
                                },
                            }}
                        >
                            {intro as string}
                        </Markdown>
                    </div>
                )}

                {/* Render Sections */}
                {sections.map((section, index) => (
                    <div key={index} className="mt-4">
                        <h3 className="text-lg font-bold text-gray-900">{section.heading}</h3>

                        {/* Render Section Content if available */}
                        {section.content && (
                            <div className='mt-2 details leading-8 text-gray-700'>
                                <Markdown
                                    options={{
                                        overrides: {
                                            a: {
                                                props: {
                                                    className: ' text-darkBlue',
                                                },
                                            },
                                        },
                                    }}
                                >
                                    {section.content as string}
                                </Markdown>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </section>
    );
};

export default CollapsibleInfoSection;
