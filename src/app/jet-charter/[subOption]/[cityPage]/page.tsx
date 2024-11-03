import CityPage from "@/components/CityPage";
import EmptyLegPage from "@/components/EmptyLegPage";
import { EmptyLegFlightResponse, fetcher } from "@/lib/fetcher";
import { FC } from "react";





interface PageProps {
    searchParams: { id?: string };
  }
const FlightPage: FC<PageProps>  = async({searchParams}) => {
    // const { cityPage, subOption } = params;

    const id = searchParams.id;
    console.log("id: " + id);
    // Access the query parameters
    const {fields} = await fetcher<EmptyLegFlightResponse>(`https://app.contento.io/api/v1/content/${id}`,{
        headers:{
        "Authorization": "Bearer 0IH1nNoitk9HWNDvj5esoDJRDQlg8IHCVuOxHTpb1792712e",
        "X-CONTENTO-SITE": "s_01JA0hQj1BcayHdvz8pvEM0GH0"
        }
    });
    
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
            <EmptyLegPage fields={fields}/>
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
