import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Events from '@/components/Events';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import events from '../../../events.json';
import React from 'react';
import { Suspense } from "react";
import LeadForm from '@/components/LeadForm';

const EventsPage = () => {
  return (
    <div>
      <Hero
        title="Events"
        hasOverlay={true}
        description="Get Your Private Jet Quote Instantly and fly to any event in the world."
        image="/images/Events Hero Image.png"
        hasCalculator={false}
      />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className='min-w-full md:min-w-[72%]'>
          <Breadcrumb />
          <h2 className='mt-4'>Private Jet Charter for Events Around the World</h2>
          <p className='text-[#727982] mb-4 text-justify'>
            JetLevel Aviation offers premier private jet charters for special events worldwide. From major sports events and film awards to global conventions and exhibitions, our dedicated charter specialists ensure you have the perfect aircraft for your journey. We also provide comprehensive services including ground transportation, luxury accommodations, gourmet in-flight catering, and personalized concierge assistance. Elevate your event experience with our seamless private jet services.
          </p>

          <Events eventsData={events?.event} />
        </div>

        <div className="min-w-[24%] max-w-fit">
        <Suspense fallback={<div className="search-form__loader"></div>}>
            <LeadForm widget={true} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
