"use client";
import React, { useState} from 'react';
import { FiPlus } from "react-icons/fi";
import AvinodeCalculator from './AvinodeEmptyLegCalculator';

interface CollapsibleSectionProps {
    title: string;
}

const CollapsibleAvinodeCalculatorSection: React.FC<CollapsibleSectionProps> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

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
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5800px] md:max-h-[2800px]' : 'max-h-0'}`}>
                {/* Render the AvinodeCalculator component if content is 'calculator' */}
                <AvinodeCalculator />
            </div>
        </section>
    );
};

export default CollapsibleAvinodeCalculatorSection;