import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import React from "react";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import TopCharteredCities from "./TopCharteredCities";
import CollapsibleAirportSection from "./CollapsibleAirportSection";

const AirportPage = ({ fields }: any) => {
    // console.log("-------------------------", fields.fbo_content.blocks[0].fields?.airport_section_list?.blocks[0].fields.image.assets[0].asset.url)
  return (
    <>
      <Hero 
        image="https://jetlevel.com/wp-content/uploads/2023/07/bg-kads.jpg"
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
    </>
  );
};

export default AirportPage;
