import Card from '@/components/Card';
import TextCompanyOverview from '@/components/TextCompanyOverview';
import Image from "next/image";
import React, { ReactNode } from 'react';
import { Routes_DistanceCalculator, UsCanadaCities, InternationalCities, Aircraft, Airports } from '@/svg';
import CarouselContainer from '@/components/CarouselContainer';

type CompanyOverviewProps = {
    heading: string,
    collapseText: boolean,
    description: string,
    IconsItems: any;
};
const CompanyOverview = ({ heading, description, collapseText = true, IconsItems }: CompanyOverviewProps) => {
    interface CarouselItem3 {
        icon: any | string;
        title: string;
        link: string;
    }
    interface CarouselItem4 {
        icon: any | string;
        title: string;
        description: string;
        link: string;
    }
    const carouselItems: CarouselItem3[] = [
        { icon: <Routes_DistanceCalculator />, title: "Routes", link: '/popular-routes' },
        { icon: <UsCanadaCities />, title: "US & Canada Cities", link: '/us-canada-chartered-cities' },
        { icon: <InternationalCities />, title: "International Cities", link: '/international-chartered-cities' },
        { icon: <Aircraft />, title: "Aircraft", link: '/aircraft-charters' },
        { icon: <Airports />, title: "Airports", link: '/usa-airport-directory' }
    ];

    const carouselItems2: CarouselItem4[] = [
        { icon: <Routes_DistanceCalculator />, title: "Routes", description: 'Explore diverse routes for your travel needs.', link: '/popular-routes' },
        { icon: <UsCanadaCities />, title: "US & Canada Cities", description: 'Connect to major cities across US and Canada.', link: '/us-canada-chartered-cities' },
        { icon: <InternationalCities />, title: "International Cities", description: 'Fly globally to various international destinations.', link: '/international-chartered-cities' },
        { icon: <Aircraft />, title: "Aircraft", description: 'Choose from a wide range of luxury jets.', link: '/aircraft-charters' },
        { icon: <Airports />, title: "Airports", description: 'Access convenient airports for your journey.', link: '/usa-airport-directory' }
    ];

    // console.log(carouselItems[0].link);

    return (
        (<section className='max-w-[1800px] mx-auto flex flex-col justify-center min-h-screen  lg:pt-2 px-5 md:px-10 lg:px-20'>
            <div className="flex flex-col lg:flex-row justify-center gap-1 w-fit">
                <div className="w-full lg:min-w-[50%] lg:max-w-[50%] lg:pt-7">
                    <h2 className="mb-4">{heading}</h2>
                    <p className={`${collapseText ? 'xl:block hidden' : ""} details leading-relaxed details`}>
                        {description} <br />
                        {
                            collapseText ?
                                <span className="my-2 text-darkBlue font-bold italic">
                                    Fly with <span className='border-b-2 border-darkBlue text-inherit'>
                                        Confidence!
                                    </span>
                                </span>
                                : ""
                        }

                    </p>

                    {
                        collapseText ?
                            <>
                                <div className={`block xl:hidden details leading-relaxed details`}>
                                    <p>At JetLevel Aviation, we're redefining the private jet charter experience by prioritizing safety, reliability, and transparency. Founded in 2019, we've established ourselves as a trusted global advisor in the aviation industry. Our mission is to provide high-quality aircraft and competitive pricing, backed by leading customer service to deliver the best value. We are committed to core values of reliability, safety, and transparency, ensuring client satisfaction for both frequent travels and special occasions.</p>
                                    <TextCompanyOverview />
                                </div>
                            </> : ""
                    }
                </div>
                <div className="w-full ">
                    <Image
                        width={600}
                        height={600}
                        className='mx-auto'
                        src="/images/60-years-of-experience.jpg"
                        alt="60 years of experience under one roof with an airplane flying through the number 60"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
            </div>
            <div className="hidden carousel:grid grid-cols-5 justify-between gap-2 py-4">
                {
                    // IconsItems?.map((card:any) => {
                    //     const Icon = iconMapping[card.icon] ;
                    //     return(
                    //         <>
                    //         <Card
                    //             icon={<Icon />}
                    //             title={card.title}
                    //             description={card.description}
                    //             bgcolor={card.bgcolor}
                    //         />
                    //     </>
                    //     )
                    // })
                    carouselItems2.map((item, index) => (
                        <Card
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            bgcolor='white'
                        />
                    ))
                }
            </div>
            <div className='block carousel:hidden py-7'>
                <CarouselContainer items={carouselItems} bgcolor='white' />

            </div>
        </section>)
    );
};

export default CompanyOverview;
