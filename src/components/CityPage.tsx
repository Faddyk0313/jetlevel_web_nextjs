import React from 'react';

type CityPage = {
    content: Record<string, { title: string; }>;
};

const CityPage: React.FC<CityPage> = ({ content }) => {
    return (
        < div className="p-6 max-w-4xl mx-auto text-center" >
            <h1 className="text-3xl font-bold my-4">{}</h1>
        </div >
    );
};

export default CityPage;
