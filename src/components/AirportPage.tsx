import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import React from "react";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import TopCharteredCities from "./TopCharteredCities";
import CollapsibleAirportSection from "./CollapsibleAirportSection";

import { Suspense } from "react";
import LeadForm from '@/components/LeadForm';
import Widgets_30Percent_Section from "./Widgets_30Percent_Section";

const AirportPage = ({ fields }: any) => {
  // console.log("-------------------------", fields.fbo_content.blocks[0].fields?.airport_section_list?.blocks[0].fields.image.assets[0].asset.url)
  return (
    <>
      <Hero
        image="/images/Airport Hero Image.jpg"
        title={fields.hero_content.blocks[0].fields.title.text}
        description={fields.hero_content.blocks[0].fields.paragraph.text}
        hasCalculator={true}
      />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className="min-w-full md:min-w-[72%]">
          <Breadcrumb />
          <CollapsibleAirportSection
            title={fields.fbo_content.blocks[0].fields.title.text}
            paragraph={fields.fbo_content.blocks[0].fields.paragraph.text}
            content={fields.fbo_content.blocks[0].fields?.airport_section_list?.blocks}
            isDefaultOpen={true}
          />
          <CollapsibleAirportSection
            title={fields.transportation_content.blocks[0].fields.title.text}
            paragraph={fields.transportation_content.blocks[0].fields.paragraph.text}
            content={fields.transportation_content.blocks[0].fields?.airport_section_list?.blocks}
          />
          <CollapsibleAirportSection
            title={fields.accommodations_content.blocks[0].fields.title.text}
            paragraph={fields.accommodations_content.blocks[0].fields.paragraph.text}
            content={fields.accommodations_content.blocks[0].fields?.airport_section_list?.blocks}
          />
          <CollapsibleAirportSection
            title={fields.weather_content.blocks[0].fields.title.text}
            paragraph={fields.weather_content.blocks[0].fields.paragraph.text}
            content={fields.weather_widget.text}
          />
          <CollapsibleAirportSection
            title={fields.runway_content.blocks[0].fields.title.text}
            paragraph={fields.runway_content.blocks[0].fields.paragraph.text}
            content={fields.runway_content.blocks[0].fields?.airport_section_list?.blocks}
            staticImageName="runway"
          />
          <CollapsibleAirportSection
            title={fields.aircraft_content.blocks[0].fields.title.text}
            paragraph={fields.aircraft_content.blocks[0].fields.paragraph.text}
            content={fields.aircraft_content.blocks[0].fields?.airport_section_list?.blocks}
            staticImageName="aircraft"
          />
          <CollapsibleAirportSection
            title={fields.special_amenities_content.blocks[0].fields.title.text}
            paragraph={fields.special_amenities_content.blocks[0].fields.paragraph.text}
            content={fields.special_amenities_content.blocks[0].fields?.airport_section_list?.blocks}
            staticImageName="special amenities"
          />
        </div>
        <Widgets_30Percent_Section widgetTitle="Top Private Jet Hubs" widgetContent={[
                {
                  name: "Will Rogers World Airport",
                  link: "/will-rogers-world-airport-kokc"
                },
                {
                  name: "Wiley Post Airport",
                  link: "/wiley-post-airport-kpwa"
                },
                {
                  name: "Spirit of St Louis Airport",
                  link: "/spirit-of-st-louis-airport-ksus"
                },
                {
                  name: "Boston Logan International Airport",
                  link: "/boston-logan-international-airport-kbos"
                },
                {
                  name: "Orlando International Airport",
                  link: "/orlando-international-airport-kmco"
                },
                {
                  name: "Naples Airport",
                  link: "/naples-airport-kapf"
                },
                {
                  name: "Addison Airport",
                  link: "/addison-airport-kads"
                },
                {
                  name: "Chicago Executive Airport",
                  link: "/chicago-executive-airport-kpwk"
                },
                {
                  name: "Miami-Opa Locka Executive Airport",
                  link: "/miami-opa-locka-executive-airport-kopf"
                },
                {
                  name: "Westchester County Airport",
                  link: "/westchester-county-airport-khpn"
                },
              ]} widgetButtonLink="/usa-airport-directory" />
      </section >
    </>
  );
};

export default AirportPage;
