import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import CompanyOverview from "@/sections/CompanyOverview";
import AboutUs from "@/sections/AboutUs";
import ExclusiveServices from "@/sections/ExclusiveServices";
import OurOffices from "@/sections/OurOffices";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CompanyOverview />
      <AboutUs />
      <ExclusiveServices />
      <OurOffices />
      <div className="h-screen bg-black"></div>
    </>
  );
}
