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
const pageContent: Record<string, { title: string; }> = {
  "private-jet-airports": { title: "Private Jet Airports" },
  "aircraft-types": { title: "Aircraft Types" },
  "cost-estimator": { title: "Cost Estimator" },
  "flight-tracker": { title: "Flight Tracker" },
  "distance-calculator": { title: "Distance Calculator" },
};

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
      title === 'Private Jet Airports' ?
      <UsaAirportPage />:
      title === 'Aircraft Types' ?
      <AircraftCharterPage />:
      title === 'Cost Estimator' ?
      <CostCalculatorPage /> :
      title === 'Flight Tracker' ?
      <FlightTrackerPage /> :
      title === 'Distance Calculator' ?
      <DistanceCalculatorPage /> :null
    }
  </>
  );
};

export default CharterResources;
