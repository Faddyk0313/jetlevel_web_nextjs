import CityPage from "@/components/CityPage";
import EmptyLegPage from "@/components/EmptyLegPage";
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

    // if (subOption === 'us-canada' || subOption === 'international') {
    if (subOption === 'us-canada') {
        const content: void | ContentData = await createClient()
            // .getContentById("c_01jBV38cd9sWaJ3agMZP1b0xqx")
            .getContentBySlug(`private-jet-charter-flights-to-${cityPage}`, 'usa_city_pages')
            .catch((err) => {
                console.log(err);
            });

        if (!content) {
            return notFound(); // navigate to a "not found" page if content is missing
        }
        return <CityPage fields={content.fields} />;
    }
    else if (subOption === 'empty-legs') {
        // Access the query parameters
        const content: void | ContentData = await createClient()
            .getContentBySlug(`empty-leg-flights-${cityPage}`, 'empty_leg_flights')
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
                <h1 className="text-3xl font-bold my-4">Page Not Found</h1>
            </div>
        );
    }
};

export default FlightPage;
