
import CityPage from "@/components/CityPage";
import EmptyLegPage from "@/components/EmptyLegPage";
import { internationalLocations, usCanadaLocations } from "@/components/Locations";
import RoutesPage from "@/components/RoutesPage";
import { createClient } from "@/lib/contento";
import { ContentData } from "@gocontento/client";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        subOption: string;
        cityPage: string;
    };
};

const FlightPage: React.FC<PageProps> = async ({ params }: PageProps) => {
    const { subOption, cityPage } = params;

    if (subOption === "cities") {
        let contentType;
        if (usCanadaLocations.includes(cityPage)) {
            contentType = 'usa_city_pages';
        } else if (internationalLocations.includes(cityPage)) {
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
                `private-jet-charter-flights-to-${cityPage}`,
                contentType
            )
            .catch((err) => {
                console.log(err);
            });
        // console.log("content", content);

        if (!content) {
            return notFound(); // navigate to a "not found" page if content is missing
        }
        return <CityPage fields={content.fields} region={contentType}/>;
    } else if (subOption == "popular-routes") {
        return (
            // <RoutesPage fields={content.fields} />
            <RoutesPage />
        );
    } else if (subOption === "empty-legs") {
        // Access the query parameters
        const content: void | ContentData = await createClient()
            // .getContentBySlug('empty-leg-flights-aspen', 'empty_leg_flights')
            .getContentBySlug(`empty-leg-flights-${cityPage}`, "empty_leg_flights")
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
