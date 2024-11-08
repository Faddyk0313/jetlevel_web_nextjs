import React from 'react';
import { OurOfficesSvg } from '@/svg';

const OurOffices = () => {
    return (
        <section className="bg-cover bg-center h-screen max-h-[900px] overflow-hidden bg-ourOffices-background overlay p-0 flex items-center">
                <div className="max-w-[1800px] w-full mx-auto px-5 md:px-32  flex flex-col text-white justify-center">
                    <h2 className="mb-4">Our Offices</h2>
                    <div className='flex flex-col items-center md:flex-row gap-10 md:gap-14'>
                        <div className='lg:w-1/2'>
                            <div className="flex justify-center items-center mb-4 bg-darkBlue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
                                <OurOfficesSvg />
                            </div>
                            <h3 className="font-bold">Orlando</h3>
                            <p className="mt-3">
                                3505 Lake Lynda Dr #200, Orlando, FL 32817<br />
                                (855) 538-5383
                            </p>
                        </div>
                        <div className='lg:w-1/2'>
                            <div className="flex justify-center items-center mb-4 bg-darkBlue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
                                <OurOfficesSvg />
                            </div>
                            <h3 className="font-bold">Ocala</h3>
                            <p className="mt-3">
                                1770 SW 60th Ave Suite 201, Ocala, FL 34474<br />
                                (855) 538-5383
                            </p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default OurOffices;
