"use client";
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

interface TableData {
    headers: string[];
    rows: string[][];
}

interface Item {
    heading: string;
    content: string;
    tableData: TableData;
}

interface CollapsibleTableSectionProps {
    title: string;
    items: Item[];
    isDefaultOpen?: boolean;
}

const CollapsibleTableSection: React.FC<CollapsibleTableSectionProps> = ({ title, items, isDefaultOpen = false }) => {
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
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2100px] sm:max-h-[1200px]' : 'max-h-0'}`}>
                
                {items.map((item, index) => (
                    <div key={index} className="mt-5">
                        {/* Section Heading */}
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.heading}</h3>
                        
                        {/* Section Content */}
                        <p className="text-gray-700 mb-4">{item.content}</p>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200">
                                <thead>
                                    <tr className="bg-[#0071ba] text-white">
                                        {item.tableData.headers.map((header, headerIndex) => (
                                            <th key={headerIndex} className="px-4 py-2 text-left text-sm font-semibold border border-gray-200">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.tableData.rows.map((row, rowIndex) => (
                                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="px-4 py-2 text-sm text-gray-700 border border-gray-200">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CollapsibleTableSection;
