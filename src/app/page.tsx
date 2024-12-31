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

export const metadata = {
  title: 'Private Jet Charter & Jet Rental Service | JetLevel Aviation',
  description: 'JetLevel Aviation offers premier 24/7 private jet charter services. Experience unparalleled luxury and flawless travel with us. Elevate your journey today.',
};


export default function Home() {

  const IconsItems = [
    {
      icon:'Routes_DistanceCalculator',
      title:'Routes',
      description:'Explore diverse routes for your travel needs.',
      bgcolor:'white'
    },
    {
      icon:'UsCanadaCities',
      title:'US & Canada Cities',
      description:'Connect to major cities across US and Canada.',
      bgcolor:'white'
    },
    {
      icon:'InternationalCities',
      title:'International Cities',
      description:'Fly globally to various international destinations.',
      bgcolor:'white'
    }, {
      icon:'Aircraft',
      title:'Aircraft',
      description:'Choose from a wide range of luxury jets.',
      bgcolor:'white'
    }, {
      icon:'Airports',
      title:'Airports',
      description:'Access convenient airports for your journey.',
      bgcolor:'white'
    },
  ]
  return (
    <>
      <Hero image={"/images/Private jet interior bg .webp"} title={"Get Instant Quote and Charter Your Private Jet Today"} subtitle={"Fly with Confidence!"} tagline={"Fly in 2-4 hours. No hidden fees."} hasCalculator={true} hasOverlay={false}/>
      <BrandNames />
      <CompanyOverview heading='Our Story, Mission, and Values at Jetlevel Aviation.' description={
        <>
        <p className='hidden xl:block details leading-relaxed'>
          At JetLevel Aviation, we're redefining the private jet charter experience by prioritizing safety, reliability, and transparency. Founded in 2019, we've established ourselves as a trusted global advisor in the aviation industry. Our mission is to provide high-quality aircraft and competitive pricing, backed by leading customer service to deliver the best value. We are committed to core values of reliability, safety, and transparency, ensuring client satisfaction for both frequent travels and special occasions. Fly across the US, Canada, and beyond with our diverse network of aircraft and convenient departure points. Choose JetLevel Aviation for a seamless, worry-free journey every time—elevating your travel experiences to new heights. <br />
            <span className="my-2 text-darkBlue font-bold italic">
                Fly with <span className='border-b-2 border-darkBlue'>
                    Confidence!
                </span>
            </span>
        </p>
        <p className='details leading-relaxed xl:hidden'>
            At JetLevel Aviation, we're redefining the private jet charter experience by prioritizing safety, reliability, and transparency. Founded in 2019, we've established ourselves as a trusted global advisor in the aviation industry. Our mission is to provide high-quality aircraft and competitive pricing, backed by leading customer service to deliver the best value. We are committed to core values of reliability, safety, and transparency, ensuring client satisfaction for both frequent travels and special occasions.
        </p>
        </>
        } 
        IconsItems={IconsItems}
      />
      <AboutUs />
      <ExclusiveServices />
      <OurOffices />
      <CharterProcessSteps />
      <MeetOwner />
      <SmartTravelTools />
      <OurComitment />
      <PopularPrivateJetCharters />
      <FourMetrics />
      <AvailableAircrafts heading='Available Private Jets' subHeading='We Offer Hundreds of Private Jets to Choose from in various Jet Sizes, Explore some of them below.' />
      <WhatOurClientsSay />
      <Faqs />
      {/* <BookYourPrivateJet /> */}
    </>
  );
}
