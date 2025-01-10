"use client";
import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import AircraftGoogleMaps from "./AircraftGoogleMaps";
import Markdown from "markdown-to-jsx";

interface CollapsibleAircraftOverviewSectionProps {
  title: string;
  content: string | number;
  isDefaultOpen?: boolean;
}

const CollapsibleAircraftOverviewSection: React.FC<
  CollapsibleAircraftOverviewSectionProps
> = ({ title, content, isDefaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isDefaultOpen);
  }, [isDefaultOpen]);

  const toggleSection = () => setIsOpen((prev) => !prev);

  // console.log("content", typeof content)
  return (
    <section className="border-b py-5">
      <div
        className="group flex items-center justify-between cursor-pointer"
        onClick={toggleSection}
        aria-expanded={isOpen}
      >
        <h2
          className={`transition-colors duration-200 ${isOpen ? "text-blue" : "text-darkBlue group-hover:text-blue"
            }`}
        >
          {title}
        </h2>
        <span
          className={`transition-all duration-200 border-2 rounded-full ${isOpen
              ? "rotate-45 text-blue border-blue"
              : "text-darkBlue border-darkBlue group-hover:text-blue group-hover:border-blue"
            }`}
        >
          <FiPlus className="w-7 h-7" />
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[3000px] sm:max-h-[3000px]" : "max-h-0"
          }`}
      >
        {typeof content != "number" ? (
          <div className="flex flex-col gap-2">
            <Markdown
              options={{
                overrides: {
                  h2: {
                    props: {
                      className: "pb-2",
                    },
                  },
                  p: {
                    props: {
                      className: "leading-7",
                    },
                  },
                  li: {
                    props: {
                      className: "py-1",
                    },
                  },
                  blockquote: {
                    props: {
                      className: "not-italic",
                    },
                  },
                  a: {
                    props: {
                      className: " text-blue",
                    },
                  },
                },
              }}
            >
              {content as string}
            </Markdown>
          </div>
        ) : (
          <div className="mt-5">
            <div className="mt-3">
              <AircraftGoogleMaps rangeDistance={content} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CollapsibleAircraftOverviewSection;
