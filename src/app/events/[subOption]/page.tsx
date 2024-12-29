"use client";

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import TopCharteredCities from '@/components/TopCharteredCities'
import BrandNames from '@/sections/BrandNames'
import Hero from '@/sections/Hero'
import React, { useState } from 'react'
import events from '../../../../events.json';
import AvailableAircrafts from '@/sections/AvailableAircrafts';
import Collapsible from '@/components/Collapsible'

type PageProps = {
  params: {
    subOption: string;
  };
};

const EventDetailPage = ({ params }: PageProps) => {
  const mergeEvents = events.event.flatMap(item => item.content);
  const singleEvent = mergeEvents.find((event) => 
    event.heading.toLowerCase() === params.subOption.replace(/-/g, ' ').toLowerCase()
  );
  // console.log('singleEvent',singleEvent);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
    
  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
       <Hero title={singleEvent?.heading || ''} description="Get Your Private Jet Quote Instantly and Fly in Ultimate Luxury" image="https://jetlevel.com/wp-content/uploads/2024/08/Untitled-design-17.png" hasOverlay={true} hasCalculator={false} />
       <BrandNames />
       <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
       <Breadcrumb />
        <div className='flex justify-between'>
          <div className='w-[73%] max-[650px]:w-full'>
            <h2 className='text-[45px] text-[#0071BA] mb-5 mt-6'>{singleEvent?.heading}</h2>
            <p className='text-[#727982] text-md mb-4 text-justify '>{singleEvent?.description || ''}</p>

            <div className='mt-8'>
            {singleEvent?.content?.map((faq, index) => (
              <Collapsible
                key={index}
                question={faq.name}
                answer={
                  <div>
                    <p className='mb-4'>{faq.description}</p>
                    <ul>
                      {faq?.list?.map((item, idx) => (
                        <li className='mb-2 ' key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </div>
                }
                iconStyle="caret"
                iconPosition="end"
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

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

        <div>
         <AvailableAircrafts sectionClass={'pt-20 !pr-0 !pl-0 '} heading='Available Private Jets' subHeading='We Offer Hundreds of Private Jets to Choose from in various Jet Sizes, Explore some of them below.' />
        </div>
       </section>
    </div>
  )
}

export default EventDetailPage