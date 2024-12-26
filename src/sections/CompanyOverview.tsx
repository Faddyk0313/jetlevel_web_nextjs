import Card from '@/components/Card';
import TextCompanyOverview from '@/components/TextCompanyOverview';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Routes_DistanceCalculator, UsCanadaCities, InternationalCities, Aircraft, Airports } from '@/svg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import CarouselCard from '@/components/CrouselCard';
import { iconMapping } from '@/lib/constant';

type CompanyOverviewProps ={
    heading: string,
    description: string | ReactNode,
    IconsItems:any
}
const CompanyOverview = ({heading,description,IconsItems}:CompanyOverviewProps) => {
    interface CarouselItem3 {
        icon: any | string;
        title: string;
    }
    const carouselItems: CarouselItem3[] = [
        { icon: <Routes_DistanceCalculator />, title: "Routes" },
        { icon: <UsCanadaCities />, title: "US & Canada Cities" },
        { icon: <InternationalCities />, title: "International Cities" },
        { icon: <Aircraft />, title: "Aircraft" },
        { icon: <Airports />, title: "Airports" }
    ];

    return (
        <section className='max-w-[1800px] mx-auto flex flex-col justify-center min-h-screen  lg:pt-2 px-5 md:px-10 lg:px-20'>
            <div className="flex flex-col lg:flex-row justify-center gap-1 w-fit">
                <div className="w-full lg:min-w-[50%] lg:max-w-[50%] lg:pt-7">
                    <h2 className="mb-4">{heading}</h2>
                    {typeof description === "string" ? (
                        <p className='hidden xl:block details leading-relaxed details'>{description}</p>
                        ) : (
                        description
                    )}
                    <TextCompanyOverview />
                </div>
                <div className="w-full ">
                    <Image width={600} height={600} className='mx-auto' src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/of-experience-under-the-hud-1-1-qmfcszjfjpfop9nwox08fyw6iclg6chjd2lfs6hieo.jpg" alt="60 years of experience under one roof with an airplane flying through the number 60" />
                </div>
            </div>

            <div className="hidden carousel:grid grid-cols-5 justify-between gap-2 py-3">
                {
                    IconsItems?.map((card:any) => {
                        const Icon = iconMapping[card.icon] ;
                        return(
                            <>
                            <Card
                                icon={<Icon />}
                                title={card.title}
                                description={card.description}
                                bgcolor={card.bgcolor}
                            />
                        </>
                        )
                    })
                }
            </div>
            <div className='block carousel:hidden'>
                <Carousel className='mt-5' opts={{ align: "start", loop: true }}>
                    {/* Carousel Content */}
                    <CarouselContent>
                        {carouselItems.map((item, index) => (
                            <CarouselItem
                                key={index} // Two items visible with snapping
                                className="sm:basis-1/2"
                            >
                                <CarouselCard item={item} bgcolor="white" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default CompanyOverview;
