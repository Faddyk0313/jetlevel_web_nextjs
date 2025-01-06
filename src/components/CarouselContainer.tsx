import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import CarouselCard from "./CrouselCard";

// Define types for props
interface CarouselItems_A {
    icon: React.ReactNode;
    title: string;
    link: string;
}

interface CarouselContainerProps {
    items: CarouselItems_A[],
    bgcolor: string;
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({ items, bgcolor }) => {
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-[65%]"
                        >
                            <CarouselCard item={item} bgcolor={bgcolor} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default CarouselContainer;
