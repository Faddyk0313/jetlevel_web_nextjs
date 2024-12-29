"use client";
import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { FiPlus } from "react-icons/fi";

// interface SectionItem {
//     title: string;
//     description: string;
// }

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
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isDefaultOpen);
    }, [isDefaultOpen]);

    const toggleSection = () => setIsOpen((prev) => !prev);


    // function addSpanToTitles(content: string): string {
    //     return content.replace(
    //         /<p>([^–:]+)[–:]/g,
    //         (match, title) => `<p><span>${title.trim()}</span> –`
    //     );
    // }
    return (
        <section className="border-b py-5">
            <div
                className="group flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
                aria-expanded={isOpen}
            >
                <h2 className={`transition-all duration-200 ${isOpen ? 'text-blue' : 'text-darkBlue group-hover:text-blue'}`}>
                    {title}
                </h2>
                <span className={`transition-all duration-200 border-2 rounded-full ${isOpen ? 'rotate-45 text-blue border-blue' : 'text-darkBlue border-darkBlue group-hover:text-blue group-hover:border-blue'}`}>
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] sm:max-h-[3000px]' : 'max-h-0'}`}>
                {/* Render Intro Text */}
                {intro && (
                    <div className='mt-2 details leading-8 text-gray-700'>
                        <Markdown
                            options={{
                                overrides: {
                                    a: {
                                        props: {
                                            className: 'text-blue',
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
                                    {section.content as string}
                                </Markdown>

                                <div>
                                    <strong>Don’t see your itinerary above?</strong>

                                    <p><a href="/request-a-quote/" className='text-blue'>Click here</a> to request a quote using your exact destinations or call us to discuss your routing – <a href="tel:8555385383" className='text-blue'>1-855-JetLevel</a></p>

                                    {
                                        index === 0 ? <p>For more information on these and other airports, visit our <a href="/usa-airport-directory/" className='text-blue'>Airport Directory</a>.</p> : ""
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </section>
    );
};

export default CollapsibleInfoSection;
