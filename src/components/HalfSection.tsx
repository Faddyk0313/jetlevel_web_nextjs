import React, { ReactNode, Suspense } from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import TopCharteredCities from '@/components/TopCharteredCities';
import SmartTravelTools from '@/sections/SmartTravelTools';
import PopularPrivateJetCharters from '@/sections/PopularPrivateJetCharters';
import LeadForm from '@/components/LeadForm';
import Widgets_30Percent_Section from './Widgets_30Percent_Section';
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
        <Widgets_30Percent_Section widgetTitle='Top USA Chartered Cities' widgetContent={[
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
              ]} widgetButtonLink={"/us-canada-chartered-cities"}  />
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
