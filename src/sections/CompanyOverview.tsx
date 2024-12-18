import Card from '@/components/Card';
import TextCompanyOverview from '@/components/TextCompanyOverview';
import Image from 'next/image';
import React from 'react';
import { Routes_DistanceCalculator, UsCanadaCities, InternationalCities, Aircraft, Airports } from '@/svg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import CarouselCard from '@/components/CrouselCard';

const CompanyOverview = () => {
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
                    <h2 className="mb-4">Our Story, Mission, and Values at Jetlevel Aviation.</h2>
                    <p className='hidden xl:block details leading-relaxed'>
                        At JetLevel Aviation, we're redefining the private jet charter experience by prioritizing safety, reliability, and transparency. Founded in 2019, we've established ourselves as a trusted global advisor in the aviation industry. Our mission is to provide high-quality aircraft and competitive pricing, backed by leading customer service to deliver the best value. We are committed to core values of reliability, safety, and transparency, ensuring client satisfaction for both frequent travels and special occasions. Fly across the US, Canada, and beyond with our diverse network of aircraft and convenient departure points. Choose JetLevel Aviation for a seamless, worry-free journey every time—elevating your travel experiences to new heights. <br />
                        <span className="my-2 text-darkBlue font-bold italic">
                            Fly with <span className='border-b-2 border-darkBlue'>
                                Confidence!
                            </span>
                        </span>
                    </p>
                    <p className='details leading-relaxed xl:hidden'>
                        At JetLevel Aviation, we're redefining the private jet charter experience by prioritizing safety, reliability, and transparency. Founded in 2019, we've established ourselves as a trusted global advisor in the aviation industry. Our mission is to provide high-quality aircraft and competitive pricing, backed by leading customer service to deliver the best value. We are committed to core values of reliability, safety, and transparency, ensuring client satisfaction for both frequent travels and special occasions.
                    </p>
                    <TextCompanyOverview />
                </div>
                <div className="w-full ">
                    <Image width={600} height={600} className='mx-auto' src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/of-experience-under-the-hud-1-1-qmfcszjfjpfop9nwox08fyw6iclg6chjd2lfs6hieo.jpg" alt="60 years of experience under one roof with an airplane flying through the number 60" />
                </div>
            </div>

            <div className="hidden carousel:grid grid-cols-5 justify-between gap-2 py-3">
                <Card
                    icon={<Routes_DistanceCalculator />}
                    title="Routes"
                    description="Explore diverse routes for your travel needs."
                    bgcolor="white"
                />
                <Card
                    icon={<UsCanadaCities />}
                    title="US & Canada Cities"
                    description="Connect to major cities across US and Canada."
                    bgcolor="white"
                />
                <Card
                    icon={<InternationalCities />}
                    title="International Cities"
                    description="Fly globally to various international destinations."
                    bgcolor="white"
                />
                <Card
                    icon={<Aircraft />}
                    title="Aircraft"
                    description="Choose from a wide range of luxury jets."
                    bgcolor="white"
                />
                <Card
                    icon={<Airports />}
                    title="Airports"
                    description="Access convenient airports for your journey."
                    bgcolor="white"
                />
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
