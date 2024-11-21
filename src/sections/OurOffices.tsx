import React from 'react';
import { OurOfficesSvg } from '@/svg';

const OurOffices = () => {
    return (
        <section className="bg-cover bg-center h-screen max-h-[900px] overflow-hidden bg-ourOffices-background overlay p-0 flex items-center">
            <div className="max-w-[1800px] w-full mx-auto px-5 md:px-32  flex flex-col text-white justify-center">
                <h2 className="mb-4 text-white">Our Offices</h2>
                <div className='flex flex-col items-center md:flex-row gap-10 md:gap-14'>
                    <div className='lg:w-1/2'>
                        <div className="flex justify-center items-center mb-4 bg-blue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
                            <OurOfficesSvg />
                        </div>
                        <h3 className="font-bold">Orlando</h3>
                        <p className="mt-3">
                            <a href="https://maps.app.goo.gl/vwTsaBof4HV6fryJ9" className='hover:text-blue transition-all duration-100'>3505 Lake Lynda Dr #200, Orlando, FL 32817</a><br />
                            <a href="tel:+18555385383" className='hover:text-blue transition-all duration-100'>(855) 538-5383</a>
                        </p>
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="flex justify-center items-center mb-4 bg-blue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
                            <OurOfficesSvg />
                        </div>
                        <h3 className="font-bold">Ocala</h3>
                        <p className="mt-3">
                            <a href="https://maps.app.goo.gl/VuP6Mmjdao4Jo1jEA" className='hover:text-blue transition-all duration-100'>1770 SW 60th Ave Suite 201, Ocala, FL 34474</a>
                            <br />
                            <a href="tel:+18555385383" className='hover:text-blue transition-all duration-100'>(855) 538-5383</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurOffices;
