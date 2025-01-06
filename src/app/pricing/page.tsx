
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Table from '@/components/Table';
import Button from '@/components/Button';
import AvailableAircrafts from '@/sections/AvailableAircrafts';
import BrandNames from '@/sections/BrandNames';
import CompanyOverview from '@/sections/CompanyOverview';
import Hero from '@/sections/Hero';
import SmartTravelTools from '@/sections/SmartTravelTools';
import WhatOurClientsSay from '@/sections/WhatOurClientsSay';
import Image from 'next/image';
import React from 'react';
import PricingContent from '@/components/PricingContent';
import Link from 'next/link';

export const metadata = {
  title: "Cost of Chartering a Private Jet - Flights & Rates",
  description: "Explore the cost of chartering private jet flights, including breakdowns, factors, fees, and comparative analyses for informed decision-making.",
};


const Pricing = () => {


  const data = [
    {
      route: {
        arrival: 'Chicago',
        departure: 'Orlando'
      },
      price: '$13,800',
      type: 'LIGHT JET',
      seats: '6',
      time: '2h12'
    },
    {
      route: {
        arrival: 'San Francisco',
        departure: 'Miami'
      },
      price: '$46,500',
      type: 'SUPER MIDSIZE JET',
      seats: '8',
      time: '4h55'
    },
    {
      route: {
        arrival: 'Teterboro',
        departure: 'Van Nuys'
      },
      price: '$38,900',
      type: 'MID SIZE JET',
      seats: '7',
      time: '4h54'
    },
    {
      route: {
        arrival: 'Miami',
        departure: 'Nassau'
      },
      price: '$8,400',
      type: 'VERY LIGHT JET',
      seats: '5',
      time: '0h50'
    },
    {
      route: {
        arrival: 'New York',
        departure: 'West Palm Beach'
      },
      price: '$22,500',
      type: 'HEAVY JET',
      seats: '10',
      time: '1h58'
    },
    {
      route: {
        arrival: 'Seattle',
        departure: 'Las Vegas'
      },
      price: '$15,600',
      type: 'LIGHT JET',
      seats: '8',
      time: '1h39'
    },
    {
      route: {
        arrival: 'Chicago',
        departure: 'Fort Lauderdale'
      },
      price: '$16,250',
      type: 'LIGHT JET',
      seats: '6',
      time: '2h36'
    },
    {
      route: {
        arrival: 'Dallas',
        departure: 'Las Vegas'
      },
      price: '$16,750',
      type: 'MID SIZE JET',
      seats: '7',
      time: '2h06'
    },
    {
      route: {
        arrival: 'Austin',
        departure: 'Washington D.C.'
      },
      price: '$16,200',
      type: 'VERY LIGHT JET',
      seats: '5',
      time: '3h17'
    },
    {
      route: {
        arrival: 'Teterboro',
        departure: 'Opa-Locka'
      },
      price: '$23,820',
      type: 'HEAVY JET',
      seats: '10',
      time: '2h05'
    },
  ];
  let column = [
    {
      heading: 'Route',
      accessor: 'route',
      Cell: ({ row }: { row: Record<string, any>; }) =>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[20px]">
            <Image
              src="/images2/take-off.svg"
              width={100}
              height={100}
              alt="Plane"
              className="w-[40px]"
            />
            <p className="w-[100px] text-center max-[700px]:w-[137px]">{row.route.arrival}</p>
          </div>
          <div className="flex items-center gap-x-[20px]">
            <Image
              src="/images2/Landing.svg"
              width={100}
              height={100}
              alt="Plane"
              className="w-[40px]"
            />
            <p className="w-[100px] text-center">{row.route.departure}</p>
          </div>
        </div>
    },
    {
      heading: 'Price Est.',
      accessor: 'price',
    },
    {
      heading: 'Aircraft Type',
      accessor: 'type',
    },
    {
      heading: 'Seats',
      accessor: 'seats',
    },
    {
      heading: 'Flight Time',
      accessor: 'time',
    },
    {
      heading: '',
      accessor: '',
      Cell: ({ row }: { row: Record<string, any>; }) => <div className='relative font-bold text-black hover:text-white w-full h-full'>
        <Link href='/request-a-quote'><button className='w-full h-full group-hover:text-white'>Inquire</button></Link>
      </div>
    },
  ];


  const IconsItems = [
    {
      icon: 'Routes_DistanceCalculator',
      title: 'Breakdown',
      description: 'Itemized expenses of jet chartering.',
      bgcolor: 'white'
    },
    {
      icon: 'UsCanadaCities',
      title: 'Factors',
      description: 'Variables influencing flight costs.',
      bgcolor: 'white'
    },
    {
      icon: 'InternationalCities',
      title: 'Extras',
      description: 'Cost comparisons across different scenarios.',
      bgcolor: 'white'
    }, {
      icon: 'Aircraft',
      title: 'Considerations',
      description: 'Key pricing factors for informed choices.',
      bgcolor: 'white'
    }, {
      icon: 'Airports',
      title: 'Scenarios',
      description: 'Price variations by specific scenarios.',
      bgcolor: 'white'
    },
  ];
  return (
    <>
      <div>
        <Hero image={"/images/Private jet interior bg .webp"} title={"Cost of Chartering a Private Jet - Flights & Rates"} tagline={"Explore the cost of chartering a private jet flights, including breakdowns, factors, fees, and comparative analyses for informed decision-making"} hasCalculator={true} hasOverlay={false} />
        <BrandNames />
        <div className='px-5 md:px-10 lg:px-20 pb-0'>
          <Breadcrumb />
        </div>
        <CompanyOverview
          heading='How much does a private jet charter cost?'
          description={"The average cost of chartering a private jet ranges from about $1,800 to $14,000 per flying hour. The price varies based on the jet’s size and type. For example, smaller jets cost around $1,800 to $2,300 per hour, midsize jets range from $6,400 to $8,000 per hour, and larger jets are between $10,000 and $14,000 per hour. Renting a Gulfstream G650 plane costs about $10,000 per hour. For a 5-hour flight, it would be around $50,000. Plus, there are extra charges for landing at airports."}
          collapseText={false}
          IconsItems={IconsItems}
        />
        <AvailableAircrafts heading='Overview of Private Jet Charter Costs' subHeading='Jetlevel Aviation offers private flights on a wide range of aircraft categories. The aircraft types within each category vary by price, range, interior space, passenger capacity, and air speed.' />

        <section className='px-5 md:px-10 lg:px-20 pb-0'>
          <h2 className='text-center mb-4'>Popular Flights Routes & Estimates</h2>
          <div className='flex items-center justify-between bg-[#0071BA] text-white p-4 rounded-[20px_20px_0px_0px]'>
            <div>
              <h3>Popular Private Jet Charter Flights Routes</h3>
              <p>Dive into our exclusive collection of popular private jet charter routes.</p>
            </div>
            <Link href={'/request-a-quote'}>
              <Button
                text='Inquire Now'
                variant='primary'
              />
            </Link>

          </div>
          <Table
            data={data}
            column={column}
            button={true}
          />
        </section>

        <PricingContent>
          <SmartTravelTools />
          <WhatOurClientsSay />
        </PricingContent>
      </div>
    </>

  );
};

export default Pricing;