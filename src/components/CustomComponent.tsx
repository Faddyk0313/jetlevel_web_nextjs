import React from "react";
import Carousel from "./Crousel";
import Card from "./Card";
import { CarouselItem, CustomComponentProps } from "@/app/types";

const CustomComponent: React.FC<CustomComponentProps> = ({ heading, para, background, items, }) => {
  // Create new array with only icon and title to pass in carousel
  const carouselItems: CarouselItem[] = items.map(({ icon, title }) => ({
    icon,
    title,
  }));

  return (
    <section className={`${background === "white" ? "max-w-[1800px] mx-auto p-5 py-10 " : background === 'gray' ? "bg-gray-200" : "relative overflow-hidden bg-aboutUs-background bg-cover bg-fixed p-5 py-[30px] md:py-[50px] lg:py-[80px]"}`}>
      <div className={`${background === "white" ? "" : background === 'gray' ? "max-w-[1800px] mx-auto p-5 py-10" : "max-w-[1800px] mx-auto"}`}>
        {
          background === "white"
            ? "" : 
            background === 'gray' 
            ? "" :
            <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-0"></div>
        }

        <div
          className={`mb-10 ${background === "white" ? "text-left" : background === 'gray' ? "text-left" : "text-center relative z-10 text-white"} `}
        >
          <h2>{heading}</h2>
          <p className={`details mt-4 ${background === "white" ? ""  : background === 'gray' ? "" : "text-gray-100"} `}>{para}</p>
        </div>
        <div
          className={`
          ${background === "white" ? "" : background === 'gray' ? "" : "relative z-10 "} 
          hidden md:grid 
          ${items.length % 2 === 0 ? `grid-cols-${items.length / 2}` : `grid-cols-${items.length}`} 
          lg:grid-cols-${items.length} justify-between gap-2 py-3
        `}
        >
          {items.map((item, index) => (
            <Card key={index} icon={item.icon} title={item.title} description={item.description} bgcolor={background} />
          ))}
        </div>
        <div className={`${background === "white" ? "" : background === 'gray' ? "" : "relative z-10 "}  block md:hidden`}>
          <Carousel items={carouselItems} bgcolor={background} />
        </div>
      </div>
    </section>
  );
};

export default CustomComponent;
