import AircraftPage from "@/components/AircraftPage";
import Airport_Aircraft_Blog_Page from "@/components/Airport_Aircraft_Blog_Page";
import AirportPage from "@/components/AirportPage";
import BlogPage from "@/components/BlogPage";
import { aircrafts, airports, blogs } from "@/components/Locations";
import { createClient } from "@/lib/contento";
import { ContentData } from "@gocontento/client";

type PageProps = {
    params: {
        subOption: string;
        location: string;
    };
};

async function fetchContent(subOption: string, location: string) {
    let content: ContentData | null = null;
    let contentType2: string | null = null;

    if (airports.includes(location)) {
        contentType2 = "airport_pages";
        subOption = "Private Jet Airports";
    } else if (aircrafts.includes(location)) {
        contentType2 = "aircraft_pages";
        subOption = "Aircrafts";
    } else if (blogs.includes(location)) {
        contentType2 = "blogs";
        subOption = "Blogs";
    }
    if (contentType2) {
        try {
            content = await createClient().getContentBySlug(location, contentType2);
        } catch (err) {
            console.error("Error fetching content:", err);
        }
    }
    return { content, contentType2 };
}

// Metadata generation
export async function generateMetadata({ params }: PageProps) {
    const { subOption, location } = params;
    const { content } = await fetchContent(subOption, location);

    if (content && content.seo) {
        const title = content.seo.title;
        const description = content.seo.description;

        return {
            title: title,
            description: description ,
        };
    }

    // Fallback metadata
    return {
        title: "Page Not Found",
        description: "The page you are looking for does not exist.",
    };
}

const ResourcesPage: React.FC<PageProps> = async ({ params }: PageProps) => {
    let { subOption, location } = params;

    if (subOption === "private-jet-airports" || subOption == "aircraft-types" || subOption == "blogs") {
        const { content, contentType2 } = await fetchContent(subOption, location);
        if (!content || !contentType2) {
            return (
                <div className="p-6 max-w-4xl mx-auto text-center">
                    <h2 className="font-bold my-4">Page Not Found</h2>
                </div>
            );
        }

        if (contentType2 == "blogs") {
            const dateObj = new Date(content.updated_at);
            const day = dateObj.getDate().toString().padStart(2, "0");
            const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
            const year = dateObj.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            subOption = 'blog'
            // console.log("-----Blog------", subOption, location )
            return <BlogPage fields={content.fields} date={formattedDate} />
        }
        else if (contentType2 == "airport_pages") {
            // console.log("-----Airport------", subOption, location )
            return <AirportPage fields={content.fields} />;
        }
        else if (contentType2 == "aircraft_pages") {
            // console.log("-----Aircraft------", subOption, location )
            return <AircraftPage fields={content.fields} />;
        }
    } else {
        return (
            <div className="p-6 max-w-4xl mx-auto text-center">
                <h2 className="font-bold my-4">Page Not Found</h2>
            </div>
        );
    }
};

export default ResourcesPage;
