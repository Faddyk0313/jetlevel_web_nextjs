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

export default function IndustoryCharter(): JSX.Element {
  return (
    <>
      <Hero
        image={
          "https://fly.jetlevel.com/assets/Private%20jet%20interior%20bg%20.webp"
        }
        title={"Fly with Confidence!"}
        tagline={
          "Charter Your Private Jet Today and Experience Seamless, Personalized Travel"
        }
        hasCalculator={true}
        hasOverlay={false}
      />
      <BrandNames />
      <section className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20">
        <h2>
          We understand that every trip is unique. That's why we offer
          specialised charter solutions
        </h2>
        <ChartersTypes charterType={CharterTypes?.charterTypes || []} />
      </section>
      <ExclusiveServices />
      <SmartTravelTools />
      <PopularPrivateJetCharters />
      <WhatOurClientsSay />
      {/* <RequestQuoteBanner /> */}
    </>
  );
}
