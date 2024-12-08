import AircraftPage from "@/components/AircraftPage";
import Airport_Aircraft_Page from "@/components/Airport_Aircraft_Page";
import { aircrafts, airports } from "@/components/Locations";
import { createClient } from "@/lib/contento";
import { ContentData } from "@gocontento/client";

type PageProps = {
    params: {
        subOption: string;
        location: string;
    };
};

const ResourcesPage: React.FC<PageProps> = async ({ params }: PageProps) => {

    let { subOption, location } = params;
    
    if (subOption === 'private-jet-airports' || subOption == 'aircraft-types') {
        let contentType;
        if (airports.includes(location)) {
            contentType = 'airport_pages';
        } else if (aircrafts.includes(location)) {
            contentType = 'aircraft_pages';
        } else {
            return (
                <div className="p-6 max-w-4xl mx-auto text-center">
                    <h2 className="font-bold my-4">Page Not Found</h2>
                </div>
            );
        }

        if(contentType == 'airport_pages') subOption = 'usa-airport-directory'
        else if(contentType == 'aircraft_pages') subOption = 'aircraft-charters'

        const content: void | ContentData = await createClient()
            .getContentBySlug(
                `${location}`,
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
            ) 
        }
        return <Airport_Aircraft_Page fields={content.fields} region={contentType} />;
    } else if (subOption === 'cost-estimator') {
        return (
            <div className="p-6 max-w-4xl mx-auto text-center">
                <h2 className="font-bold my-4">cost-estimator</h2>
            </div>
        );
    } else if (subOption === 'flight-tracker') {
        return (
            <div className="p-6 max-w-4xl mx-auto text-center">
                <h2 className="font-bold my-4">flight-tracker</h2>
            </div>
        );
    } else if (subOption === 'distance-calculators') {
        return (
            <div className="p-6 max-w-4xl mx-auto text-center">
                <h2 className="font-bold my-4">distance-calculators</h2>
            </div>
        );
    } else {
        return (
            <div className="p-6 max-w-4xl mx-auto text-center">
                <h2 className="font-bold my-4">Page Not Found</h2>
            </div>
        );
    }
};

export default ResourcesPage;
