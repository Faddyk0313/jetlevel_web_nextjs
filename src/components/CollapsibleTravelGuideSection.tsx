"use client";
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

// Type definition for the final output
interface OutputArray {
    title: string;
    paragraph: string;
}

interface CollapsibleTravelGuideSectionProps {
    title: string;
    data1: OutputArray[];
    data2: OutputArray[];
    isDefaultOpen?: boolean;
}

const CollapsibleTravelGuideSection: React.FC<CollapsibleTravelGuideSectionProps> = ({ title, data1, data2, isDefaultOpen = false }) => {
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

                    {/* Travel Concierge Services */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{data2[0].title}</h3>
                        <div className='mt-2 details leading-8 text-gray-700'>
                            <Markdown
                                options={{
                                    overrides: {
                                        a: {
                                            props: {
                                                className: 'underline text-blue-400',
                                            },
                                        },
                                    },
                                }}
                            >
                                {data2[0].paragraph as string}
                            </Markdown>
                        </div>
                        <Image width={1100} height={750} src="https://jetlevel.com/wp-content/uploads/2022/10/iStock-664704040-scaled.jpg" alt="Concierge Services" className="w-full mt-4 shadow-lg max-w-[1000px] max-h-[750px]" />
                    </div>

                    {data1.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
                            <div className='mt-2 details leading-8 text-gray-700'>
                                <Markdown
                                    options={{
                                        overrides: {
                                            a: {
                                                props: {
                                                    className: 'underline text-blue-400',
                                                },
                                            },
                                        },
                                    }}
                                >
                                    {section.paragraph as string}
                                </Markdown>
                            </div>
                        </div>
                    ))}

                    {/* Emergency Services */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{data2[1].title}</h3>
                        <div className='mt-2 details leading-8 text-gray-700'>
                            <Markdown
                                options={{
                                    overrides: {
                                        a: {
                                            props: {
                                                className: 'underline text-blue-400',
                                            },
                                        },
                                    },
                                }}
                            >
                                {data2[1].paragraph as string}
                            </Markdown>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CollapsibleTravelGuideSection;


