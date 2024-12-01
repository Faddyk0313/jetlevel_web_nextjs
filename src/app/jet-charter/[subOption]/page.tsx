import { createClient } from "@/lib/contento";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    subOption: string;
  };
};

const pageContent: Record<string, { title: string }> = {
  "us-canada": { title: "US Canada" },
  international: { title: "International" },
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
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="font-bold my-4">{title}</h1>
      <ul>
        {subOption === "popular-routes" ? (
          <li>
            <Link
              className="hover:text-blue"
              href={"/private-jet-charter-teterboro-to-buffalo"}
            >
              Private Jet Charter Routes: Teterboro to Buffalo
            </Link>
          </li>
        ) : (
          ""
        )}
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

export default JetCharter;
