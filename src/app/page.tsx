import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import CompanyOverview from "@/sections/CompanyOverview";
import AboutUs from "@/sections/AboutUs";
import ExclusiveServices from "@/sections/ExclusiveServices";
import OurOffices from "@/sections/OurOffices";
import CharterProcessSteps from "@/sections/CharterProcessSteps";
import FourMetrics from "@/sections/FourMetrics";
import SmartTravelTools from "@/sections/SmartTravelTools";
import OurComitment from "@/sections/OurComitment";
import PopularPrivateJetCharters from "@/sections/PopularPrivateJetCharters";
// import MeetOwner from "@/sections/MeetOwner";


export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CompanyOverview />
      <AboutUs />
      <ExclusiveServices />
      <OurOffices />
      <CharterProcessSteps />
      {/* <MeetOwner /> */}
      <FourMetrics />
      <SmartTravelTools />
      <OurComitment />
      <PopularPrivateJetCharters />
      
      <div className="h-screen bg-black"></div>
    </>
  );
}
