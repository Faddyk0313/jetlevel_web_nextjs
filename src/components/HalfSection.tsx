import React, { ReactNode } from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import TopCharteredCities from '@/components/TopCharteredCities';
import SmartTravelTools from '@/sections/SmartTravelTools';
import PopularPrivateJetCharters from '@/sections/PopularPrivateJetCharters';

interface HalfSectionProps {
  children: ReactNode; 
  showBottomContent?: boolean;
}

const HalfSection: React.FC<HalfSectionProps> = ({ children, showBottomContent }) => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className="min-w-full md:min-w-[72%]">
          <Breadcrumb />
          {children}
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
      {
        showBottomContent &&
        <>
         <SmartTravelTools />
         <PopularPrivateJetCharters />
        </>
      }
    </div>
  );
};

export default HalfSection;
