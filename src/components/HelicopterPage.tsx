"use client";

import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React, { useState } from 'react';
import Image from 'next/image';
import Collapsible from '@/components/Collapsible'
import Table from './Table';
import HalfSection from './HalfSection';

const OnDemandCharterPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

 // Helicopter table data
const tableDataHelicopter = [
  {
    aircraftType: 'Sikorsky S-76 C+',
    passengers: '6',
    rates: '$21,000',
  },
  {
    aircraftType: 'Eurocopter AS355',
    passengers: '5',
    rates: '$6,000',
  },
  {
    aircraftType: 'Agusta A 109E',
    passengers: '6',
    rates: '$3,687',
  },
  {
    aircraftType: 'Airbus AS350 B3',
    passengers: '5',
    rates: '$2,875',
  },
];

// Helicopter table columns
const tableColumnsHelicopter = [
  {
    heading: 'Aircraft Type',
    accessor: 'aircraftType',
  },
  {
    heading: 'Passengers',
    accessor: 'passengers',
  },
  {
    heading: 'Ballpark Hourly Rate',
    accessor: 'rates',
  },
];

  
const faqDataHelicopter = [
  {
    question: "How many people can a private helicopter accommodate?",
    answer:
      "The seating capacity in a private helicopter can range from 2 to 8 passengers, depending on the model and configuration. Our team at JetLevel Aviation can guide you to choose the right helicopter based on your specific needs.",
  },
  {
    question: "How far can a private helicopter fly?",
    answer:
      "The range of a private helicopter varies based on the model, but typically, helicopters can fly up to 300-400 miles without refueling. Please reach out to our team to discuss your specific travel distance requirements.",
  },
  {
    question: "Is a Helicopter Charter Flight safe?",
    answer:
      "Absolutely. JetLevel Aviation only works with operators who meet the highest safety standards. The helicopters are regularly maintained, and the pilots are experienced professionals with significant flight hours.",
  },
  {
    question: "Can I book a helicopter charter for special occasions or events?",
    answer:
      "Yes, helicopter charter flights can add a unique touch to special occasions such as proposals, birthdays, or corporate events. Reach out to our team to discuss how we can tailor the experience to your specific needs.",
  },
  {
    question: "How much does a Helicopter Charter Flight cost?",
    answer:
      "The cost of a Helicopter Charter Flight depends on various factors like distance, duration, and the type of helicopter. For a detailed quote tailored to your specific requirements, please contact our team. We’re committed to providing transparent pricing and exceptional value.",
  },
];

  return (
    <div>
      <Hero title="Helicopter Charter Flight Services"  image="/images/Helicopter Hero.jpg" hasOverlay={true} hasCalculator={true} />
      <BrandNames />
      <HalfSection showBottomContent={true}>
      <div className='flex flex-col justify-center gap-y-[20px] pt-8'>
        <div className='max-w-[1800px] mx-auto w-full'>
        <Collapsible
          key={1}
          question="About"
          answer={
            <div className="mb-8">
              <div className="flex flex-wrap justify-between">
                <div className="w-[60%] max-[700px]:w-full">
                  <p className="leading-7 text-[16px] text-[#727982] mb-4">
                  When time is of the essence or when you’re simply looking for an unforgettable aerial experience, a Private Helicopter Charter Flight can offer unparalleled advantages. Ideal for short regional hops, local travel, or breath-taking sightseeing tours, helicopter charters offer the epitome of convenience and luxury.</p>
                  <p className="leading-7 text-[16px] text-[#727982] mb-4">
                  At JetLevel Aviation, we specialize in arranging world-class helicopter services, working exclusively with accredited and reputable operators across major cities worldwide. Whether you’re looking to bypass the traffic for a crucial business meeting or planning a romantic sunset tour of the city, our team stands ready to curate the perfect helicopter charter flight experience for you.
                  </p>
                </div>
                <div className="w-[35%] max-[700px]:w-full max-[700px]:mb-6">
                  <Image
                    src="/images/helicopter image.avif"
                    alt="Private Jet"
                    width={500}
                    height={250}
                    layout="responsive"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="leading-7 text-[16px] text-[#727982] mb-4">
                Rest assured, your safety is our priority. Our experienced team ensures rigorous aircraft maintenance and inspections for a peaceful journey. Welcome to JetLevel Aviation, where we blend luxury, convenience, and security to provide an exceptional travel experience tailored just for you.
              </p>
            </div>
          }
          isOpen={openIndex === 1}
          onClick={() => handleToggle(1)}
        />

<Collapsible
  key={2}
  question="Private Helicopter Charter Specialties"
  answer={
    <div className="mb-8">
      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        Our offerings go beyond conventional services, featuring unique experiences and specialized capabilities including:
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Helipad Pick Up and Drop Off –</span> Enjoy unmatched convenience with our helipad services, enabling you to depart and arrive right in the heart of your city.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Remote Location Pick Up and Drop Off –</span> Broaden your horizons and reach remote locations inaccessible by other means, perfect for explorations or expeditions.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Cargo Transport –</span> Benefit from swift and secure transportation of crucial cargo, ensuring your deliveries arrive on time, every time.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Sikorsky Helicopter Charter in the Northeast –</span> Experience the power and luxury of the Sikorsky helicopter, an industry leader renowned for its spacious interiors and unparalleled reliability.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Sightseeing Helicopter Tours –</span> Discover new perspectives of your favorite cities with our sightseeing helicopter tours, promising an unforgettable aerial experience.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Aerial Land Surveying –</span> Utilize our helicopter services for efficient and accurate aerial land surveys, an invaluable tool for real estate developers, architects, or environmental scientists.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        To get started on your next Helicopter Charter Flight, contact us today. Our experienced agents are standing by, ready to assist with booking and answering any questions you may have.
      </p>
    </div>
  }
  isOpen={openIndex === 2}
  onClick={() => handleToggle(2)}
/>

<Collapsible
  key={3}
  question="The Advantages of Choosing a Helicopter Charter Flight"
  answer={
    <div className="mb-8">
      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        Helicopter charter flights offer several key advantages over other forms of travel. Here, we delve into the reasons why you might want to choose a helicopter charter for your next journey.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Flexibility –</span> Helicopters can land in and take off from much more varied locations compared to planes, which often need runways. This allows you to reach remote areas or avoid traffic in urban locales.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Speed –</span> Helicopters can fly direct routes and avoid the traffic and congestion on the ground, getting you to your destination much faster.
      </p>

      <p className="leading-7 text-[16px] text-[#727982] mb-8">
        <span>Experience –</span> Nothing matches the unique thrill of taking off vertically, or the fantastic views you can enjoy from a helicopter.
      </p>
    </div>
  }
  isOpen={openIndex === 3}
  onClick={() => handleToggle(3)}
/>

<Collapsible
              key={4}
              question="Safety and Maintenance Standards "
              answer={
                <div className="mb-8">
                  <p className="mb-8 leading-7 text-[16px] text-[#727982] ">At JetLevel Aviation, we prioritize safety above all else. We ensure that all our partner operators meet the highest safety and maintenance standards. We also make sure the helicopter pilots are experienced professionals with significant flight hours under their belts.</p>
                </div>
              }
              isOpen={openIndex === 4}
              onClick={() => handleToggle(4)}
            />

<Collapsible
              key={5}
              question="Events and Special Occasions"
              answer={
                <div className="mb-8">
                  <p className="mb-8 leading-7 text-[16px] text-[#727982] ">Helicopter charter flights aren’t just for travel – they can also add a unique touch to special events. Whether you’re considering a helicopter flight for a surprise proposal, a birthday gift, aerial surveying, or to wow your clients, we can tailor the experience to match your specific needs.</p>
                </div>
              }
              isOpen={openIndex === 5}
              onClick={() => handleToggle(5)}
            />

<Collapsible
  key={6}
  question="Helicopter Charter Cost Per Hour"
  answer={
    <div className="mb-8">
      <p className="leading-7 text-[16px] text-[#727982] mb-10">
        Understanding the cost of a helicopter charter flight is crucial when planning your journey.
        Costs can vary based on distance, flight duration, and the type of helicopter used. 
        We provide transparent pricing and can offer packages to suit different budgets and requirements.
      </p>
      <Table column={tableColumnsHelicopter} data={tableDataHelicopter} button={false} />

      <p className="leading-7 text-[16px] text-[#727982] mt-10">
        We invite you to reach out to our team for a detailed quote or to learn more about our 
        Helicopter Charter Flight services. Our experienced agents are standing by 24/7 to 
        provide you with the assistance you need.
      </p>
    </div>
  }
  isOpen={openIndex === 6}
  onClick={() => handleToggle(6)}
/>

          <Collapsible
            key={12}
            question="Frequently Asked Questions about Instant Quotes"
            answer={
              <div className='mb-8'>
              <div className='mb-8'>
              {
                faqDataHelicopter.map((faq,index) => (
                  <div key={index} className='pb-6'>
                    <h3 className='font-bold text-gray-900'>{faq.question}</h3>
                    <p className='text-gray-700 leading-7 mt-1'>{faq.answer}</p>
                  </div>
                ))
              }
              </div>
            </div>
            }
            isOpen={openIndex === 12}
            onClick={() => handleToggle(12)}
          />
        </div>
      </div>
      </HalfSection>
    </div>
  );
};

export default OnDemandCharterPage;