import React from 'react';
import { OnDemandCharter, GroupCharter, AirAmbulance, Helicopter, EmptyLeg, IndustrySpecific } from '@/svg';
import CustomComponent from '@/components/CustomComponent';
import { CardInfo } from '@/app/types';

const ExclusiveServices = () => {
    let heading: string = 'Our Exclusive Services'
    let para: string = 'JetLevel Aviation specializes in providing exceptional private jet charter services, catering to a variety of travel needs with unparalleled luxury and efficiency.';

    const data: CardInfo[] = [
        {
            icon: <OnDemandCharter />,
            title: "On Demand Charter",
            description: "On-demand private jet charter for ultimate flexibility and convenience",
        },
        {
            icon: <GroupCharter />,
            title: "Group Charter",
            description: "Private jet solutions for group travel, combining luxury with comfort",
        },
        {
            icon: <AirAmbulance />,
            title: "Air Ambulance",
            description: "Dedicated private jets equipped for medical emergencies and care",
        },
        {
            icon: <Helicopter />,
            title: "Helicopter",
            description: "Complement your private jet charter experience with swift helicopter transfers",
        },
        {
            icon: <EmptyLeg />,
            title: "Empty Leg",
            description: "Economical private jet travel with our one-way empty leg flights",
        },
        {
            icon: <IndustrySpecific />,
            title: "Industry Specific",
            description: "Customized solutions for specialized business requirements",
        }
    ];

    return (
        <CustomComponent heading={heading} para={para} background="white" items={data} />
    );
};

export default ExclusiveServices;
