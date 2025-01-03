import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import EmptyLegDirectory from "@/components/EmptyLegDirectory";
import UsCanadaPage from "@/components/UsCanadaPage";
import { createClient } from "@/lib/contento";
import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
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
  return Object.keys(pageContent).map((subOption) => ({
    subOption,
  }));
}


type SubOptions = 

"us-canada"|
"international"|
"popular-routes"|
"empty-legs"
// Fetch data for a given subOption
async function fetchContent(subOption: SubOptions) {
  const client = createClient();
  console.log('Fetching content',subOption)
  const contentType = {
    "us-canada": "usa_city_pages",
    "international": "international_city_pages",
    "popular-routes": "route_pages",
    "empty-legs": "empty_leg_flights",
  }

  if (!contentType) {
    return null ;
  }

  const limit = 100;
  let response = await client.getContentByType({
    contentType:contentType[subOption],
    sortBy: "published_at",
    sortDirection: "desc",
    limit,
  });

  let content = [...response.content];

  while (response.nextPage) {
    response = await response.nextPage();
    content = content.concat(response.content);
  }

  return content;
}

// Main Component
const JetCharter = async ({ params }: PageProps) => {
  const { subOption } = params;

  const { title, link } = pageContent[subOption] || {
    title: "Page Not Found",
  };

  const content = await fetchContent(subOption as SubOptions);

  if (!content) {
    notFound();
  }
  console.log('content',content.length)

  return (
    <>
      <Hero title={`${title == 'US & Canada​ | JetLevel Aviation' ? "USA & Canada's Premier Chartered Cities" :title == 'International Private Jet Charter​ | JetLevel Aviation' ? "International Chartered Cities" :title == 'Popular Routes​ | JetLevel Aviation' ? "Premier Chartered Routes" :title == 'Empty Leg Flights​ | JetLevel Aviation' ? "Empty Leg Flights" : ""  }`} description={`${title == 'Empty Leg Flights​ | JetLevel Aviation' ? "Search, Compare, and Book Seamlessly" : ""}`} image={link} hasCalculator={false} hasOverlay={true} />
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
      ) : (
        <EmptyLegDirectory />
      )}
    </>
  );
};

export default JetCharter;