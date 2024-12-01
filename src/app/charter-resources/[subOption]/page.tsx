import { createClient } from "@/lib/contento";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    subOption: string;
  };
};

// Define page content based on `subOption`
const pageContent: Record<string, { title: string }> = {
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
    contentType = "international_city_pages";
  } else if (subOption === "cost-estimator") {
    contentType = "route_pages";
  } else if (subOption === "flight-tracker") {
    contentType = "empty_leg_flights";
  } else if (subOption === "distance-calculator") {
    contentType = "empty_leg_flights";
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
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="font-bold my-4">{title}</h1>
      {/* <Link className="hover:text-blue" href="/addison-airport-kads">
                Addison Airport (KADS)
            </Link> */}
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
  );
};

export default CharterResources;
