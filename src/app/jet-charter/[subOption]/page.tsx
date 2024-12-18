import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { createClient } from "@/lib/contento";
import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    subOption: string;
  };
};

const pageContent: Record<string, { title: string; }> = {
  "us-canada": { title: "US Canada" },
  'international': { title: "International" },
  "popular-routes": { title: "Popular Routes" },
  "empty-legs": { title: "Empty Legs" },
};

// This function generates static parameters for known paths
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({ subOption }));
}
// Main Component
const JetCharter = async ({ params }: PageProps) => {
  const { subOption } = params;

  const { title } = pageContent[subOption] || {
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
      <Hero title="USA & Canada's Premier Chartered Cities" image="https://jetlevel.com/wp-content/uploads/2023/07/iStock-628648350.jpg" hasCalculator={false} />
      <BrandNames />
      <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <Breadcrumb />
        <div className="">
          <ul>
            {content?.map((item, key) => (
              <li key={key}>
                <Link className="hover:text-blue" href={"/" + item.slug}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
};

export default JetCharter;
