import Image from 'next/image';
import React from 'react';

const WhatOurClientsSay = () => {
    const testimonials = [
        {
            text: "We had an amazing experience with JetLevel! Ricky was very accommodating and prompt in responding. The jets were clean and right on time for our flight. There was a car waiting for us when we landed - I can't believe everything was settled having had so few calls with the company. They took care of everything. If time is always critical then these guys are perfect for you. They never disappoint!",
            client: "Private Client",
            location: "Florida"
        },
        {
            text: "I got together with some of my college friends for a bachelorette party in Hawaii. We decided to go with JetLevel and WOW - what a great experience!! It made such an impact on the whole trip; Hawaii is beautiful but that flight and jet lag can be brutal. Even though it was our first time booking a charter flight, working with Ricky's team was a smooth process from start to finish. We can't recommend them highly enough!",
            client: "Private Client",
            location: "Hawaii"
        },
        {
            text: "When chartering, I always consider speed and comfort. We chartered a Bombardier Global 6000 for a corporate flight from New York to Paris and it was perfect - that ultimate private jet experience you look for and rely on. Unmatched reliability and personalized service from Ricky and Brendan; met all of our expectations and then some! We'll be back guys!",
            client: "Private Client",
            location: "Paris"
        },
        {
            text: "I highly recommend JetLevel. Everyone is professional and highly responsive. I got the best quote going to New York for a quick business trip. We had a smooth transaction because the staff are knowledgeable and accurate. I was flying less than an hour after my call. What an awesome crew!",
            client: "Private Client",
            location: "New York"
        } 
    ];
    return (
        <section className="relative flex flex-col items-center sectionHeight justify-center">
            <img src='https://jetlevel.com/wp-content/uploads/2021/01/In-Flight-Productivity.jpg' alt='Background' className='w-full h-full object-cover absolute z-0' />
            <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-0"></div>
            <div className='max-w-[1800px] mx-auto z-10 px-5 md:px-10 lg:px-20'>
                <h2 className="text-center text-white pb-7">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col justify-between bg-white bg-opacity-10 backdrop-blur-lg text-white p-4 rounded-lg border-2 border-blue-500">
                            <p className="mb-4">{testimonial.text}</p>
                            <div>
                                <p>{testimonial.client}</p>
                                <p>{testimonial.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatOurClientsSay;
