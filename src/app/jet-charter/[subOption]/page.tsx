import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import EmptyLegDirectory from "@/components/EmptyLegDirectory";
import UsCanadaPage from '@/components/UsCanadaPage';
import { createClient } from "@/lib/contento";
import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import { UsCanadaCities } from '@/svg';
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    subOption: string;
  };
};

const pageContent: Record<string, { title: string; description:string; link: string; }> = {
  "us-canada": { title: "US & Canada​ | JetLevel Aviation", description: "JetLevel Aviation is a global provider of private travel solutions. View our featured US & Canada locations or request a flight to/from anywhere in the world.", link: "/images/Hero Image for directory Page.webp" },
  'international': { title: "International Private Jet Charter​ | JetLevel Aviation", description: "JetLevel Aviation is a global provider of private travel solutions. View our featured International locations or request a flight to/from anywhere in the world.", link: "/images/Hero Image for directory Page.webp" },
  "popular-routes": { title: "Popular Routes​ | JetLevel Aviation", description: "Discover the most sought-after private jet routes. Our curated selection provides quick access to popular destinations, ensuring a seamless and luxurious journey every time.", link: "/images/Hero Image for directory Page.webp" },
  "empty-legs": { title: "Empty Leg Flights​ | JetLevel Aviation", description: "Score big savings with Empty Leg Flights. Luxurious, private, and cost-effective - your perfect flight solution is just a click away.", link: "/images/Empty-Legs Hero Image.avif" },
};

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


// This function generates static parameters for known paths
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({ subOption }));
}
// Main Component
const JetCharter = async ({ params }: PageProps) => {
  const { subOption } = params;

  const { title, link } = pageContent[subOption] || {
    title: "Page Not Found",
  };

  // Determine the contentType based on subOption
  let contentType;
  if (subOption === "us-canada") {
    contentType = "usa_city_pages";
  } else if (subOption === "international") {
    contentType = "international_city_pages";
  } else if (subOption === "popular-routes") {
    contentType = "route_pages";
  } else if (subOption === "empty-legs") {
    contentType = "empty_leg_flights";
  } else {
    notFound();
    return null;
  }

  const client = createClient();
  const limit = 100; // Set to a reasonable high limit
  let response = await client.getContentByType({
    contentType: contentType,
    sortBy: "name",
    sortDirection: "asc",
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
      <Hero title={`${title == 'US & Canada​ | JetLevel Aviation' ? "USA & Canada's Premier Chartered Cities" :title == 'International Private Jet Charter​ | JetLevel Aviation' ? "International Jet Charter" :title == 'Popular Routes​ | JetLevel Aviation' ? "Premier Private Jet Charter Routes" :title == 'Empty Leg Flights​ | JetLevel Aviation' ? "Empty Leg Flights" : ""  }`} description={`${title == 'Empty Leg Flights​ | JetLevel Aviation' ? "Search, Compare, and Book Seamlessly" : ""}`} image={link} hasCalculator={false} hasOverlay={true} showCalculator={`${title == "Empty Leg Flights​ | JetLevel Aviation" ? "" :  "LeadForm"}`} />
      <BrandNames />
      {
        title !== 'Empty Leg Flights​ | JetLevel Aviation' ? (
        <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
          <Breadcrumb />
          {

            title === "US & Canada​ | JetLevel Aviation" ?
              <UsCanadaPage content={content} />
              : title === 'International Private Jet Charter​ | JetLevel Aviation' ?
                <UsCanadaPage content={content} />
                :
                title === 'Popular Routes​ | JetLevel Aviation' ?
                  <UsCanadaPage title="Routes" content={content} />
                  : null
          }
        </section>
        )
        :<EmptyLegDirectory />
      }
          

    </>
  );
};

export default JetCharter;