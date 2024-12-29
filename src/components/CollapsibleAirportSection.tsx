"use client";
import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Markdown from "markdown-to-jsx";
import WeatherWidget from "./WeatherWidget";
import Image from "next/image";

interface CollapsibleAirportSectionProps {
  title: string;
  paragraph: string;
  content: string | any;
  staticImageName?: string;
  isDefaultOpen?: boolean;
}

const CollapsibleAirportSection: React.FC<CollapsibleAirportSectionProps> = ({
  title,
  paragraph,
  content,
  staticImageName = "",
  isDefaultOpen = false,
}) => {
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
        <div className="mt-2 details leading-8 text-gray-700">
          <Markdown
            options={{
              overrides: {
                a: {
                  props: {
                    className: " text-blue",
                  },
                },
              },
            }}
          >
            {paragraph as string}
          </Markdown>
        </div>
        {content === undefined ? (
          ""
        ) : Array.isArray(content) ? (
          <div className="mt-2 flex flex-col gap-2 md:gap-5 pb-2">
            {content.map((option, index) => (
              <div key={index} className="flex gap-10 flex-col md:flex-row">
                {staticImageName === "" && option.fields.image?.assets[0]?.asset?.url ? (
                  // Render image from option.fields.image for every option when staticImageName is empty
                  <Image
                    width={250}
                    height={150}
                    src={option.fields.image?.assets[0]?.asset?.url}
                    alt={`${option.fields.heading?.text} Image`}
                    className="w-[250px] h-[150px] md:mt-1"
                  />
                ) : // Render static image for the first option and blank space for others
                index === 0 &&
                  ["runway", "aircraft", "special amenities"].includes(
                    staticImageName
                  ) ? (
                  <Image
                    width={250}
                    height={150}
                    src={`${
                      staticImageName === "runway"
                        ? "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Private-Jet-Charter-Runway-1.jpg"
                        : staticImageName === "aircraft"
                        ? "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/miami-opa-locka-airport-aircraft.jpg"
                        : staticImageName === "special amenities"
                        ? "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/special-amenities.jpg"
                        : ""
                    }`}
                    alt={`${option.fields.heading.text} Image`}
                    className="w-[250px] h-[150px] md:mt-1"
                  />
                ) : (
                  // Blank space for other options
                  <div className="min-w-[250px] min-h-[150px] md:mt-1"></div>
                )}
                <div className="pb-1">
                  <h3 className="font-bold text-gray-900">
                    {option.fields.heading.text}
                  </h3>
                  <div>
                    <Markdown
                      options={{
                        overrides: {
                          p: {
                            props: {
                              className: "text-gray-700 leading-7",
                            },
                          },
                          a: {
                            props: {
                              className: "leading-7 text-blue",
                            },
                          },
                        },
                      }}
                    >
                      {option.fields.paragraph.text as string}
                    </Markdown>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="my-3">
            <WeatherWidget widgetHtml={content} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CollapsibleAirportSection;
