import Image from 'next/image';
import React from 'react';

const AvailableAircrafts = () => {
    const jets = [
        {
            type: "Turbo Prop",
            name: "King Air 350",
            image: "/images/Turboprop.jpg",
            seats: 8,
            range: "2040 mi",
            speed: "310 mph",
            description: "King Air 90, King Air 200, Pilatus PC-12, King Air 250, King Air 350, Piaggio Avanti, Beechcraft 1900",
            price: "FROM $1,800"
        },
        {
            type: "Light Jets",
            name: "Honda Jet",
            image: "/images/Light-Jet.jpg",
            seats: 8,
            range: "2040 mi",
            speed: "478 mph",
            description: "Citation CJ2, Citation CJ3, Citation Ultra, Hawker 400XP, Citation Encore, Nextant 400XTi",
            price: "FROM $4,000"
        },
        {
            type: "Midsize Jet",
            name: "Citation XLS",
            image: "/images/Mid-Size-Jet.jpg",
            seats: 8,
            range: "2040 mi",
            speed: "478 mph",
            description: "Citation Excel/XLS, Hawker 800XP, Hawker 900XP, Learjet 60, Citation Latitude, Gulfstream G150",
            price: "FROM $4,500"
        },
        {
            type: "Super Midsize Jet",
            name: "Citation X",
            image: "/images/Super-Mid-Size-Jet.jpg",
            seats: 8,
            range: "2040 mi",
            speed: "478 mph",
            description: "Challenger 300, Citation X, Gulfstream G200, Citation Longitude, Citation Sovereign, Falcon 2000",
            price: "FROM $6,000"
        },
        {
            type: "Heavy Jets",
            name: "Gulfstream GV",
            image: "/images/Heavy-Jet.jpg",
            seats: 8,
            range: "2040 mi",
            speed: "478 mph",
            description: "Global 5000, Gulfstream G500, Legacy 650, Gulfstream 450, Challenger 850, Falcon 900EX",
            price: "FROM $10,000"
        },
        {
            type: "Very Light Jet",
            name: "Phenom 100",
            image: "/images/Very-Light-Jet.jpg",
            seats: 8,
            range: "2040 mi",
            speed: "478 mph",
            description: "Citation Mustang, Eclipse 500, HondaJet, HondaJet Elite, Phenom 100, Phenom 100E, Vision Jet",
            price: "FROM $3,000"
        }
    ];
    return (
        <section className="max-w-[1800px] mx-auto px-5">
            <h2 className="text-center mb-2">Available Private Jets</h2>
            <p className="text-center details mb-8">We Offer Hundreds of Private Jets to Choose from in various Jet Sizes, Explore some of them below.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jets.map((jet, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <div className='h-56 max-h-56'>
                            <img src={jet.image} alt={`${jet.type} - ${jet.name}`} className="w-full h-full object-cover" />
                            <div className=" text-white flex justify-center -mt-[85px] mb-2 gap-5">
                                <div className="text-center p-4 bg-[#202b349d]">
                                    <h4 className="font-bold leading-tight">Seats</h4>
                                    <p className='text-sm'>{jet.seats}</p>
                                </div>
                                <div className="text-center p-4 bg-[#202b349d]">
                                    <h4 className="font-bold leading-tight">Range</h4>
                                    <p className='text-sm'>{jet.range}</p>
                                </div>
                                <div className="text-center p-4 bg-[#202b349d]">
                                    <h4 className="font-bold leading-tight">Speed</h4>
                                    <p className='text-sm'>{jet.speed}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 h-full bg-blue-background bg-cover bg-no-repeat">
                            <h3 className="text-white font-bold mb-4">{jet.type}</h3>
                            <p className="mb-3 font-bold text-white">{jet.name}</p>
                            <p className="mb-4 text-gray-300">{jet.description}</p>
                            <div className='flex flex-col md:flex-row items-center justify-center md:justify-start text-xs md:text-sm gap-2'>
                                <button className="text-white font-bold px-3 py-2 md:py-3 min-w-fit w-2/5  md:w-[35%] rounded-full md:rounded-xl bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1">GET A QUOTE →</button>
                                <p className="mt-2 text-white font-bold">{jet.price}<span className='text-gray-300'>/ Per Hour</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AvailableAircrafts

