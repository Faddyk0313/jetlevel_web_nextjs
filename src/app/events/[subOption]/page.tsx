import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import events from '../../../../events.json';
import AvailableAircrafts from '@/sections/AvailableAircrafts';
import HalfSection from '@/components/HalfSection';
import EventDetail from '@/components/EventDetailPage';

type PageProps = {
  params: {
    subOption: string;
  };
};

// Generate static parameters for all possible `subOption` values
export async function generateStaticParams() {
  const mergeEvents = events.event.flatMap((item) => item.content);
  const params = mergeEvents.map((event) => ({
    subOption: event.heading.toLowerCase().replace(/ /g, '-'),
  }));

  return params;
}

// Page component
const EventDetailPage = ({ params }: PageProps) => {
  const mergeEvents = events.event.flatMap((item) => item.content);
  const singleEvent = mergeEvents.find(
    (event) =>
      event.heading.toLowerCase() ===
      params.subOption.replace(/-/g, ' ').toLowerCase()
  );

  if (!singleEvent) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <Hero
        title={singleEvent.heading || ''}
        description="Get Your Private Jet Quote Instantly and Fly in Ultimate Luxury"
        image="https://jetlevel.com/wp-content/uploads/2024/08/Untitled-design-17.png"
        hasOverlay={true}
        hasCalculator={false}
      />
      <BrandNames />
      <HalfSection>
        <EventDetail singleEvent={singleEvent} />
      </HalfSection>
      <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <AvailableAircrafts
          sectionClass={'pt-20 !pr-0 !pl-0 '}
          heading="Available Private Jets"
          subHeading="We Offer Hundreds of Private Jets to Choose from in various Jet Sizes, Explore some of them below."
        />
      </section>
    </div>
  );
};

export default EventDetailPage;
