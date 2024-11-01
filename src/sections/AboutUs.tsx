import React from 'react';
import { OnDemandCharter, ProvenSafetyRecords, Reliability, Transparency, Testimonials } from '@/svg';
import CustomComponent from '@/components/CustomComponent';
import { CardInfo } from '@/app/types';

const AboutUs = () => {

    let heading: string = 'Why Choose Jetlevel Aviation?'
    let para: string = 'Our dedicated team is available 24/7, guaranteeing reliability and readiness to have you airborne from almost any location worldwide within 2-4 hours. Emphasizing trust and transparency, JetLevel offers straightforward, fair pricing, and transparent transactions, fostering lasting relationships with clients. By choosing JetLevel, you’re opting for a superior private jet charter experience, where luxury, personalized service, and peace of mind are guaranteed. Trust JetLevel for your next private jet charter and soar above expectations.';

    const data: CardInfo[] = [
        {
            icon: <OnDemandCharter />,
            title: "On Demand Charter",
            description: "Flexible scheduling for your immediate travel plans",
        },
        {
            icon: <ProvenSafetyRecords />,
            title: "Proven Safety Records",
            description: "Experience safe journeys with our impeccable record",
        },
        {
            icon: <Reliability />,
            title: "Reliability",
            description: "Dependable service, available anytime, anywhere",
        },
        {
            icon: <Transparency />,
            title: "Transparency",
            description: "Clear, honest pricing for your peace of mind	",
        },
        {
            icon: <Testimonials />,
            title: "Testimonials",
            description: "Hear from our satisfied clients about their experiences",
        }
    ];

    return (
        <CustomComponent heading={heading} para={para} background="image" items={data} />
    );
};

export default AboutUs;
