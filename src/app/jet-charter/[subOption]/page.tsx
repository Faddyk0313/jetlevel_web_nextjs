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

// Static page metadata
const pageContent: Record<string, { title: string; link: string }> = {
  "us-canada": { title: "USA & Canada's Premier Chartered Cities", link: "/images/Hero Image for directory Page.webp" },
  international: { title: "International Chartered Cities", link: "/images/Hero Image for directory Page.webp" },
  "popular-routes": { title: "Premier Chartered Routes", link: "/images/Hero Image for directory Page.webp" },
  "empty-legs": { title: "Empty Leg Flights", link: "/images/Empty-Legs Hero Image.avif" },
};

// Generate static parameters
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({
    subOption,
  }));
}

// Fetch data for a given subOption
async function fetchContent(subOption: string) {
  const client = createClient();

  const contentType = {
    "us-canada": "usa_city_pages",
    international: "international_city_pages",
    "popular-routes": "route_pages",
    "empty-legs": "empty_leg_flights",
  }[subOption];

  if (!contentType) {
    return null;
  }

  const limit = 100;
  let response = await client.getContentByType({
    contentType,
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

  const content = await fetchContent(subOption);

  if (!content) {
    notFound();
  }

  return (
    <>
      <Hero title={title} image={link} hasCalculator={false} hasOverlay={true} />
      <BrandNames />
      {title !== "Empty Leg Flights" ? (
        <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
          <Breadcrumb />
          {title === "USA & Canada's Premier Chartered Cities" ||
          title === "International Chartered Cities" ? (
            <UsCanadaPage content={content} />
          ) : title === "Premier Chartered Routes" ? (
            <UsCanadaPage title="Routes" content={content} />
          ) : null}
        </section>
      ) : (
        <EmptyLegDirectory />
      )}
    </>
  );
};

export default JetCharter;
