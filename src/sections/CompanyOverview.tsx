import Card from '@/components/Card';
import TextCompanyOverview from '@/components/Nav/TextCompanyOverview';
import Image from 'next/image';
import React from 'react';
import {RoutesSvg, UsCanadaCitiesSvg, InternationalCitiesSvg, AircraftSvg, AirportsSvg} from '@/svg'

const CompanyOverview = () => {
    return (
        <section className='max-w-screen-2xl mx-auto'>
            <div className="flex flex-col md:flex-row justify-center  p-8 gap-1 w-fit">
                <div className="w-full md:max-w-[40%]">
                    <h2 className="mb-4">Our Story, Mission, and Values at Jetlevel Aviation.</h2>
                    <TextCompanyOverview /> 
                </div>
                <div className="w-full ">
                    <Image width={600} height={600} className='mx-auto' src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/of-experience-under-the-hud-1-1-qmfcszjfjpfop9nwox08fyw6iclg6chjd2lfs6hieo.jpg" alt="60 years of experience under one roof with an airplane flying through the number 60"  />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 justify-between gap-2 max-w-screen-2xl mx-auto px-4 py-3">
                <Card
                    icon={<RoutesSvg />}
                    title="Routes"
                    description="Explore diverse routes for your travel needs."
                />
                <Card
                    icon={<UsCanadaCitiesSvg />}
                    title="US & Canada Cities"
                    description="Connect to major cities across US and Canada."
                />
                <Card
                    icon={<InternationalCitiesSvg />}
                    title="International Cities"
                    description="Fly globally to various international destinations."
                />
                <Card
                    icon={<AircraftSvg />}
                    title="Aircraft"
                    description="Choose from a wide range of luxury jets."
                />
                <Card
                    icon={<AirportsSvg />}
                    title="Airports"
                    description="Access convenient airports for your journey."
                />
            </div>
        </section>
    );
};

export default CompanyOverview;
