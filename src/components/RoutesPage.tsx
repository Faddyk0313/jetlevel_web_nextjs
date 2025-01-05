"use client";

import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import React from "react";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import CollapsibleSection from "./CollapsibleSection";
import TopCharteredCities from "./TopCharteredCities";
import CollapsibleRouteTableSection from "./CollapsibleRouteTableSection";
import CollapsibleRouteWeatherSection from "./CollapsibleRouteWeatherSection";
import CollapsibleRoutesPointsSection from "./CollapsibleRoutesPointsSection";
import { Suspense } from "react";
import LeadForm from '@/components/LeadForm';
import Widgets_30Percent_Section from "./Widgets_30Percent_Section";

const RoutesPage = ({ fields }: any) => {
  //   console.log("-------------------------", fields.gmap_section.blocks)
  return (
    <>
      <Hero
        image="/images/blue-clouds-routes-hero-image.webp"
        title={fields.hero_content.blocks[0].fields.title.text}
        tagline="– Elevate Your Journey –"
        description={fields.hero_content.blocks[0].fields.paragraph.text}
        hasCalculator={true}
      />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className="min-w-full md:min-w-[72%]">
          <Breadcrumb />
          <CollapsibleSection
            title={fields.hero_content.blocks[0].fields.title.text}
            content={fields.hero_content.blocks[0].fields.paragraph.text}
            isDefaultOpen={true}
          />

          <CollapsibleRouteWeatherSection
            title="Best Airports for Private Jet Charters"
            items={
              fields.gmap_section.blocks
            }
          />

          <CollapsibleRoutesPointsSection
            title="Why Choose a Private Jet?"
            content={fields.points.blocks}
          />
          <CollapsibleRouteTableSection
            title="Cost Estimates"
            items={fields.table.blocks[0].fields.rows.list}
          />
          <CollapsibleRouteWeatherSection
            title="Weather Insights"
            items={fields.weather_data.blocks}
          />
          <CollapsibleSection
            title={fields.last_section.blocks[0].fields.title.text}
            content={fields.last_section.blocks[0].fields.paragraph.text}
          />
        </div>
        
        <Widgets_30Percent_Section widgetTitle="Popular Chartered Routes" widgetContent={[
                {
                  name: "Van Nuys to Las Vegas – Private Jet Charter",
                  link: "/private-jet-charter-los-angeles-to-las-vegas"
                },
                {
                  name: "Los Angeles to San Francisco – Private Jet Charter",
                  link: "/private-jet-charter-los-angeles-to-san-francisco"
                },
                {
                  name: "Dallas to Houston – Private Jet Charter",
                  link: "/private-jet-charter-dallas-to-houston"
                },
                {
                  name: "Atlanta to Miami – Private Jet Charter",
                  link: "/private-jet-charter-atlanta-to-miami"
                },
                {
                  name: "Teterboro to Miami – Private Jet Charter",
                  link: "/private-jet-charter-chicago-to-fort-lauderdale"
                },
              ]} widgetButtonLink="/popular-routes" />
      </section>
    </>
  );
};

export default RoutesPage;
