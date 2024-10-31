import Nav from "@/sections/Nav";
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
import BookYourPrivateJet from "@/sections/BookYourPrivateJet";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";
import ContactMenu from "@/sections/ContactMenu";


export default function Home() {
  return (
    <>
      <Hero />
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
      <BookYourPrivateJet />
      <ContactMenu />
    </>
  );
}
