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
    <section className={`flex flex-col justify-center ${background === "white" ? "max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20" : "overflow-hidden bg-aboutUs-background overlay bg-cover bg-fixed"}`}>
      <div className={`${background === "white" ? "" : "lg:max-w-[1800px] lg:mx-auto px-5 md:px-10 lg:px-20"}`}>
        <div
          className={`mb-10 ${background === "white" ? "text-left" : "text-center text-white"} `}
        >
          <h2 className={`${background === "white" ? "" : "text-white"}`}>{heading}</h2>
          <p className={`details leading-relaxed mt-4 ${background === "white" ? "" : "text-gray-100"} `}>{para}</p>
        </div>
        <div
          className="hidden md:grid justify-between gap-1 lg:gap-2 py-3"
          style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        >
          {items.map((item, index) => (
            <Card key={index} icon={item.icon} title={item.title} description={item.description} bgcolor={background} />
          ))}
        </div>
        <div className="block md:hidden">
          <Carousel items={carouselItems} bgcolor={background} />
        </div>
      </div>
    </section>
  );
};

export default CustomComponent;
