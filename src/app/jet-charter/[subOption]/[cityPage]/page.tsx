// import { useRouter } from 'next/navigation';

type PageProps = {
    params: {
        subOption: string,
        cityPage: string;
    };
};

// Define page content based on `cityPage`
const pageContent: Record<string, { title: string; }> = {
    'aspen': { title: 'Flght to aspen' },
    'atlanta-ga': { title: 'Flght to Atlanta, GA' },
    'austin-tx': { title: 'Flght to Austin, TX' },
    'boston-ma': { title: 'Flght to Boston, MA' },
};

// This function generates static parameters for known paths
export async function generateStaticParams() {
    return Object.keys(pageContent).map((cityPage) => ({ cityPage }));
}

const CityPage = ({ params }: PageProps) => {
    const { cityPage } = params;
    const { subOption } = params;


    // Get content based on `cityPage`, with fallback for 404 content
    const { title } = pageContent[cityPage] || {
        title: 'Page Not Found',
        description: 'The page you are looking for does not exist.',
    };

    // const router = useRouter();
    // const { subOption, destination } = router.query;
    if (subOption === 'us-canada' || subOption === 'international') {
        return (
            <CityPage content={pageContent} />
        );
    }
    else if (subOption === 'empty-legs') {
        return (
            <EmptyLegPage content={pageContent} />
        );
    }
    else {
        // Fallback layout for any other or undefined subOption
        return (
            < div className="p-6 max-w-4xl mx-auto text-center" >
                <h1 className="text-3xl font-bold my-4">{title}</h1>
            </div >
        );
    }
};

export default CityPage;
