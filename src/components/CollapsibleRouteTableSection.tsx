"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface CollapsibleRouteTableSectionProps {
  title: string;
  items: {text: string}[];
  isDefaultOpen?: boolean;
}

const CollapsibleRouteTableSection: React.FC<
  CollapsibleRouteTableSectionProps
> = ({ title, items, isDefaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const toggleSection = () => setIsOpen((prev) => !prev);

  // Transform data into the desired rows structure
  const Tablerows = items.map((item) => item.text.split("/"));
  let firstTable = {
    headers: [
      "Aircraft Type",
      "One-Way Price Estimate",
      "Max Passengers",
      "Flight Time",
      "Fuel Stops",
    ],
    newRows: Tablerows,
  };

  return (
    <section className="border-b py-5">
      <div
        className="group flex items-center justify-between cursor-pointer"
        onClick={toggleSection}
        aria-expanded={isOpen}
      >
        <h2
          className={`transition-colors duration-200 ${
            isOpen ? "text-blue" : "text-darkBlue group-hover:text-blue"
          }`}
        >
          {title}
        </h2>
        <span
          className={`transition-all duration-200 border-2 rounded-full ${
            isOpen
              ? "rotate-45 text-blue border-blue"
              : "text-darkBlue border-gray-600 group-hover:text-blue group-hover:border-blue"
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
        <div>
          <div className="mt-5">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-blue text-white">
                    {firstTable.headers.map((header, headerIndex) => (
                      <th
                        key={headerIndex}
                        className="px-4 py-2 text-sm text-center font-semibold border border-gray-200"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {firstTable.newRows.map((row: string[], rowIndex: number) => (
                    <tr
                      key={rowIndex}
                      className={
                        rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-4 py-2 text-sm text-center text-gray-700 border border-gray-200"
                        >
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
              (Note: These are rough estimates. Additional fees like landing costs and catering may apply.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleRouteTableSection;
