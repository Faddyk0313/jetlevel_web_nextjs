import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type PageProps = {
    sectionClass?: string;
    heading?: string;
    subHeading?: string;
};
const AvailableAircrafts = ({sectionClass,heading,subHeading}:PageProps) => {
    const jets = [
        {
            type: "Turbo Prop",
            name: "King Air 350",
            image: "/images/Turboprop.jpg",
            seats: 5,
            range: "1070 mi",
            speed: "250 mph",
            description: "King Air 90, King Air 200, Pilatus PC-12, King Air 250, King Air 350, Piaggio Avanti, Beechcraft 1900",
            price: "FROM $1,800"
        },
        {
            type: "Very Light Jet",
            name: "Phenom 100",
            image: "/images/Very-Light-Jet.jpg",
            seats: 4,
            range: "1100 mi",
            speed: "400 mph",
            description: "Citation Mustang, Eclipse 500, HondaJet, HondaJet Elite, Phenom 100, Phenom 100E, Vision Jet",
            price: "FROM $3,000"
        },
        {
            type: "Light Jets",
            name: "Citation CJ3",
            image: "/images/Light-Jet.jpg",
            seats: 6,
            range: "1700 mi",
            speed: "450 mph",
            description: "Citation CJ2, Citation CJ3, Citation Ultra, Hawker 400XP, Citation Encore, Nextant 400XTi",
            price: "FROM $4,000"
        },
        {
            type: "Midsize Jet",
            name: "Citation XLS",
            image: "/images/Mid-Size-Jet.jpg",
            seats: 6,
            range: "2100 mi",
            speed: "500 mph",
            description: "Citation Excel/XLS, Hawker 800XP, Hawker 900XP, Learjet 60, Citation Latitude, Gulfstream G150",
            price: "FROM $4,500"
        },
        {
            type: "Super Midsize Jet",
            name: "Citation X",
            image: "/images/Super-Mid-Size-Jet.jpg",
            seats: 8,
            range: "2800 mi",
            speed: "525 mph",
            description: "Challenger 300, Citation X, Gulfstream G200, Citation Longitude, Citation Sovereign, Falcon 2000",
            price: "FROM $6,000"
        },
        {
            type: "Heavy Jets",
            name: "Gulfstream GV",
            image: "/images/Heavy-Jet.jpg",
            seats: 8,
            range: "3000 mi",
            speed: "525 mph",
            description: "Global 5000, Gulfstream G500, Legacy 650, Gulfstream 450, Challenger 850, Falcon 900EX",
            price: "FROM $10,000"
        }
    ];
    return (
        <section className={`max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20 ${sectionClass}`}>
            <h2 className="text-center mb-2">{heading}</h2>
            <p className="text-center details leading-relaxed mb-8">{subHeading}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jets.map((jet, index) => (
                    <div key={index} className="border  rounded-lg overflow-hidden shadow-lg">
                        <div className='bg-cover bg-no-repeat bg-center h-56 flex justify-center items-end' style={{ backgroundImage: `url(${jet.image})` }}>
                            <div className=" text-white grid grid-cols-3  mb-2 gap-2 px-2">
                                <div className="text-center px-3 lg:px-2 xl:px-3 py-4 flex-1  bg-[#202b349d]">
                                    <h4 className="font-bold leading-tight">Seats</h4>
                                    <p className='text-sm'>{jet.seats}</p>
                                </div>
                                <div className="text-center py-4 flex-1  bg-[#202b349d]">
                                    <h4 className="font-bold leading-tight">Range</h4>
                                    <p className='text-sm'>{jet.range}</p>
                                </div>
                                <div className="text-center px-3 lg:px-2 xl:px-3 py-4 flex-1  bg-[#202b349d]">
                                    <h4 className="font-bold leading-tight">Speed</h4>
                                    <p className='text-sm'>{jet.speed}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 box-border bg-blue-background h-64 lg:h-[300px] xl:h-64 flex flex-col justify-between bg-cover bg-no-repeat">
                            <div>
                                <h3 className="text-white font-bold mb-4">{jet.type}</h3>
                                <p className="mb-3 font-bold text-white text-[16px]">{jet.name}</p>
                                <p className="mb-4 text-gray-300 text-base">{jet.description}</p>
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-center md:justify-start text-xs md:text-sm gap-3  '>
                                <Link href='/request-a-quote' className="text-white px-3 py-2 md:py-3 min-w-fit w-2/5  md:w-[35%] rounded-full bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 text-center text-xs sm:text-sm hover:shadow-card_shadow">GET A QUOTE &nbsp;→</Link>

                                <p className="text-white font-bold">{jet.price}<span className='text-gray-300'>/ Per Hour</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AvailableAircrafts

