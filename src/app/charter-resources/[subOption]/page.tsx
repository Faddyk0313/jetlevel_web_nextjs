import AircraftCharterPage from '@/components/AircraftCharterPage';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CostCalculatorPage from '@/components/CostCalculatorPage';
import DistanceCalculatorPage from '@/components/DistanceCalculatorPage';
import FlightTrackerPage from '@/components/FlightTrackerPage';
import UsaAirportPage from '@/components/UsaAirportPage';
import { createClient } from "@/lib/contento";
import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    subOption: string;
  };
};

// Define page content based on `subOption`
const pageContent: Record<string, { title: string; description: string }> = {
  "private-jet-airports": { 
    title: "Airport Directory | Private Jet Charter | Executive Airports", 
    description: "Browse our USA Airport Directory for executive airports across the country flying with JetLevel Aviation. Book your private jet charter: 1-855-JETLEVEL" 
  },
  "aircraft-types": { 
    title: "Private Aircraft Charters | Private Jet Planes for Hire", 
    description: "Discover JetLevel Aviation's private charter aircraft options. From light jets to long-range planes find aircraft charters & get personalize quote to next flight." 
  },
  "cost-estimator": { 
    title: "Charter Flights Cost Calculator​ | JetLevel Aviation", 
    description: "With our advance Charter Flights Cost Calculator get accurate estimates based on historical rates. Book or contact us for assistance." 
  },
  "flight-tracker": { 
    title: "Private Flight Tracker and Status| JetLevel Aviation", 
    description: "Use JetLevel Aviation's flight tracker for real-time flight status updates. Monitor route, ETA, aircraft details & weather for precise tracking & peace of mind." 
  },
  "distance-calculator": { 
    title: "Distance Calculator​ | JetLevel Aviation", 
    description: "Plan with precision using our Flight Time and Distance Calculator. Get accurate flight charter distances for your luxury travel. Book or contact us for more." 
  },
};

// Generate metadata dynamically
export async function generateMetadata({ params }: PageProps) {
  const { subOption } = params;
  const content = pageContent[subOption];

  if (content) {
    return {
      title: content.title,
      description: content.description,
    };
  }

  return {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  };
}


// This function generates static parameters for known paths
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({ subOption }));
}

const CharterResources = async ({ params }: PageProps) => {
  const { subOption } = params;

  // Get content based on `subOption`, with fallback for 404 content
  const { title } = pageContent[subOption] || {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  };

  // Determine the contentType based on subOption
  let contentType;

  // update content type for each suboption

  if (subOption === "private-jet-airports") {
    contentType = "airport_pages";
  } else if (subOption === "aircraft-types") {
    contentType = "aircraft_pages";
  } else if (subOption === "cost-estimator") {
    contentType = "www";
  } else if (subOption === "flight-tracker") {
    contentType = "www";
  } else if (subOption === "distance-calculator") {
    contentType = "www";
  } else {
    notFound();
    return null;
  }

  const client = createClient();
  const limit = 20; // Set to a reasonable high limit
  let response = await client.getContentByType({
    contentType: contentType,
    sortBy: "published_at",
    sortDirection: "desc",
    limit,
  });

  let content = [...response.content];

  while (response.nextPage) {
    response = await response.nextPage();
    content = content.concat(response.content);
  }
  // console.log("Total content items:", content.length);

  return (
    <>
    {
      title === 'Airport Directory | Private Jet Charter | Executive Airports' ?
      <UsaAirportPage />:
      title === 'Private Aircraft Charters | Private Jet Planes for Hire' ?
      <AircraftCharterPage />:
      title === 'Charter Flights Cost Calculator​ | JetLevel Aviation' ?
      <CostCalculatorPage /> :
      title === 'Private Flight Tracker and Status| JetLevel Aviation' ?
      <FlightTrackerPage /> :
      title === 'Distance Calculator​ | JetLevel Aviation' ?
      <DistanceCalculatorPage /> :null
    }
  </>
  );
};

export default CharterResources;
