import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import CompanyOverview from "@/sections/CompanyOverview";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CompanyOverview />
      <div className="h-screen bg-black"></div>
    </>
  );
}
