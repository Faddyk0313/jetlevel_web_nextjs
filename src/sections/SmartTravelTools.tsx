import React from 'react';
import { Routes_DistanceCalculator, CostCalculator, FlightTracker } from '@/svg';
import CustomComponent from '@/components/CustomComponent';
import { CardInfo } from '@/app/types';

interface SmartTravelToolsProps {
    hasSectionPadding?: boolean;
}

const SmartTravelTools: React.FC<SmartTravelToolsProps> = ({ hasSectionPadding })  => {

    let heading: string = 'Smart Travel Tools'
    let para: string = 'Navigate your private jet charter experience with precision and ease using our suite of intuitive tools. From real-time flight tracking to instant cost and distance estimations, we empower you to make informed, confident decisions about your travel. Discover a smarter way to fly, tailored to your needs.';

    const data: CardInfo[] = [
        {
            icon: <CostCalculator />,
            title: "Cost Calculator",
            description: "Instantly estimate your private jet charter cost",
        },
        {
            icon: <FlightTracker />,
            title: "Flight Tracker",
            description: "Real-time updates on your charter flight status",
        },
        {
            icon: <Routes_DistanceCalculator />,
            title: "Distance Calculator",
            description: "Quickly calculate your charter flight distance",
        },
    ];

    return (
        <CustomComponent heading={heading} para={para} background="white" items={data} hasPadding={hasSectionPadding}  />

    );


};

export default SmartTravelTools;
