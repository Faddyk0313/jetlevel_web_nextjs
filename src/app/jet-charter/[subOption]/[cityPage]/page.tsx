import CityPage from "@/components/CityPage";
import EmptyLegPage from "@/components/EmptyLegPage";

type PageProps = {
    params: {
        subOption: string,
        cityPage: string;
    };
};

// Define page content based on `cityPage`
const pageContent: Record<string, { title: string; }> = {
    'aspen': { title: 'Aspen' },
    'addison-tx': { title: 'Addison, TX' },
    'boston-ma': { title: 'Boston, MA' },
};

/* Explanation of generateStaticParams

export async function generateStaticParams() {
    return Object.keys(pageContent).map((cityPage) => ({ cityPage }));
}

    Purpose:
        This function is used to generate a list of static parameters for dynamic routes. When you return values from generateStaticParams, Next.js will use those values to statically generate pages for each specified parameter combination.

    Implementation:
        pageContent is an object that contains specific data for each city.
        Object.keys(pageContent) retrieves an array of keys in pageContent (e.g., ['aspen', 'atlanta-ga', 'austin-tx']).
        .map((cityPage) => ({ cityPage })) then maps over each key to create an object with a cityPage property (e.g., { cityPage: 'aspen' }), so the function returns an array of objects like [{ cityPage: 'aspen' }, { cityPage: 'atlanta-ga' }, ...].

    Generated Output:
        The output from generateStaticParams lets Next.js know that it should statically generate pages at build time for each cityPage value in pageContent.
*/
export async function generateStaticParams() {
    return Object.keys(pageContent).map((cityPage) => ({ cityPage }));
}

const FlightPage = ({ params }: PageProps) => {
    const { cityPage, subOption } = params;

    // Get content based on `cityPage`, with fallback for 404 content
    const { title } = pageContent[cityPage] || {
        title: 'Page Not Found',
    };

    // const router = useRouter();
    // const { subOption, destination } = router.query;
    if (subOption === 'us-canada' || subOption === 'international') {
        return (
            <CityPage title={title} />
        );
    }
    else if (subOption === 'empty-legs') {
        return (
            <EmptyLegPage/>
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
