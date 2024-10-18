import React from 'react';
import { Routes_DistanceCalculator, CostCalculator, FlightTracker } from '@/svg';
import Card from '@/components/Card';
import Carousel from '@/components/Crousel';

const SmartTravelTools = () => {
    interface CarouselItem {
        icon: any | string;
        text: string;
    }

    const carouselItems: CarouselItem[] = [
        {
            icon: <CostCalculator />,
            text: "Cost Calculator",
        },
        {
            icon: <FlightTracker />,
            text: "Flight Tracker",
        },
        {
            icon: <Routes_DistanceCalculator />,
            text: "Distance Calculator",
        },
    ];

    return (
        <div className='bg-gray-100'>
            <div className="max-w-[1800px] mx-auto p-5 py-10 ">
                <div className="mb-10 w-full">
                    <h2>Smart Travel Tools</h2>
                    <p className="details mt-4">
                        Navigate your private jet charter experience with precision and ease using our suite of intuitive tools. From real-time flight tracking to instant cost and distance estimations, we empower you to make informed, confident decisions about your travel. Discover a smarter way to fly, tailored to your needs.
                    </p>
                </div>

                {/* Cards section (grid) */}
                <div className="relative z-10 hidden md:grid grid-cols-3 justify-between gap-x-2 gap-y-4 py-3">
                    <Card
                        icon={<CostCalculator />}
                        title="Cost Calculator"
                        description="Instantly estimate your private jet charter cost"
                        bgcolor='black'
                    />
                    <Card
                        icon={<FlightTracker />}
                        title="Flight Tracker"
                        description="Real-time updates on your charter flight status"
                        bgcolor='black'
                    />
                    <Card
                        icon={<Routes_DistanceCalculator />}
                        title="Distance Calculator"
                        description="Quickly calculate your charter flight distance"
                        bgcolor='black'
                    />
                </div>

                {/* Mobile carousel */}
                <div className='relative z-10 block md:hidden'>
                    <Carousel items={carouselItems} bgcolor='black' />
                </div>
            </div>
        </div>
    );


};

export default SmartTravelTools;
