import React from 'react'
import AirportPage from './AirportPage';
import AircraftPage from './AircraftPage';
interface Props {
    fields: any; // Replace `any` with the actual type of `fields` if known
    region: string;
}

const Airport_Aircraft_Page = ({ fields, region }: Props)=> {
        if(region == 'airport_pages') return <AirportPage fields={fields}  />;
        else if(region == 'aircraft_pages') return <AircraftPage fields={fields}  />;
}

export default Airport_Aircraft_Page
