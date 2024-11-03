import { createClient } from "@/lib/contento";
// import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    subOption: string;
  };
}; 

// Define page content based on `subOption`
const pageContent: Record<string, { title: string}> = {
  'us-canada': { title: 'US Canada'},
  'international': { title: 'International'},
  'popular-routes': { title: 'Popular Routes'},
  'empty-legs': { title: 'Empty Legs'},
};

// This function generates static parameters for known paths
export async function generateStaticParams() {
  return Object.keys(pageContent).map((subOption) => ({ subOption }));
}

const JetCharter = async({ params }: PageProps) => {
  const { subOption } = params;

  // Get content based on `subOption`, with fallback for 404 content
  const { title } = pageContent[subOption] || {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
  };

  const {content} = await createClient()
  // .getContentBySlug('empty-leg-flights-aspen', 'empty_leg_flights')
  .getContentByType({
    contentType: "empty_leg_flights",
       sortBy: "published_at",
    sortDirection: "desc"
  })
  .catch((err) => {
    console.log(err)
    notFound()
  })

console.log(content)

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold my-4">{title}</h1>
      <ul>
      {content.map((item,key)=>(
          <li key={key}>
            <Link href={"/"+item.slug}>{item.name}</Link> 
            </li>
        ))}
      </ul> 
    </div>
    
  );
};

export default JetCharter;
