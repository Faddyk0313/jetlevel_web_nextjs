"use client";

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import TopCharteredCities from '@/components/TopCharteredCities'
import BrandNames from '@/sections/BrandNames'
import Hero from '@/sections/Hero'
import React from 'react'
import events from '../../../../events.json';
import AvailableAircrafts from '@/sections/AvailableAircrafts';

type PageProps = {
  params: {
    subOption: string;
  };
};

const EventDetailPage = ({ params }: PageProps) => {
  console.log('params',params);
  const mergeEvents = events.event.flatMap(item => item.content);
  const singleEvent = mergeEvents.find((event) => 
    event.heading.toLowerCase() === params.subOption.replace(/-/g, ' ').toLowerCase()
  );
  return (
    <div>
       <Hero title={singleEvent?.heading || ''} description="Get Your Private Jet Quote Instantly and Fly in Ultimate Luxury" image="https://jetlevel.com/wp-content/uploads/2024/08/Untitled-design-17.png" hasCalculator={false} />
       <BrandNames />
       <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
       <Breadcrumb />
        <div className='flex justify-between'>
          <div className='w-[73%] max-[650px]:w-full'>
            <h1 className='text-[45px] text-[#0071BA] mb-5 mt-6'>{singleEvent?.heading}</h1>
            <p className='text-[#727982] text-md mb-4 text-justify'>{singleEvent?.description || ''}</p>
          </div>
          
          <div className="min-w-[24%] max-w-fit  mt-[76px] max-[650px]:hidden">
            <TopCharteredCities
              title="Airports For"
              cities={[
                { name: "New York, NY", link: "#" },
                { name: "Aspen, CO", link: "#" },
                { name: "Los Angeles, CA", link: "#" },
                { name: "San Francisco, CA", link: "#" },
                { name: "Miami, FL", link: "#" },
                { name: "Chicago, IL", link: "#" },
                { name: "Houston, TX", link: "#" },
                { name: "Dallas, TX", link: "#" },
                { name: "Las Vegas, NV", link: "#" },
                { name: "Denver, CO", link: "#" },
              ]}
              buttonLink="#"
            />
          </div>
        </div>
        <AvailableAircrafts />
       </section>
    </div>
  )
}

export default EventDetailPage