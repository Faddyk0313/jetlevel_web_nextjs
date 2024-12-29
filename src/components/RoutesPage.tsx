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
        <div className="min-w-[24%] md:w-fit">
          <TopCharteredCities
            title="Routes"
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
    </>
  );
};

export default RoutesPage;
