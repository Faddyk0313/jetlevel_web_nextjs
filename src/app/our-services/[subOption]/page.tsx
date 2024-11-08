type PageProps = {
    params: {
      subOption: string;
    };
  }; 
  
  // Define page content based on `subOption`
  const pageContent: Record<string, { title: string}> = {
    'on-demand-charter': { title: 'On-Demand Charter'},
    'group-charter': { title: 'Group Charter'},
    'air-ambulance': { title: 'Air Ambulance'},
    'helicopter': { title: 'Helicopter'},
  };
  
  // This function generates static parameters for known paths
  export async function generateStaticParams() {
    return Object.keys(pageContent).map((subOption) => ({ subOption }));
  }
  
  const OurServices = ({ params }: PageProps) => {
    const { subOption } = params;
  
    // Get content based on `subOption`, with fallback for 404 content
    const { title } = pageContent[subOption] || {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
    };
  
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="font-bold my-4">{title}</h1>
      </div>
    );
  };
  
  export default OurServices;
  