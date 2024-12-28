"use client";
import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

interface GridItem {
    text: string;
}

interface CollapsibleAircraftGridSectionProps {
    title: string;
    content: GridItem[];
    isDefaultOpen?: boolean;
}

const CollapsibleAircraftGridSection: React.FC<
    CollapsibleAircraftGridSectionProps
> = ({ title, content, isDefaultOpen = false }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isDefaultOpen);
    }, [isDefaultOpen]);

    const toggleSection = () => setIsOpen((prev) => !prev);
    
    const gridHeadings = [
      "Manufacturer",
      "Class",
      "Seating",
      "Enclosed Lavatory",
      "Maximum range",
      "Max payload",
      "Take off distance",
      "Climb rate",
      "Cruise speed",
      "Cruise altitude",
      "Cabin Height",
      "Cabin Width",
      "Cabin Length",
      "Cabin Volume",
      "Baggage Capacity",
  ];
    return (
        <section className="border-b py-5">
            <div
                className="group flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
                aria-expanded={isOpen}
            >
                <h2
                    className={`transition-colors duration-200 ${
                        isOpen
                            ? "text-blue"
                            : "text-darkBlue group-hover:text-blue"
                    }`}
                >
                    {title}
                </h2>
                <span
                    className={`transition-all duration-200 border-2 rounded-full ${
                        isOpen
                            ? "rotate-45 text-blue border-blue"
                            : "text-darkBlue border-darkBlue group-hover:text-blue group-hover:border-blue"
                    }`}
                >
                    <FiPlus className="w-7 h-7" />
                </span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[3000px] sm:max-h-[3000px]" : "max-h-0"
                }`}
            >
                <div className="text-center w-fit my-7 ">
                    <Link href="/request-a-quote" className="text-sm">
                        <button className="text-white py-3 px-6 w-full rounded-full  bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow">
                            BOOK THIS AIRCRAFT
                        </button>
                    </Link>
                </div>

                {/* Grid Section */}
                <div
                    id="aircraftGrid"
                    className="grid sm:grid-cols-[repeat(auto-fit,_minmax(33%,_1fr))]"
                >
                    {content.map((item, index) => (
                        <div key={index} className="p-4 py-2">
                            <div className="text-sm">{gridHeadings[index]}</div>
                            <div className="text-sm text-blue">{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollapsibleAircraftGridSection;
