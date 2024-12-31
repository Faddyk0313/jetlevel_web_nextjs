import AirAmbulance from '@/components/AirAmbulance';
import GroupCharter from '@/components/GroupCharter';
import HelicopterPage from '@/components/HelicopterPage';
import OnDemandCharterPage from '@/components/OnDemandCharterPage';

type PageProps = {
  params: {
    subOption: string;
  };
};

// Define page content based on `subOption`
const pageContent: Record<
  string,
  { title: string; description: string; }
> = {
  'on-demand-charter': {
    title: 'On-Demand Private Jet Charter Flights| JetLevel Aviation',
    description: 'Book your on-demand private jet charter with JetLevel Aviation. 30+ years of experience and access to 25,000+ jets. Get your quote today.',
  },
  'group-charter': {
    title: 'Group Charter Flight | JetLevel Aviation',
    description: 'JetLevel Aviation offers tailor-made group charter flights services for any size, ensuring efficient private & hassle-free group air charter travel experiences.',
  },
  'air-ambulance': {
    title: 'Charter Private Jet With Medical Flight Transport | JetLevel',
    description: 'Charter private jet with JetLevel for expert medical flight transport. 24/7 air ambulance services with rapid response & professional care for your loved ones.',
  },
  'helicopter': {
    title: 'Helicopter Charter Flight | JetLevel Aviation',
    description: 'JetLevel Aviation provides unparalleled Helicopter Charter Flight services, prioritizing convenience, luxury, and memorable experiences.',
  },
};

// This function generates static parameters for known paths
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({ subOption }));
}

// Dynamic metadata generation
export async function generateMetadata({ params }: PageProps) {
  const { subOption } = params;

  // Get metadata based on `subOption`, or fallback for unknown paths
  const { title, description } = pageContent[subOption] || {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
  };

  return {
    title,
    description,
  };
}

const OurServices = ({ params }: PageProps) => {
  const { subOption } = params;

  // Get content based on `subOption`, with fallback for 404 content
  const { title } = pageContent[subOption] || {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
  };

  return (
    <div>
      {title === 'On-Demand Private Jet Charter Flights| JetLevel Aviation' ? (
        <OnDemandCharterPage />
      ) : title === 'Group Charter Flight | JetLevel Aviation' ? (
        <GroupCharter />
      ) : title === 'Charter Private Jet With Medical Flight Transport | JetLevel' ? (
        <AirAmbulance />
      ) : title === 'Helicopter Charter Flight | JetLevel Aviation' ? (
        <HelicopterPage />
      ) : null}
    </div>
  );
};

export default OurServices;
