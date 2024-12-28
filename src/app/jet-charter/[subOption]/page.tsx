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

const pageContent: Record<string, { title: string; link: string; }> = {
  "us-canada": { title: "USA & Canada's Premier Chartered Cities", link: "/images/Hero Image for directory Page.webp" },
  'international': { title: "International Chartered Cities", link: "/images/Hero Image for directory Page.webp" },
  "popular-routes": { title: "Premier Chartered Routes", link: "/images/Hero Image for directory Page.webp" },
  "empty-legs": { title: "Empty Leg Flights", link: "/images/Empty-Legs Hero Image.avif" },
};

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
      <Hero title={title} image={link} hasCalculator={false} />
      <BrandNames />
      {
        title !== 'Empty Leg Flights' ? (
        <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
          <Breadcrumb />
          {

            title === "USA & Canada's Premier Chartered Cities" ?
              <UsCanadaPage content={content} />
              : title === 'International Chartered Cities' ?
                <UsCanadaPage content={content} />
                :
                title === 'Premier Chartered Routes' ?
                  <UsCanadaPage content={content} />
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
