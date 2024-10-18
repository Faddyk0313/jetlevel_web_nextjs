import React from 'react';
import { OnDemandCharter, GroupCharter, AirAmbulance, Helicopter, EmptyLeg, IndustrySpecific } from '@/svg';
import Card from '@/components/Card';
import Carousel from '@/components/Crousel';

const ExclusiveServices = () => {
    interface CarouselItem {
        icon: any | string;
        text: string;
    }

    const carouselItems: CarouselItem[]  = [
        {
            icon: <OnDemandCharter />,
            text: "On Demand Charter",
        },
        {
            icon: <GroupCharter />,
            text: "Group Charter",
        },
        {
            icon: <AirAmbulance />,
            text: "Air Ambulance",
        },
        {
            icon: <Helicopter />,
            text: "Helicopter",
        },
        {
            icon: <EmptyLeg />,
            text: "Empty Leg",
        },
        {
            icon: <IndustrySpecific />,
            text: "Industry Specific",
        }
    ];

    return (
        <div className="max-w-[1800px] mx-auto p-5 my-10 ">
            <div className="mb-10 w-full">
                <h2>Our Exclusive Services</h2>
                <p className="details mt-4">
                JetLevel Aviation specializes in providing exceptional private jet charter services, catering to a variety of travel needs with unparalleled luxury and efficiency.    
                </p>
            </div>

            {/* Cards section (grid) */}
            <div className="relative z-10 hidden md:grid grid-cols-3 lg:grid-cols-6 justify-between gap-x-2 gap-y-4 py-3">
                <Card
                    icon={<OnDemandCharter />}
                    title="On-Demand Charter"
                    description="On-demand private jet charter for ultimate flexibility and convenience"
                    bgcolor='black'
                />
                <Card
                    icon={<GroupCharter />}
                    title="Proven Safety Records"
                    description="Private jet solutions for group travel, combining luxury with comfort"
                    bgcolor='black'
                />
                <Card
                    icon={<AirAmbulance />}
                    title="Reliability"
                    description="Dedicated private jets equipped for medical emergencies and care"
                    bgcolor='black'
                />
                <Card
                    icon={<Helicopter />}
                    title="Transparency​"
                    description="Complement your private jet charter experience with swift helicopter transfers"
                    bgcolor='black'
                />
                <Card
                    icon={<EmptyLeg />}
                    title="Testimonials"
                    description="Economical private jet travel with our one-way empty leg flights"
                    bgcolor='black'
                />
                <Card
                    icon={<IndustrySpecific />}
                    title="Testimonials"
                    description="Customized solutions for specialized business requirements"
                    bgcolor='black'
                />
            </div>

            {/* Mobile carousel */}
            <div className='relative z-10 block md:hidden'>
                <Carousel items={carouselItems} bgcolor='black' />
            </div>
        </div>
    );


};

export default ExclusiveServices;
