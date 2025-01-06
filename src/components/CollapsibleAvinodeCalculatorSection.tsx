"use client";
import React, { Suspense, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import AvinodeCalculator from "./AvinodeEmptyLegCalculator";
import AircraftComparison from "@/components/AircraftComparison";
interface CollapsibleSectionProps {
    title: string;
    calculatorName?: string;
    isDefaultOpen?: boolean;
}

const CollapsibleAvinodeCalculatorSection: React.FC<
    CollapsibleSectionProps
> = ({ title, calculatorName = "", isDefaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => setIsOpen((prev) => !prev);
    useEffect(() => {
        setIsOpen(isDefaultOpen);
    }, [isDefaultOpen]);

    return (
        <section className="border-b py-5">
            <div
                className="group flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
                aria-expanded={isOpen}
            >
                <h2
                    className={`transition-colors duration-200 ${isOpen
                            ? "text-blue"
                            : "text-darkBlue group-hover:text-blue"
                        }`}
                >
                    {title}
                </h2>
                <span
                    className={`transition-all duration-200 border-2 rounded-full ${isOpen
                            ? "rotate-45 text-blue border-blue"
                            : "text-darkBlue border-gray-600 group-hover:text-blue group-hover:border-blue"
                        }`}
                >
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[5800px] md:max-h-[2800px]" : "max-h-0"
                    }`}
            >
                {/* Render the AvinodeCalculator component if content is 'calculator' */}
                {calculatorName === "" ? (
                    <AvinodeCalculator />
                ) : calculatorName == "CompareCalculator" ? (
                    <Suspense fallback={<div className="search-form__loader"></div>}>
                        <AircraftComparison />
                    </Suspense>
                ) : (
                    ""
                )}
            </div>
        </section>
    );
};

export default CollapsibleAvinodeCalculatorSection;
