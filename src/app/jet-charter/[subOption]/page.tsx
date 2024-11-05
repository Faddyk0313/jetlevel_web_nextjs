import { createClient } from "@/lib/contento";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    subOption: string;
  };
};

const pageContent: Record<string, { title: string; }> = {
  'us-canada': { title: 'US Canada' },
  'international': { title: 'International' },
  'popular-routes': { title: 'Popular Routes' },
  'empty-legs': { title: 'Empty Legs' },
};

// This function generates static parameters for known paths
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({ subOption }));
}

const JetCharter = async ({ params }: PageProps) => {
  const { subOption } = params;

  const { title } = pageContent[subOption] || {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
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

  // Fetch content based on determined contentType
  const { content } = await createClient()
    .getContentByType({
      contentType: contentType,
      sortBy: "published_at",
      sortDirection: "desc"
    })
    .catch((err) => {
      notFound();
    });
console.log("contentType:",content)
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold my-4">{title}</h1>
      <ul>
        {content?.map((item, key) => (
          <li key={key}>
            <Link className="hover:underline hover:text-blue-600" href={"/" + item.slug}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JetCharter;
