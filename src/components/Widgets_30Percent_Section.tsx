import React, { Suspense } from 'react';
import LeadForm from '@/components/LeadForm';
import TopCharteredCities from './TopCharteredCities';

interface Widgets_30Percent_SectionProps {
  widgetTitle: string,
  widgetContent: {
    name: string,
    link: string;
  }[],
  widgetButtonLink: string,
  showCostCalculator?: boolean;
}

const Widgets_30Percent_Section: React.FC<Widgets_30Percent_SectionProps> = ({ widgetTitle, widgetContent, widgetButtonLink, showCostCalculator = true }) => {
  return (
    <div className="min-w-[24%] sm:flex sm:flex-wrap justify-between lg:flex-col lg:justify-start lg:h-fit  gap-5 sticky top-[90px]  ">
      <div className="w-full sm:w-[300px] md:flex-grow lg:w-full">
        {
          showCostCalculator ?
            <Suspense fallback={<div className="search-form__loader"></div>}>
              <LeadForm widget={true} />
            </Suspense>
            : ""
        }

      </div>
      <div className="w-full sm:w-[300px] md:flex-grow lg:w-full ">
        <TopCharteredCities
          //   title="Top USA Chartered Cities"
          title={widgetTitle}
          //   cities={[
          //     {
          //       name: 'Van Nuys',
          //       link: '/private-jet-charter-flights-to-van-nuys-ca/'
          //     },
          //     {
          //       name: 'Los Angeles',
          //       link: '/private-jet-charter-flights-to-los-angeles-ca'
          //     },
          //     {
          //       name: 'Miami',
          //       link: '/private-jet-miami/'
          //     },
          //     {
          //       name: 'Chicago',
          //       link: '/private-jet-chicago/'
          //     },
          //     {
          //       name: 'Dallas',
          //       link: '/private-jet-charter-flights-to-dallas-tx'
          //     },
          //     {
          //       name: 'Las Vegas',
          //       link: '/private-jet-charter-flights-to-las-vegas-nv'
          //     },
          //     {
          //       name: 'San Francisco',
          //       link: '/private-jet-charter-flights-to-san-francisco-ca/'
          //     },
          //     {
          //       name: 'Nashville',
          //       link: '/private-jet-charter-flights-to-nashville-tn/'
          //     },
          //     {
          //       name: 'Seattle',
          //       link: '/private-jet-charter-flights-to-seattle-wa/'
          //     },
          //     {
          //       name: 'Teterboro',
          //       link: '/private-jet-charter-flights-to-teterboro-nj'
          //     },
          //   ]}
          cities={widgetContent}
          buttonLink={widgetButtonLink}
        />
      </div>
    </div>
  );
};

export default Widgets_30Percent_Section;
