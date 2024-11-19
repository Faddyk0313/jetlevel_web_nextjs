import Link from 'next/link';
import React from 'react';

type City = {
    name: string;
    link: string;
};

interface TopCharteredCitiesProps {
    title: string;
    cities: City[];
    buttonLink: string;
}

const TopCharteredCities: React.FC<TopCharteredCitiesProps> = ({ title, cities, buttonLink }) => {
    return (
        <div className="bg-white flex flex-col justify-center shadow-card-shadow mx-3 mt-16 pb-3">
            <div className="bg-blue-background bg-cover text-white text-center py-4">
                <h3 className='pb-1'>
                    Top <span>{title}</span>
                </h3>
                <h3>Chartered Cities</h3>
            </div>
            <div className='px-1'>
                <div className="px- text-center text-gray-700">
                    <div className="grid grid-cols-2 gap-y-5 gap-x-2 py-5 px-3 justify-center">
                        {cities.map((city, index) => (
                            <Link key={index} className='text-xs hover:text-blue' href={city.link}>
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-center px-1 xl:px-5">
                    <Link href={buttonLink} className='text-sm'>
                        <button className="text-white py-3 px-2 w-full rounded-lg  bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1">View All Chartered Cities</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default TopCharteredCities;
