import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Events from '@/components/Events';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React from 'react';
import { Suspense } from "react";
import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Events - Jetlevel Aviation',
  description: 'Experience seamless travel to events worldwide with JetLevel Aviation. Charter private jets anywhere with luxury services, ground transport, and 24/7 availability.',
};


const EventsPage = () => {
  return (
    <div>
      <Hero title="Events" hasOverlay={true} description="Get Your Private Jet Quote Instantly and fly to any event in the world." image="/images/Events Hero Image.png" hasCalculator={false} />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className='min-w-full md:min-w-[72%]'>
          <Breadcrumb />
          <h2 className='mt-4'>Private Jet Charter for Events Around the World</h2>
          <p className='text-[#727982]  mb-4 text-justify '>JetLevel Aviation offers premier private jet charters for special events worldwide. From major sports events and film awards to global conventions and exhibitions, our dedicated charter specialists ensure you have the perfect aircraft for your journey. We also provide comprehensive services including ground transportation, luxury accommodations, gourmet in-flight catering, and personalized concierge assistance. Elevate your event experience with our seamless private jet services.</p>
          <p className='text-[#727982]  mb-4 text-justify '>Traveling to prestigious events like award shows, fashion weeks, or film festivals in commercial flights can be stressful and time-consuming. Limited luggage space, cramped seating, and unpredictable schedules can turn an exciting trip into a hassle. With JetLevel Aviation, you avoid these inconveniences. Our global reach ensures you can fly directly to and from your event, saving time and preserving your comfort. Enjoy the convenience of boarding your private jet right after the event, no matter your location.</p>
          <p className='text-[#727982]  mb-4 text-justify '>Private jet charters are not only for high-profile events. They are also perfect for personal milestones such as family reunions or weddings. JetLevel Aviation tailors each flight to meet your specific needs, ensuring a smooth and enjoyable journey.</p>
          <p className='text-[#727982]  mb-4 text-justify '>Looking ahead to 2024, consider planning your travel around some of the year’s most anticipated events. Whether it’s a major sporting event, a cultural festival, or a corporate summit, JetLevel Aviation will arrange a private jet charter that fits your schedule and preferences. Contact us at +1-888-538-5387 for more information. Our team is available 24/7 to assist you.</p>

          <Events />
        </div>

        <div className="min-w-[24%] max-w-fit  max-[650px]:mt-0 sticky top-[90px] h-fit">
          <Suspense fallback={<div className="search-form__loader"></div>}>
            <LeadForm widget={true} />
          </Suspense>
        </div>

      </section>
    </div>
  );
};

export default EventsPage;