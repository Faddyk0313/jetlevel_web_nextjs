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
    if (subOption === 'us-canada'){
        return (
            <CityPage />
        );
    }
    else if (subOption === 'empty-legs') {
        // Access the query parameters
        const content: ContentData = await createClient()
            // .getContentBySlug('empty-leg-flights-aspen', 'empty_leg_flights')
            .getContentBySlug(`empty-leg-flights-${cityPage}`, 'empty_leg_flights')
            .catch((err) => {
                // console.log(err);
                notFound();
            });
        // console.log("-------------", content.fields);
        return (
            <EmptyLegPage fields={content.fields} />
        );
    }
    else {
        // Fallback layout for any other or undefined subOption
        return (
            < div className="p-6 max-w-4xl mx-auto text-center" >
                <h1 className="text-3xl font-bold my-4">Page Not Found</h1>
            </div >
        );
    }
};

export default FlightPage;
