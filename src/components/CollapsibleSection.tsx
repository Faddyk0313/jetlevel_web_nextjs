"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiPlus } from "react-icons/fi";
import Markdown from 'markdown-to-jsx';

interface FAQ {
    question: string;
    answer: string;
}

interface CollapsibleSectionProps {
    title: string;
    content: string | string[] | FAQ[];
    isDefaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, content, isDefaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isDefaultOpen);
    }, [isDefaultOpen]);

    const toggleSection = () => setIsOpen((prev) => !prev);

    const isFAQArray = (items: any[]): items is FAQ[] =>
        items.every(item => typeof item === 'object' && 'question' in item && 'answer' in item);

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
                {Array.isArray(content) && isFAQArray(content) ? (
                    <div className="mt-2">
                        {content.map((faq, index) => (
                            <div key={faq.question} className="pb-6">
                                <h3 className="font-bold text-gray-900">{faq.question}</h3>
                                <p className="text-gray-700 leading-7 mt-1">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                ) : Array.isArray(content) ? (
                    <div className="grid grid-cols-1 gap-y-1 md:gap-x-4 md:gap-y-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 details leading-8 text-gray-700">
                        {content.map((text, index) => (
                            <Link
                                key={text + index} // Added index for uniqueness if text is repeated
                                href="#"
                                className="block leading-8 hover:text-blue"
                            >
                                {text}
                            </Link>
                        ))}
                    </div>
                ) : (
                    // Render markdown content safely
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
                            {content as string}
                        </Markdown>
                    </div>

                )}
            </div>
        </section>
    );
};

export default CollapsibleSection;
