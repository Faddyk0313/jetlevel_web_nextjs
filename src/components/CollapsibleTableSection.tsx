"use client";
import Markdown from 'markdown-to-jsx';
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

interface TableData {
    rows2: any;
}

interface Item {
    heading: string;
    content: string;
    tableData: TableData;
}

interface CollapsibleTableSectionProps {
    title: string;
    item: Item;
    isDefaultOpen?: boolean;
}

const CollapsibleTableSection: React.FC<CollapsibleTableSectionProps> = ({ title, item, isDefaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);

    const toggleSection = () => setIsOpen((prev) => !prev);

    // Transform data into the desired rows structure
    const Tablerows = item.tableData.rows2.map((item: { text: string }) => item.text.split('/'));
    let firstTable = {
        headers: ["To/From Location", "Aircraft Type", "Passengers", "Avg. Flight Time (hrs)", "Targeted Price (One-way)"],
        newRows: Tablerows
    };

    const secondSubHeadng = {
        heading: "Private Jet Prices – Ballpark Hourly Rates",
        content: "Private jet prices can vary widely based on the size of the aircraft, the distance of the flight, and other factors. Here are some ballpark hourly rates:",
        tableData: {
            headers: ["Aircraft Type", "Aircraft", "Passengers", "Ballpark Hourly Rate"],
            rows: [
                ["Turboprop", "Pilatus PC12", "6-8", "$1,800–$2,300"],
                ["Very Light Jet", "Phenom 100", "4-6", "$3,000–$3,500"],
                ["Light Jet", "Hawker 400XP", "6-8", "$4,000–$4,500"],
                ["Midsize Jet", "Learjet 60", "7-9", "$5,000–$5,500"],
                ["Super Midsize Jet", "Citation Sovereign", "8-10", "$6,500–$7,000"],
                ["Heavy Jet", "Gulfstream G-IV", "10-16", "$10,000–$14,000"]
            ]
        }
    };

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
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] sm:max-h-[3000px]' : 'max-h-0'}`}>
                <div>
                    <div className="mt-5">
                        {/* Section Heading */}
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.heading}</h3>

                        {/* Section Content */}
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
                                {item.content as string}
                            </Markdown>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200">
                                <thead>
                                    <tr className="bg-blue text-white">
                                        {firstTable.headers.map((header, headerIndex) => (
                                            <th key={headerIndex} className="px-4 py-2 text-sm text-center font-semibold border border-gray-200">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {firstTable.newRows.map((row: string[], rowIndex: number)=> (
                                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="px-4 py-2 text-sm text-center text-gray-700 border border-gray-200">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Disclaimer Message */}
                        <p className="text-gray-500 text-center text-xs italic mt-3">
                            Please be aware that the prices listed above are only approximate values; the actual cost for each trip can vary based on numerous factors and we cannot guarantee these exact amounts for every individual flight.
                        </p>
                    </div>
                    <div className="mt-5">
                        {/* Section Heading */}
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{secondSubHeadng.heading}</h3>

                        {/* Section Content */}
                        <p className="text-gray-700 mb-4">{secondSubHeadng.content}</p>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200">
                                <thead>
                                    <tr className="bg-blue text-white">
                                        {secondSubHeadng.tableData.headers.map((header, headerIndex) => (
                                            <th key={headerIndex} className="px-4 py-2 text-center text-sm font-semibold border border-gray-200">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {secondSubHeadng.tableData.rows.map((row, rowIndex) => (
                                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="px-4 py-2 text-sm text-center text-gray-700 border border-gray-200">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Disclaimer Message */}
                        <p className="text-gray-500 text-center text-xs italic mt-3">
                            Please be aware that the prices listed above are only approximate values; the actual cost for each trip can vary based on numerous factors and we cannot guarantee these exact amounts for every individual flight.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollapsibleTableSection;
