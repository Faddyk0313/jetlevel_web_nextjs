import React from 'react';
import { OnDemandCharter, ProvenSafetyRecords, Reliability, Transparency, Testimonials } from '@/svg';
import Card from '@/components/Card';
import Carousel from '@/components/Crousel';

const AboutUs = () => {
    interface CarouselItem {
        icon: any | string;
        text: string;
    }
    const carouselItems: CarouselItem[] = [
        { icon: <OnDemandCharter />, text: "On-Demand Charter" },
        { icon: <ProvenSafetyRecords />, text: "Proven Safety Records" },
        { icon: <Reliability />, text: "Reliability" },
        { icon: <Transparency />, text: "Transparency" },
        { icon: <Testimonials />, text: "Testimonials" }
    ];

    return (
        <div className="relative overflow-hidden bg-aboutUs-background bg-cover bg-fixed p-5 py-[30px] md:py-[50px] lg:py-[80px]">
            <div className='max-w-[1800px] mx-auto p-5'>
                {/* Background dim overlay with a lower z-index */}
                <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-0"></div>

                {/* Content area with text */}
                <div className="relative z-10 text-center text-white mb-10">
                    <h2>Why Choose Jetlevel Aviation?</h2>
                    <p className="details text-gray-100 mt-4">
                        Our dedicated team is available 24/7, guaranteeing reliability and readiness to have you airborne from almost any location worldwide within 2-4 hours. Emphasizing trust and transparency, JetLevel offers straightforward, fair pricing, and transparent transactions, fostering lasting relationships with clients. By choosing JetLevel, you’re opting for a superior private jet charter experience, where luxury, personalized service, and peace of mind are guaranteed. Trust JetLevel for your next private jet charter and soar above expectations.
                    </p>
                </div>

                {/* Cards section (grid) */}
                <div className="relative z-10 hidden md:grid grid-cols-5 justify-between gap-2 py-3">
                    <Card
                        icon={<OnDemandCharter />}
                        title="On-Demand Charter"
                        description="Flexible scheduling for your immediate travel plans"
                        bgcolor=''
                    />
                    <Card
                        icon={<ProvenSafetyRecords />}
                        title="Proven Safety Records"
                        description="Experience safe journeys with our impeccable record"
                        bgcolor=''
                    />
                    <Card
                        icon={<Reliability />}
                        title="Reliability"
                        description="Dependable service, available anytime, anywhere"
                        bgcolor=''
                    />
                    <Card
                        icon={<Transparency />}
                        title="Transparency​"
                        description="Clear, honest pricing for your peace of mind	"
                        bgcolor=''
                    />
                    <Card
                        icon={<Testimonials />}
                        title="Testimonials"
                        description="Hear from our satisfied clients about their experiences"
                        bgcolor=''
                    />
                </div>

                {/* Mobile carousel */}
                <div className='relative z-10 block md:hidden'>
                    <Carousel items={carouselItems} bgcolor='' />
                </div>
            </div>
        </div>
    );


};

export default AboutUs;
