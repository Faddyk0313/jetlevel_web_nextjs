import React from 'react';
import AirportPage from './AirportPage';
import AircraftPage from './AircraftPage';
import BlogPage from './BlogPage';
interface Props {
    fields: any; // Replace `any` with the actual type of `fields` if known
    date?: string;
    region: string;
}

const Airport_Aircraft_Blog_Page = ({ fields, date, region }: Props) => {

    if (region == 'airport_pages') return <AirportPage fields={fields} />;
    else if (region == 'aircraft_pages') return <AircraftPage fields={fields} />;
    else if (region == 'blogs' && date) return <BlogPage fields={fields} date={date} />;
};

export default Airport_Aircraft_Blog_Page;
