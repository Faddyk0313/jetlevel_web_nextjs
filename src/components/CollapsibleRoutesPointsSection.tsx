"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiPlus } from "react-icons/fi";
import Markdown from 'markdown-to-jsx';

interface RoutesPoint {
    fields: {
        title: string;
        paragraph: string;
    };
}
interface CollapsibleRoutesPointsSectionProps {
    title: string;
    content: RoutesPoint[];
    isDefaultOpen?: boolean;
}

const CollapsibleRoutesPointsSection: React.FC<CollapsibleRoutesPointsSectionProps> = ({ title, content, isDefaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isDefaultOpen);
    }, [isDefaultOpen]);

    const toggleSection = () => setIsOpen((prev) => !prev);

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
                {content.map((item: any, index) => (
                    <div key={index} className="pb-6">
                        <h3 className="font-bold text-gray-900">{item.fields.title.text}</h3>
                        <Markdown
                            options={{
                                overrides: {
                                    a: {
                                        props: {
                                            className: ' text-blue',
                                        },
                                    },
                                    p: {
                                        props: {
                                            className: 'text-gray-700 leading-7 mt-1'
                                        }
                                    }
                                },
                            }}
                        >
                            {item.fields.paragraph.text as string}
                        </Markdown>
                    </div>
                ))
                }
            </div>
        </section>
    );
};

export default CollapsibleRoutesPointsSection;
