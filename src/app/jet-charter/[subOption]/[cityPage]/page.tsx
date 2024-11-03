import CityPage from "@/components/CityPage";
import EmptyLegPage from "@/components/EmptyLegPage";
import { createClient } from "@/lib/contento";
import { ContentData } from "@gocontento/client";
import { notFound } from "next/navigation";
// import { EmptyLegFlightResponse, fetcher } from "@/lib/fetcher";
import { FC } from "react";


type PageProps = {
    params: {
        cityPage: string;
    };
};

const FlightPage: FC<PageProps>  = async({ params }: PageProps) => {
    const { cityPage } = params;

    // Access the query parameters
    const content:ContentData = await createClient()
    // .getContentBySlug('empty-leg-flights-aspen', 'empty_leg_flights')
    .getContentBySlug(`empty-leg-flights-${cityPage}`, 'empty_leg_flights')
    .catch((err) => {
      console.log(err)
      notFound()
    })
    console.log("-------------",content.fields)
    // Get content based on `cityPage`, with fallback for 404 content
    // const { title } = pageContent[cityPage] || {
    //     title: 'Page Not Found',
    // };

    // const router = useRouter();
    // const { subOption, destination } = router.query;
    // if (subOption === 'us-canada' || subOption === 'international') {
    //     return (
    //         <CityPage title={title} />
    //     );
    // }
    // else if (subOption === 'empty-legs') {
        return (
            <EmptyLegPage fields={content.fields}/>
        );
    // }
    // else {
    //     // Fallback layout for any other or undefined subOption
    //     return (
    //         < div className="p-6 max-w-4xl mx-auto text-center" >
    //             <h1 className="text-3xl font-bold my-4">Page Not Found</h1>
    //         </div >
    //     );
    // }
};

export default FlightPage;
