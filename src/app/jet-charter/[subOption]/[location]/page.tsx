
import Airport_Aircraft_Blog_Page from "@/components/Airport_Aircraft_Blog_Page";
import CityPage from "@/components/CityPage";
import EmptyLegPage from "@/components/EmptyLegPage";
import { blogs, internationalLocations, usCanadaLocations } from "@/components/Locations";
import RoutesPage from "@/components/RoutesPage";
import { createClient } from "@/lib/contento";
import { ContentData } from "@gocontento/client";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        subOption: string;
        location: string;
    };
};

const FlightPage: React.FC<PageProps> = async ({ params }: PageProps) => {
    let { subOption, location } = params;
    let contentType;

    if (blogs.includes(location)) { // This condition will only be true for those blog pages whose url starts with 'empty-leg-flights-'.
        contentType = 'blogs';
        subOption = 'blog';
        const content: void | ContentData = await createClient()
            .getContentBySlug(
                `empty-leg-flights-${location}`,
                contentType
            )
            .catch((err) => {
                console.log(err);
            });
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
        const day = dateObj.getDate().toString().padStart(2, '0');  // Ensure two digits
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');  // Month is 0-indexed
        const year = dateObj.getFullYear();

        // Format the date as 'date-month-year'
        const formattedDate = `${day}-${month}-${year}`;

        // console.log("formattedDate---------------------", formattedDate);  // Output: 09-12-2024
        // const date = content.updated_at ? content.updated_at : content.created_at
        return <Airport_Aircraft_Blog_Page fields={content.fields} date={formattedDate} region={contentType} />;
    }
    else if (subOption === "cities") {
        if (usCanadaLocations.includes(location)) {
            contentType = 'usa_city_pages';
        } else if (internationalLocations.includes(location)) {
            contentType = '	international_city_pages';
        } else {
            return (
                <div className="p-6 max-w-4xl mx-auto text-center">
                    <h2 className="font-bold my-4">Page Not Found</h2>
                </div>
            );
        }
        const content: void | ContentData = await createClient()
            .getContentBySlug(
                `private-jet-charter-flights-to-${location}`,
                contentType
            )
            .catch((err) => {
                console.log(err);
            });
        console.log("subOption, Location, contentType----------------", subOption, location, contentType);

        if (!content) {
            return (
                <div className="p-6 max-w-4xl mx-auto text-center">
                    <h2 className="font-bold my-4">Page Not Found</h2>
                </div>
            )
        }
        return <CityPage fields={content.fields} region={contentType} />;
    } else if (subOption == "popular-routes") {
        const content: void | ContentData = await createClient()
            .getContentBySlug(
                `private-jet-charter-${location}`,
                'route_pages'
            )
            .catch((err) => {
                console.log(err);
            });
        // console.log("content", content);

        if (!content) {
            return notFound(); // navigate to a "not found" page if content is missing
        }

        return (
            <RoutesPage fields={content.fields} />
        );
    } else if (subOption === "empty-legs") {
        // Access the query parameters
        const content: void | ContentData = await createClient()
            // .getContentBySlug('empty-leg-flights-aspen', 'empty_leg_flights')
            .getContentBySlug(`empty-leg-flights-${location}`, "empty_leg_flights")
            .catch((err) => {
                console.log(err);
                notFound();
            });
        if (!content) {
            return notFound(); // navigate to a "not found" page if content is missing
        }
        return <EmptyLegPage fields={content.fields} />;
    } else {
        return (
            <div className="p-6 max-w-4xl mx-auto text-center">
                <h2 className="font-bold my-4">Page Not Found</h2>
            </div>
        );
    }
};

export default FlightPage;
