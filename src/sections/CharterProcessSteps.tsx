import React from 'react';
import { RequestQuote, ReceiveCharterProposal, ConfirmAircraft, ReceiveFlightBrief } from '@/svg';

const CharterProcessSteps = () => {

    const steps = [
        {
            icon: <RequestQuote />,
            title: "Request a Quote",
            description: "At JetLevel Aviation, requesting a quote is effortless. Whether through our interactive online form, a quick phone call, or a message via WhatsApp, we make sure starting your journey with us is convenient and accessible."
        },
        {
            icon: <ReceiveCharterProposal  />,
            title: "Receive Your Charter Proposal",
            description: "Our team diligently assesses the market to bring you the best aircraft options. We present a curated selection of aircraft, ensuring each choice aligns perfectly with your specific flight needs and preferences."
        },
        {
            icon: <ConfirmAircraft />,
            title: "Confirm Your Aircraft",
            description: "Our confirmation process is streamlined for your ease. Initially, we provide a straightforward Charter Contract through DocuSign. This efficient step allows us to promptly secure your selected aircraft, ensuring a smooth and quick booking process."
        },
        {
            icon: <ReceiveFlightBrief />,
            title: "Receive Your Flight Brief",
            description: "Once your aircraft is confirmed and all trip details are finalized, we send you a comprehensive flight brief. This briefing includes all essential information you'll need before departure, ensuring you're fully informed and prepared for your private jet charter experience."
        }
    ];

    return (
        <section className="px-5 md:px-10 lg:px-20 min-h-screen h-auto flex items-center">
            <div className='max-w-[1800px] mx-auto flex flex-col md:flex-row gap-2'>
                <h2 className="md:w-5/12 mb-4">
                    Simple 4-Step <span className='inline-block border-b-2  text-darkBlue border-darkBlue'>Charter Process</span>
                </h2>
                <div className='md:w-7/12'>
                    {steps.map((step, index) => (
                        <div key={index}>
                            <div className="flex items-start gap-2 ">
                                <div className='flex pt-2 flex-shrink-0 '>
                                    {step.icon}
                                </div>
                                <div className="">
                                    <h3 className="mb-1 font-bold text-darkBlue">{step.title}</h3>
                                    <p className="">{step.description}</p>
                                </div>
                            </div>
                            {index < steps.length - 1 && <div className="h-14 mb-2 ml-[30px] border-l-2 border-l-darkBlue "></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CharterProcessSteps;
