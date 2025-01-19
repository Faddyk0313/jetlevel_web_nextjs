import CityPage from "@/components/CityPage";
import EmptyLegPage from "@/components/EmptyLegPage";
import RoutesPage from "@/components/RoutesPage";
import {
    blogs,
    internationalLocations,
    usCanadaLocations,
} from "@/components/Locations";
import { createClient } from "@/lib/contento";
import { ContentData } from "@gocontento/client";
import { notFound } from "next/navigation";
import Airport_Aircraft_Blog_Page from "@/components/Airport_Aircraft_Blog_Page";

type PageProps = {
    params: {
        subOption: string;
        location: string;
    };
};

// Shared function to fetch content
async function fetchContent(subOption: string, location: string) {
    let content: ContentData | null = null;
    let contentType2: string | undefined;

    // Determine content type and fetch content
    if (subOption === "cities") {
        if (usCanadaLocations.includes(location)) {
            contentType2 = "usa_city_pages";
        } else if (internationalLocations.includes(location)) {
            contentType2 = "international_city_pages";
        }
    } else if (subOption === "popular-routes") {
        contentType2 = "route_pages";
    } else if (subOption === "empty-legs") {
        contentType2 = "empty_leg_flights";
    }
    let slug = "";
    if (location == "boston-ma") {
        slug = "boston-private-jet-charter-flights";
    } else {
        slug = `${
            location === "los-angeles"
                ? "charter-flights"
                : location === "las-vegas"
                ? "private-jet-charter-to"
                : subOption === "empty-legs"
                ? "empty-leg-flights"
                : location == "chicago" ||
                  location == "nashville" ||
                  location == "dallas" ||
                  location == "teterboro" ||
                  location == "van-nuys" ||
                  location == "miami" ||
                  location == "naples" ||
                  subOption == "popular-routes"
                ? "private-jet-charter"
                : subOption == "cities"
                ? "private-jet-charter-flights-to"
                : ""
        }-${location}`;
    }
    if (contentType2) {
        try {
            content = await createClient().getContentBySlug(slug, contentType2);
        } catch (err) {
            console.error("Error fetching content:", err);
        }
    }
    return { content, contentType2 };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: PageProps) {
    const { subOption, location } = params;
    const { content } = await fetchContent(subOption, location);
    // console.log(content?.fields)
    if (content && content.seo) {
        const title = content.seo.title;
        const description =
            "A+ BBB Rated. Fly with our 10+ years of private jet charter expertise in " +
            content.fields.page_name.text +
            " Access 5,000+ aircraft. Call (855) 538-5383 for 24/7 support.";

        return {
            title: title || "Default Page Title",
            description: description || "Default page description.",
        };
    }

    // Fallback metadata
    return {
        title: "Page Not Found",
        description: "The page you are looking for does not exist.",
    };
}

const FlightPage: React.FC<PageProps> = async ({ params }: PageProps) => {
    let { subOption, location } = params;

    console.log("--------------", subOption, location);
    let contentType;
    if (blogs.includes(location)) {
        // This condition will only be true for those blog pages whose url starts with 'empty-leg-flights-'.
        // console.log("------", subOption);
        contentType = "blogs";

        let content: void | ContentData = undefined;
        if (subOption == "empty-legs") {
            subOption = "blog";
            content = await createClient()
                .getContentBySlug(`empty-leg-flights-${location}`, contentType)
                .catch((err) => {
                    console.log(err);
                });
        } else if (subOption == "popular-routes") {
            subOption = "blog";
            content = await createClient()
                .getContentBySlug(
                    `private-jet-charter-${location}`,
                    contentType
                )
                .catch((err) => {
                    console.log(err);
                });
        }
        if (!content) {
            return (
                <div className="p-6 max-w-4xl mx-auto text-center">
                    <h2 className="font-bold my-4">Fetch failed in location</h2>
                </div>
            );
        }
        // Convert to JavaScript Date object
        const dateObj = new Date(content.updated_at);

        // Extract day, month, and year
        const day = dateObj.getDate().toString().padStart(2, "0"); // Ensure two digits
        const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
        const year = dateObj.getFullYear();

        // Format the date as 'date-month-year'
        const formattedDate = `${day}-${month}-${year}`;

        // console.log("formattedDate---------------------", formattedDate);  // Output: 09-12-2024
        // const date = content.updated_at ? content.updated_at : content.created_at
        return (
            <Airport_Aircraft_Blog_Page
                fields={content.fields}
                date={formattedDate}
                region={contentType}
            />
        );
    } else {
        const { content, contentType2 } = await fetchContent(
            subOption,
            location
        );
        console.log(subOption);

        if (!content || !contentType2) {
            return (
                <div className="p-6 max-w-4xl mx-auto text-center">
                    <h2 className="font-bold my-4">Pageeee Not Found</h2>
                </div>
            );
        }
        if (subOption === "cities") {
            return <CityPage fields={content.fields} region={contentType2} />;
        } else if (subOption === "popular-routes") {
            return <RoutesPage fields={content.fields} />;
        } else if (subOption === "empty-legs") {
            return <EmptyLegPage fields={content.fields} />;
        } else {
            return (
                <div className="p-6 max-w-4xl mx-auto text-center">
                    <h2 className="font-bold my-4">Page Not Found</h2>
                </div>
            );
        }
    }
};

export default FlightPage;
