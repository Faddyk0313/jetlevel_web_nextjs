"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

interface FAQ {
    question: string;
    answer: string;
}

interface CollapsibleSectionProps {
    title: string;
    content: string | string[] | FAQ[];
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => setIsOpen((prev) => !prev);

    // Type guard to check if content is an array of FAQs
    const isFAQArray = (items: any[]): items is FAQ[] =>
        items.every(item => typeof item === 'object' && 'question' in item && 'answer' in item);

    return (
        <section className="border-b py-5">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
                aria-expanded={isOpen}
            >
                <h2 className={`${isOpen ? 'text-black border-black' : 'text-gray-800 border-gray-800'}`}>
                    {title}
                </h2>
                <span className={`transition-transform duration-500 ease-in-out border rounded-full ${isOpen ? 'rotate-45 text-black border-black' : 'text-gray-800 border-gray-800'}`}>
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2100px] sm:max-h-[1200px]' : 'max-h-0'}`}>
                {/* Conditional rendering based on content type */}
                {Array.isArray(content) && isFAQArray(content) ? (
                    // Render FAQs if content is an array of FAQ objects
                    <div className="mt-2">
                        {content.map((faq, index) => (
                            <div key={index} className="pb-6">
                                <h3 className="font-bold text-gray-900">{faq.question}</h3>
                                <p className="text-gray-700 leading-7 mt-1">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                ) : Array.isArray(content) ? (
                    // Render as links if content is an array of strings
                    <div className="grid grid-cols-1 gap-y-1 md:gap-x-4 md:gap-y-1 sm:grid-cols-2 lg:grid-cols-3 mt-2">
                        {content.map((text, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="block leading-8 text-blue-500 underline"
                            >
                                {text}
                            </Link>
                        ))}
                    </div>
                ) : (
                    // Render as a single paragraph if content is a string
                    <p className="mt-2 details leading-8 text-gray-700">
                        {content}
                    </p>
                )}
            </div>
        </section>
    );
};

export default CollapsibleSection;
