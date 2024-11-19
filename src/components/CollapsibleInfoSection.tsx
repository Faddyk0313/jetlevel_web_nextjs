"use client";
import Markdown from 'markdown-to-jsx';
import React, { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(isDefaultOpen);

    const toggleSection = () => setIsOpen((prev) => !prev);
    function addSpanToTitles(content: string): string {
        return content.replace(
            /<p>([^–:]+)[–:]/g,
            (match, title) => `<p><span>${title.trim()}</span> –`
        );
    }


    console.log(addSpanToTitles(sections[0].content as string));
    return (
        <section className="border-b py-5">
            <div
                className="group flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
                aria-expanded={isOpen}
            >
                <h2 className={`transition-colors duration-200 ${isOpen ? 'text-blue' : 'text-gray-600 group-hover:text-blue'}`}>
                    {title}
                </h2>
                <span className={`transition-all duration-200 border-2 rounded-full ${isOpen ? 'rotate-45 text-blue border-blue' : 'text-gray-600 border-gray-600 group-hover:text-blue group-hover:border-blue'}`}>
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? '' : 'max-h-0'}`}>
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
                                    {addSpanToTitles(section.content as string)}
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
