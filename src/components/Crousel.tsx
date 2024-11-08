"use client";

import React, { useState, useRef } from "react";

interface CarouselItem {
  icon: any; // Accepts either an icon class or an image URL
  title: string;
}

interface CarouselProps {
  items: CarouselItem[]; // Accepts an array  of items as a prop
  bgcolor: string; // Background color prop
}
const Carousel: React.FC<CarouselProps> = ({ items, bgcolor }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left (next)
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 2 ? 0 : prevIndex + 1
      );
    } else if (touchStartX - touchEndX < -50) {
      // Swipe right (previous)
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 2 : prevIndex - 1
      );
    }
  }; 

  return (
    <div className="my-3">
      <div
        className="overflow-hidden scroll-snap-x-mandatory touch-auto"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform gap-[5%] duration-500 ease-in-out snap-start"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {items.map((item: CarouselItem, index: number) => (
            <div
              key={index}
              className={` ${
                bgcolor == "white"
                  ? "bg-black" 
                  : "bg-white bg-opacity-10 backdrop-blur-lg"
              } rounded-lg p-4 w-[45%] flex-shrink-0 snap-center`}
            >
              <div className="flex justify-center items-center mx-auto mb-4 bg-darkBlue w-20 h-20 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-white text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {items.map((_, index: number) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full mx-1 ${
              index === currentIndex ||
              index === (currentIndex + 1) % items.length
                ? `${bgcolor == "white" ? "bg-black" : "bg-white"}`
                : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
