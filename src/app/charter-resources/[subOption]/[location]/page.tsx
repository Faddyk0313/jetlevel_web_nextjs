import AircraftPage from "@/components/AircraftPage";
import Airport_Aircraft_Blog_Page from "@/components/Airport_Aircraft_Blog_Page";
import { aircrafts, airports, blogs } from "@/components/Locations";
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

    if (subOption === 'private-jet-airports' || subOption == 'aircraft-types' || subOption == 'blogs') {
        let contentType;
        if (airports.includes(location)) {
            contentType = 'airport_pages';
        } else if (aircrafts.includes(location)) {
            contentType = 'aircraft_pages';
        } else if (blogs.includes(location)) {
            contentType = 'blogs';
        } else {
            return (
                <div className="p-6 max-w-4xl mx-auto text-center">
                    <h2 className="font-bold my-4">Page Not Found</h2>
                </div>
            );
        }

        if (contentType == 'airport_pages') subOption = 'usa-airport-directory';
        else if (contentType == 'aircraft_pages') subOption = 'aircraft-charters';
        else if (contentType == 'blogs') subOption = 'blog';
        

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
