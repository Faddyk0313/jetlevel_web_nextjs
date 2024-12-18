import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Events from '@/components/Events';
import RequestQuoteBanner from '@/components/RequestQuoteBanner';
import TopCharteredCities from '@/components/TopCharteredCities';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UsaAirportPage = () => {
  const usaAirportList = [
    {
      name: 'Addison Airport (KADS)',
      key:'addison-airport-kads'
    },
    {
      name: 'Austin-Bergstrom International Airport (KAUS)',
      key:'austin-bergstrom-international-airport-kaus'
    },
    {
      name: 'Boston Logan International Airport (KBOS)',
      key:'boston-logan-international-airport-kbos'
    },
    {
      name: 'Centennial Airport (KAPA)',
      key:'centennial-airport-kapa'
    },
    {
      name: 'Charleston International Airport (KCHS)',
      key:'charleston-international-airport-kchs'
    },
    {
      name: 'Chicago Executive Airport (KPWK)',
      key:'chicago-executive-airport-kpwk'
    },
    {
      name: 'DeKalb-Peachtree Airport (KPDK)',
      key:'dekalb-peachtree-airport-kpdk'
    },
    {
      name: 'Dulles International Airport (KIAD)',
      key:'dulles-international-airport-kiad'
    },
    {
      name: 'King County International Airport (KBFI)',
      key:'king-county-international-airport-kbfi'
    },
    {
      name: 'Leonard Thompson Airport (MYAM)',
      key:'leonard-thompson-airport-myam'
    },
    {
      name: 'Miami-Opa Locka Executive Airport (KOPF)',
      key:'miami-opa-locka-executive-airport-kopf'
    },
    {
      name: 'Midland International Air & Space Port (KMAF)',
      key:'midland-international-air-space-port-kmaf'
    },
    {
      name: 'Naples Airport (KAPF)',
      key:'naples-airport-kapf'
    },
    {
      name: 'Orlando International Airport (KMCO)',
      key:'orlando-international-airport-kmco'
    },
    {
      name: 'Raleigh-Durham International Airport (KRDU)',
      key:'raleigh-durham-international-airport-krdu'
    },
    {
      name: 'Spirit of St Louis Airport (KSUS)',
      key:'spirit-of-st-louis-airport-ksus'
    },
    {
      name: 'St. Pete-Clearwater International Airport (KPIE)',
      key:'st-pete-clearwater-international-airport-kpie'
    },
    {
      name: 'Westchester County Airport (KHPN)',
      key:'westchester-county-airport-khpn'
    },
    {
      name: 'Will Rogers World Airport (KOKC)',
      key:'will-rogers-world-airport-kokc'
    },
    {
      name: 'Wiley Post Airport (KPWA)',
      key:'wiley-post-airport-kpwa'
    },
  ]
  return (
    <div>
      <Hero title="JetLevel Airport Directory Guide" description="JetLevel offers flights to and from almost anywhere in the world. Learn more about some of the airports we fly into with our airport directory guide below." image="https://jetlevel.com/wp-content/uploads/2022/11/Airport-Runway-Aerial-1.jpg" hasCalculator={false} />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className='min-w-full md:min-w-[72%]'>
          <Breadcrumb />
        </div>
      </section>
      <div className='bg-[#0071BA] flex flex-col justify-center gap-y-[20px] p-8'>
        <div className='px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto'>
          <h2 className='text-center text-white text-[30px]'>Select Your Airport</h2>
          <p className='text-center text-white mt-[40px] mb-[50px] text-sm'>Our services include designing customized air travel itineraries for each client and our advisors can help you to select a destination, aircraft, ground transportation, and hotel for your journey. Browse our airport directory guide below to learn more about some of the airports we fly into and the transportation and hotel options available.</p>
            <div className='flex justify-center'>
              <Image 
                src="https://jetlevel.com/wp-content/uploads/2022/12/image-background-airport.png" 
                alt="airports" 
                width={950} 
                height={300} 
              />
            </div>
        </div>
      </div>
      <section className="px-5 md:px-10 xl:px-20 py-7 mt-[40px] max-w-[1800px] mx-auto">
        <div className="flex flex-wrap">
          <div className="flex-1 text-center">
            {usaAirportList.slice(0, 10).map((airport) => (
              <div key={airport.key} className="mb-4">
                <Link href={`/usa-airport/${airport.key}`} className='hover:underline text-[#0071BA] text-lg'>
                  {airport.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex-1 text-center">
            {usaAirportList.slice(10, 20).map((airport) => (
              <div key={airport.key} className="mb-4">
                <Link href={`/usa-airport/${airport.key}`} className='hover:underline text-[#0071BA] text-lg'>
                  {airport.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RequestQuoteBanner />
    </div>
  );
};

export default UsaAirportPage;