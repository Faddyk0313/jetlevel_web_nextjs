import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HalfSection from './HalfSection';

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
      <Hero title="JetLevel Airport Directory Guide" description="JetLevel offers flights to and from almost anywhere in the world. Learn more about some of the airports we fly into with our airport directory guide below." image="/images2/Airport-Runway-Aerial-1.jpg" hasCalculator={false} />
      <BrandNames />
      <HalfSection showBottomContent={true}>
      <div className='flex flex-col justify-center gap-y-[20px] mt-8'>
        <div>
          <h2 className='text-start'>Select Your Airport</h2>
          <p className='mb-[50px]'>Our services include designing customized air travel itineraries for each client and our advisors can help you to select a destination, aircraft, ground transportation, and hotel for your journey. Browse our airport directory guide below to learn more about some of the airports we fly into and the transportation and hotel options available.</p>
            <div className='bg-[#0071BA] flex justify-center relative h-full p-6 rounded-md'>
              <Image 
                src="/images/airports-background-image.png" 
                alt="airports" 
                width={950} 
                height={300} 
                className='w-[900px] h-full'
              />
              <Link href={'/king-county-international-airport-kbfi'} className='max-[700px]:hidden absolute top-[6px] left-[24%] w-[80px] h-[40px]'></Link>
              <Link href={'/centennial-airport-kapa/'} className='max-[700px]:hidden absolute top-[40%] left-[38%] w-[80px] h-[40px]'></Link>
              <Link href={'/will-rogers-world-airport-kokc/'} className='max-[700px]:hidden absolute top-[56%] left-[45%] w-[80px] h-[40px]'></Link>
              <Link href={'/wiley-post-airport-kpwa'} className='max-[700px]:hidden absolute top-[56%] left-[52%] w-[80px] h-[40px]'></Link>
              <Link href={'/midland-international-air-space-port-kmaf/'} className='max-[700px]:hidden absolute top-[68%] left-[41%] w-[80px] h-[40px]'></Link>
              <Link href={'/addison-airport-kads/'} className='max-[700px]:hidden absolute top-[66%] left-[51%] w-[80px] h-[40px]'></Link>
              <Link href={'/austin-bergstrom-international-airport-kaus/'} className='max-[700px]:hidden absolute top-[75%] left-[50%] w-[80px] h-[40px]'></Link>
              <Link href={'/spirit-of-st-louis-airport-ksus/'} className='max-[700px]:hidden absolute top-[44%] left-[57%] w-[80px] h-[40px]'></Link>
              <Link href={'/chicago-executive-airport-kpwk/'} className='max-[700px]:hidden absolute top-[31%] left-[60%] w-[80px] h-[40px]'></Link>
              <Link href={'/dekalb-peachtree-airport-kpdk'} className='max-[700px]:hidden absolute top-[59%] left-[63%] w-[80px] h-[40px]'></Link>
              <Link href={'/boston-logan-international-airport-kbos'} className='max-[700px]:hidden absolute top-[19%] left-[78%] w-[80px] h-[40px]'></Link>
              <Link href={'/westchester-county-airport-khpn/'} className='max-[700px]:hidden absolute top-[27%] left-[75%] w-[80px] h-[40px]'></Link>
              <Link href={'/dulles-international-airport-kiad'} className='max-[700px]:hidden absolute top-[39%] left-[71%] w-[80px] h-[40px]'></Link>
              <Link href={'/raleigh-durham-international-airport-krdu/'} className='max-[700px]:hidden absolute top-[49%] left-[71%] w-[80px] h-[40px]'></Link>
              <Link href={'/charleston-international-airport-kchs'} className='max-[700px]:hidden absolute top-[62%] left-[71%] w-[80px] h-[40px]'></Link>
              <Link href={'/st-pete-clearwater-international-airport-kpie'} className='max-[700px]:hidden absolute top-[81%] left-[65%] w-[80px] h-[40px]'></Link>
              <Link href={'/orlando-international-airport-kmco'} className='max-[700px]:hidden absolute top-[77%] left-[71%] w-[80px] h-[40px]'></Link>
              <Link href={'/naples-airport-kapf/'} className='max-[700px]:hidden absolute top-[87%] left-[66%] w-[80px] h-[40px]'></Link>
              <Link href={'/miami-opa-locka-executive-airport-kopf'} className='max-[700px]:hidden absolute top-[86%] left-[72.5%] w-[37px] h-[52px]'></Link>
              <Link href={'/leonard-thompson-airport-myam'} className='max-[700px]:hidden absolute top-[86%] left-[75%] w-[80px] h-[40px]'></Link>
            </div>
        </div>
      </div>
      <section className="pt-[40px] mt-[40px] max-w-[1800px] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-[50%] max-[700px]:w-full text-center">
            {usaAirportList.slice(0, 10).map((airport) => (
              <div key={airport.key} className="mb-4">
                <Link href={`/${airport.key}`} className='hover:underline text-[#0071BA] text-lg'>
                  {airport.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-[50%] max-[700px]:w-full max-[700px]:mt-8 text-center">
            {usaAirportList.slice(10, 20).map((airport) => (
              <div key={airport.key} className="mb-4">
                <Link href={`/${airport.key}`} className='hover:underline text-[#0071BA] text-lg'>
                  {airport.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      </HalfSection>
      
      {/* <RequestQuoteBanner /> */}
    </div>
  );
};

export default UsaAirportPage;