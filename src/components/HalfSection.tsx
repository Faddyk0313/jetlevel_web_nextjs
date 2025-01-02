import React, { ReactNode, Suspense } from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import TopCharteredCities from '@/components/TopCharteredCities';
import SmartTravelTools from '@/sections/SmartTravelTools';
import PopularPrivateJetCharters from '@/sections/PopularPrivateJetCharters';
import LeadForm from '@/components/LeadForm';
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

        <div className="min-w-[24%] lg:min-w-fit lg:block sm:flex sm:flex-wrap justify-start gap-5 h-fit">
          <div className="w-fit lg:w-auto sm:min-w-[324px] lg:min-w-fit sm:flex-1 lg:flex-none">
            <Suspense fallback={<div className="search-form__loader"></div>}>
              <LeadForm widget={true} />
            </Suspense>
          </div>
          <div className="w-fit lg:w-auto sm:min-w-[324px] lg:min-w-fit sm:flex-1 lg:flex-none ">
            <TopCharteredCities
              title="Top USA Chartered Cities"
              cities={[
                {
                  name: 'Van Nuys',
                  link: '/private-jet-charter-flights-to-van-nuys-ca/'
                },
                {
                  name: 'Los Angeles',
                  link: '/private-jet-charter-flights-to-los-angeles-ca'
                },
                {
                  name: 'Miami',
                  link: '/private-jet-miami/'
                },
                {
                  name: 'Chicago',
                  link: '/private-jet-chicago/'
                },
                {
                  name: 'Dallas',
                  link: '/private-jet-charter-flights-to-dallas-tx'
                },
                {
                  name: 'Las Vegas',
                  link: '/private-jet-charter-flights-to-las-vegas-nv'
                },
                {
                  name: 'San Francisco',
                  link: '/private-jet-charter-flights-to-san-francisco-ca/'
                },
                {
                  name: 'Nashville',
                  link: '/private-jet-charter-flights-to-nashville-tn/'
                },
                {
                  name: 'Seattle',
                  link: '/private-jet-charter-flights-to-seattle-wa/'
                },
                {
                  name: 'Teterboro',
                  link: '/private-jet-charter-flights-to-teterboro-nj'
                },
              ]}
              buttonLink="#"
            />
          </div>
        </div>
      </section>
      {
        showBottomContent &&
        <>
          <SmartTravelTools hasSectionPadding={false} />
          <PopularPrivateJetCharters />
        </>
      }
    </div>
  );
};

export default HalfSection;
