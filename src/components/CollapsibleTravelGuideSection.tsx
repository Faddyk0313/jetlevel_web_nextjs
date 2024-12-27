"use client";
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import dynamic from "next/dynamic";
import WeatherWidget from './WeatherWidget';

// Type definition for the final output
interface OutputArray {
    title: string;
    paragraph: string;
}
interface WeatherFields {
    title: string;
    paragraph: string;
    widgetHtml: string;
}

interface CollapsibleTravelGuideSectionProps {
    title: string;
    travelGuideFields: OutputArray[];
    travelConceirge_EmergencyContacts: OutputArray[];
    weatherFields: WeatherFields;
    isDefaultOpen?: boolean;
}

const CollapsibleTravelGuideSection: React.FC<CollapsibleTravelGuideSectionProps> = ({ title, travelGuideFields, travelConceirge_EmergencyContacts, weatherFields, isDefaultOpen = false }) => {

    const [isOpen, setIsOpen] = useState(isDefaultOpen);

    const toggleSection = () => setIsOpen((prev) => !prev);

    // Utility function to wrap plain text titles with <span>
    // const addSpanToTitles = (html: string): string => {
    //     // Regular expression to match list items without <a> tags around the title text
    //     return html.replace(
    //         /<p>(?!<a)(.*?)[–:]/g,
    //         '<p><span>$1</span>:'
    //     );
    // };

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
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px]' : 'max-h-0'}`}>
                <div className="mt-5 space-y-8">
                    {/* Weather Section */}
                    <div className='flex flex-col gap-1'>
                        <h3 className="font-semibold text-gray-800">{weatherFields.title}</h3>
                        <div className='details leading-8 text-gray-700'>
                            <div className=''>
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
                                    {weatherFields.paragraph}
                                </Markdown>
                            </div>
                        </div>
                        <WeatherWidget widgetHtml={weatherFields.widgetHtml}/>

                    </div>
                    {/* <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{weatherFields.title}</h3>
                        <div className='mt-2 details leading-8 text-gray-700'>
                            <div className='my-2'>
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
                                    {weatherFields.paragraph}
                                </Markdown>
                            </div>
                            <DynamicWeatherWidget widgetHtml={weatherFields.widgetHtml} />
                        </div>
                    </div> */}

                    {/* Travel Concierge Services */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{travelConceirge_EmergencyContacts[0].title}</h3>
                        <div className='mt-2 details leading-8 text-gray-700'>
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
                                {travelConceirge_EmergencyContacts[0].paragraph as string}
                            </Markdown>
                        </div>
                        <Image width={1100} height={750} src="/images/travel concierge services image.jpg" alt="Concierge Services" className="w-full mt-4 shadow-lg max-w-[1000px] max-h-[750px]" />
                    </div>

                    {travelGuideFields.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
                            <div className='mt-2 details leading-8 text-gray-700'>
                                <Markdown
                                    options={{
                                        overrides: {
                                            a: {
                                                props: {
                                                    className: 'text-blue', // Apply blue color to links
                                                },
                                            },
                                            span: {
                                                props: {
                                                    className: 'text-blue', // Apply blue color to span-wrapped titles
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
                        <h3 className="text-2xl font-semibold text-gray-800">{travelConceirge_EmergencyContacts[1].title}</h3>
                        <div className='mt-2 details leading-8 text-gray-700'>
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
                                {travelConceirge_EmergencyContacts[1].paragraph as string}
                            </Markdown>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CollapsibleTravelGuideSection;


