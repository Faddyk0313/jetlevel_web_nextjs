import Hero from "@/sections/Hero";
import BrandNames from "@/sections/BrandNames";
import CompanyOverview from "@/sections/CompanyOverview";
import AboutUs from "@/sections/AboutUs";
import ExclusiveServices from "@/sections/ExclusiveServices";
import OurOffices from "@/sections/OurOffices";
import CharterProcessSteps from "@/sections/CharterProcessSteps";
import FourMetrics from "@/sections/FourMetrics";
import SmartTravelTools from "@/sections/SmartTravelTools";
import OurComitment from "@/sections/OurComitment";
import PopularPrivateJetCharters from "@/sections/PopularPrivateJetCharters";
import MeetOwner from "@/sections/MeetOwner";
import AvailableAircrafts from "@/sections/AvailableAircrafts";
import WhatOurClientsSay from "@/sections/WhatOurClientsSay";
import Faqs from "@/sections/Faqs";
import BookYourPrivateJet from "@/sections/BookYourPrivateJet";

export default function Home() {
  return (
    <>
      <Hero image={"https://fly.jetlevel.com/assets/Private%20jet%20interior%20bg%20.webp"} title={"Get Instant Quote and Charter Your Private Jet Today"} subtitle={"Fly with Confidence!"} tagline={"Fly in 2-4 hours. No hidden fees."} hasCalculator={true} hasOverlay={false}/>
      <BrandNames />
      <CompanyOverview />
      <AboutUs />
      <ExclusiveServices />
      <OurOffices />
      <CharterProcessSteps />
      <MeetOwner />
      <SmartTravelTools />
      <OurComitment />
      <PopularPrivateJetCharters />
      <FourMetrics />
      <AvailableAircrafts />
      <WhatOurClientsSay />
      <Faqs />
      {/* <BookYourPrivateJet /> */}
    </>
  );
}
