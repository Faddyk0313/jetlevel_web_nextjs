import React from "react";
import Hero from "@/sections/Hero";
import BrandNames from "@/sections/BrandNames";
import ExclusiveServices from "@/sections/ExclusiveServices";
import SmartTravelTools from "@/sections/SmartTravelTools";
import PopularPrivateJetCharters from "@/sections/PopularPrivateJetCharters";
import WhatOurClientsSay from "@/sections/WhatOurClientsSay";
import RequestQuoteBanner from "@/components/RequestQuoteBanner";
import ChartersTypes from "@/components/ChartersTypes";
import CharterTypes from "../../../charterTypes.json";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

export const metadata = {
  title: 'Industry Specific Charter | Jetlevel Aviation',
  description: 'Explore our charter solutions tailored for every unique trip, including corporate, event, sports team, oil and gas, government, film, and music industry charter..',
};


export default function IndustoryCharter(): JSX.Element {
  return (
    <>
      <Hero
        image={
          "/images/Private jet interior bg .webp"
        }
        title={"Fly with Confidence!"}
        tagline={
          "Charter Your Private Jet Today and Experience Seamless, Personalized Travel"
        }
        hasCalculator={true}
        hasOverlay={false}
      />
      <BrandNames />
      <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20 pb-0">
        <Breadcrumb />
        <h2 className='mt-6'>
          We understand that every trip is unique. That's why we offer
          specialised charter solutions
        </h2>
        <ChartersTypes charterType={CharterTypes?.charterTypes || []} />
      </div>
      <ExclusiveServices />
      <SmartTravelTools />
      <PopularPrivateJetCharters />
      <WhatOurClientsSay />
      {/* <RequestQuoteBanner /> */}
    </>
  );
}
