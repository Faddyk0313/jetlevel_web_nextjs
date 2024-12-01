import AirportPage from "@/components/AirportPage";
import { createClient } from "@/lib/contento";
import { ContentData } from "@gocontento/client";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        subOption: string;
        location: string;
    };
};

const ResourcesPage: React.FC<PageProps> = async ({ params }: PageProps) => {
    const { subOption, location } = params;
    if (subOption === 'private-jet-airports') {
        const content: void | ContentData = await createClient()
            .getContentBySlug(`${location}`, 'airport_pages')
            .catch((err) => {
                console.log(err);
            });

        if (!content) {
            return notFound(); // navigate to a "not found" page if content is missing
        }
        return <AirportPage fields={content.fields} />;
    } else if (subOption == 'aircraft-types') {
        return (
            <div className="p-6 max-w-4xl mx-auto text-center">
                <h2 className="font-bold my-4">aircraft-types</h2>
            </div>
        );
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
