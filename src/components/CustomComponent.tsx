import React from "react";
import CarouselContainer from "./CarouselContainer";
import Card from "./Card";

// Define types for props
interface CarouselItem2 {
  icon: React.ReactNode;
  title: string;
  link: string
}

interface CustomComponentProps {
  heading: string;
  para: string;
  background: string;
  items: Array<{
    icon: any;
    title: string;
    description: string;
    link:string;
  }>;
  hasPadding?: boolean;
  hasInlinePadding?: boolean;
}

const CustomComponent: React.FC<CustomComponentProps> = ({
  heading,
  para,
  background,
  items,
  hasPadding,
  hasInlinePadding = true
}) => {
  // Create a simplified array for the carousel
  const carouselItems: CarouselItem2[] = items.map(({ icon, title, link }) => ({
    icon,
    title,
    link,
  }));

  return (
    <section className={`flex flex-col justify-center ${background === "white" ? `max-w-[1800px] mx-auto ${hasInlinePadding ? "px-5 md:px-10 lg:px-20" : ""} ` : "overflow-hidden bg-[20%] md:bg-left bg-aboutUs-background overlay bg-cover bg-fixed"}  ${hasPadding === false ? '!py-10' : ''}`}>
      <div className={`${background === "white" ? "" : "lg:max-w-[1800px] lg:mx-auto px-5 md:px-10 lg:px-20"}`}>
        <div
          className={`mb-10 ${background === "white" ? "text-left" : "text-center text-white"} `}
        >
          <h2 className={`${background === "white" ? "" : "text-white"}`}>{heading}</h2>
          <p className={`details leading-relaxed mt-4 ${background === "white" ? "" : "text-gray-100"} `}>{para}</p>
        </div>
        <div
          className="hidden carousel:grid justify-between gap-1 lg:gap-2 py-3"
          style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        >
          {items.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} description={item.description} link={item.link} bgcolor={background} />
          ))}
        </div>
        {/* Carousel Section */}
        <div className="block carousel:hidden py-5">
          <CarouselContainer items={carouselItems} bgcolor={background} />
        </div>
      </div>
    </section>
  );
};

export default CustomComponent;
