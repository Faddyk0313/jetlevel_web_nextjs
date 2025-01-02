import Link from 'next/link';
import React from 'react';
import Button from '@/components/Button';

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
        <div className="bg-white flex flex-col  shadow-card_shadow rounded-md pb-3 justify-start">
            <div className="bg-blue-background bg-cover text-white text-center rounded-t-md py-4">
                <h3 className='pb-1'>
                    Top <span className='text-white'>{title == 'usa_city_pages' ? "US" : title == 'International' ? "International" : title == 'Routes' ? "Routes" : title == 'Empty Leg' ? "Empty Leg" : title == 'Airports For' ? "Airports For" : ""}</span>
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
                    <Button
                        text='View All Chartered Cities'
                        variant='primary'
                    />
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default TopCharteredCities;
