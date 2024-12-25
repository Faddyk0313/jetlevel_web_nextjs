"use client"
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React from 'react';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import TopCharteredCities from './TopCharteredCities';
import CollapsibleAircraftGridSection from './CollapsibleAircraftGridSection';
import CollapsibleAircraftOverviewSection from './CollapsibleAircraftOverviewSection';
import ExclusiveServices from '@/sections/ExclusiveServices';
import SmartTravelTools from '@/sections/SmartTravelTools';
import PopularPrivateJetCharters from '@/sections/PopularPrivateJetCharters';
import WhatOurClientsSay from '@/sections/WhatOurClientsSay';
import CollapsibleAvinodeCalculatorSection from './CollapsibleAvinodeCalculatorSection';

const overviewContent = [
  {
    heading: 'King Air 250 Charter Flight Prices',
    paragraph: 'At JetLevel, prices for King Air 250 charter range between $2,300 and $4,300 per hour. Final costs depend on the customer’s departure city, destination, and flight schedule. Contact us at JetLevel for more details and to book your King Air 250 charter today.'
  },
  {
    heading: 'Comfort and Affordability in Your King Air 250 Charter',
    paragraph: `With a seating capability of 8, the square-oval interior of the King Air 250 provides ample head and shoulder room for all passengers. The luxurious seats can move laterally, swivel, and recline to your liking. Plus, fold-out tables allow you to relax or work during your flight.

    Power outlets and wireless connectivity are also available. Electronic dimmable windows let you block out the light on sunny days, and a built-in refreshment center makes providing for guests easy. The spacious, 55-cubic-feet baggage area is also easily accessible while in-flight.`
  },
  {
    heading: 'Experience a Quiet Flight on the King Air 250',
    paragraph: 'The cabin’s noise-canceling technology allows you to have conversations with fellow passengers while in flight. Additionally, the aircraft’s two lightweight composite propellers are very quiet, generating less noise overall.'
  },
  {
    heading: 'The Newest Addition to King Air 200',
    paragraph: 'The King Air 200 series is known for its reliability and versatility, and the King Air 250 is no different. In addition to being popular with the business class, the plane is also commonly used to bring cargo to airports that other aircraft cannot reach.'
  },
  {
    heading: 'More Destinations with the King Air 250 Charter',
    paragraph: 'Because the King Air 200 boasts landing gear that works on short and even unpaved runways, you can choose from a wider variety of airports for departure and arrival. With a take off distance of 2,111 feet, you’ll have a wide variety of airports to choose from. The composite propellers also offer great runway performance.'
  },
  {
    heading: 'Safety is Paramount',
    paragraph: `Safety is paramount in every King Air 250 charter. The aircraft flies at a cruising altitude approximately 10,000 feet higher than many other turboprop aircrafts. Not only does this make your flight easier and smoother, but also safer. Additionally, the weather radar can detect upcoming turbulence. The aircraft easily de-ices, and rapid windscreen wipers make it possible to fly in many conditions.

    And although the King Air 250 can be flown by only one pilot, JetLevel always requires two pilots for all trips.`
  },
];

const AircraftPage = ({ fields }: any) => {

  // console.log("----------------------", fields)
  return (
    <>
      <Hero
        image={fields.hero_image.assets[0].asset.url}
        title={fields.hero_section.blocks[0].fields.title.text}
        description={fields.hero_section.blocks[0].fields.paragraph.text}
        hasCalculator={true}
      />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className="min-w-full md:min-w-[72%]">
          <Breadcrumb />
          <CollapsibleAircraftGridSection title='Aircraft Specifications' content={fields.grid_content.list} isDefaultOpen={true} />
          <CollapsibleAircraftOverviewSection title={fields.map_heading.text} content={fields.range_distance.number} />
          <CollapsibleAircraftOverviewSection title={fields.heading.text} content={fields.other_section.text} />
          {/* Aircraft Comparison Iframe */}
          <CollapsibleAvinodeCalculatorSection title={fields.compare_heading.text}  />
          {/* <iframe id="comparison-iframe" className="border-none w-full h-auto" src="https://app.jetlevel.com/aircraftComparison" ></iframe> */}

        </div>
        <div className="min-w-[24%] max-w-fit">
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
      </section>
      <ExclusiveServices hasSectionPadding={false} />
      <SmartTravelTools hasSectionPadding={false} />
      <PopularPrivateJetCharters hasSectionPadding={false} />
      <WhatOurClientsSay hasSectionPadding={false} />
    </>
  );
};

export default AircraftPage;
