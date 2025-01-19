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

  const tableData=[
    {
      aircraftType:'Turboprop',
      aircraft:'Pilatus PC12',
      passengers:'6-8',
      rates:'$1800-$2300'
    },
    {
      aircraftType:'Very Light Jet',
      aircraft:'Phenom 100',
      passengers:'6-8',
      rates:'$3000-$3800'
    },
    {
      aircraftType:'Light Jet',
      aircraft:'Hawker 400XP',
      passengers:'7-9',
      rates:'$5400-$6300'
    },
    {
      aircraftType:'Midsize Jet',
      aircraft:'Lear 60',
      passengers:'7-9',
      rates:'$6400-$8000'
    },
    {
      aircraftType:'Super midsize Jet',
      aircraft:'Citation Sovereign',
      passengers:'8-10',
      rates:'$8900-$10000'
    },
    {
      aircraftType:'Heavy Jet',
      aircraft:'Gulfstream G-IV',
      passengers:'10-16',
      rates:'$10000-$14000'
    },
  ]

  const tableColumns = [
    {
      heading:'Aircraft Type',
			accessor: 'aircraftType',
    },
    {
      heading:'Aircraft',
			accessor: 'aircraft',
    },
    {
      heading:'Passengers',
			accessor: 'passengers',
    },
    {
      heading:'Ballpark Hourly Rate',
			accessor: 'rates',
    },
  ]
  
  const faqData = [
    {
      question:'How quickly can I book an on-demand private jet charter with JetLevel Aviation?',
      answer:'Our service operates 24/7, and we strive to provide as fast a response as possible. Usually, we can have a private jet ready for you within a few hours, depending on the availability of aircraft and the specifics of your flight plan.'
    },
    {
      question:'What type of aircraft can I charter through your on-demand service?',
      answer:'At JetLevel Aviation, we have a wide fleet selection ranging from light jets to large airliners. The choice of aircraft depends on your specific needs, including the number of passengers, amount of luggage, and distance of the flight.'
    },
    {
      question:'What additional services are provided with your on-demand private jet charter service?',
      answer:'We offer a range of additional services for our customers, including personalized catering, ground transportation, and concierge services. Our goal is to ensure your journey is as comfortable and hassle-free as possible.'
    },
    {
      question:'How flexible is the on-demand private jet charter service at JetLevel Aviation?',
      answer:'Our on-demand service is designed to offer maximum flexibility to our customers. If your plans change, we will do our best to adapt to your new itinerary. Please contact us as soon as possible to discuss any changes to your flight plan.'
    },
  ]
  return (
    <div>
      <Hero title="On-Demand Private Jet Charter Flights" description="Luxury at Your Fingertips" image="/images/On Demand Charter Hero Image.jpeg" hasOverlay={true} hasCalculator={true} />
      <BrandNames />
      <HalfSection showBottomContent={true}>
      <div className='flex flex-col justify-center gap-y-[20px] pt-8'>
        <div className='max-w-[1800px] mx-auto w-full'>
        <Collapsible
          key={1}
          question="On-Demand Luxury, Unparalleled and Unmatched"
          answer={
            <div className="mb-8">
              <div className="flex flex-wrap justify-between">
                <div className="w-[60%] max-[700px]:w-full">
                  <p className="leading-7 text-[16px] text-[#727982] mb-4">
                    Welcome to JetLevel Aviation – redefining luxury and convenience in private aviation. Our <span className="text-[#0071ba] font-bold">On Demand private jet charter</span> service provides tailored, prompt solutions for all your travel needs. From spontaneous business trips to bespoke luxury getaways, our fleet is on standby, ready to deliver a unique and efficient travel experience.
                  </p>
                  <p className="leading-7 text-[16px] text-[#727982] mb-4">
                    With a focus on personalization, we accommodate all your specific preferences – from aircraft type to in-flight menu and flight crew selection. Our full concierge service ensures a seamless journey from start to end, handling expedited airport security to arranging luxury accommodations at your destination.
                  </p>
                </div>
                <div className="w-[35%] max-[700px]:w-full max-[700px]:mb-6">
                  <Image
                    src="/images/travel concierge services image.jpg"
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
          question="How It Works"
          answer={
            <div className='mb-8'>
            <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span>Chartering an on-demand private jet</span> with us is as easy as 1-2-3:</p>
            <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span>Step 1 – </span>Request a Quote: Reach out to us through our online form, email, or phone. Share with us your travel itinerary , including dates, destinations, and passenger information.</p>
            <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span>Step 2 –</span>Receive a Customized Plan: Our expert team will provide you with a personalized flight plan, including the most suitable jet options for your needs, detailed pricing, and additional bespoke services if you desire.</p>
            <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span>Step 3 –</span>Confirm and Fly: After you give us the green light, we prepare your jet and provide all the necessary . All you need to do is arrive and enjoy your flight.</p>
           </div>
          }
          isOpen={openIndex === 2}
          onClick={() => handleToggle(2)}
        />
        
        <Collapsible
          key={3}
          question="Unique Value Proposition"
          answer={
            <div className='mb-8 flex flex-wrap justify-between'>
            <div className='w-[60%] max-[700px]:w-full'>
              <p className='leading-7 text-[16px] text-[#727982] mb-8 '>Our on demand private jet charter service sets a new standard for luxury travel. At JetLevel Aviation, we marry flexibility, comfort, and speed to provide an unparalleled, hassle-free flying experience:</p>
              <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span>24/7 Availability –</span>We’re ready to fly whenever you are.</p>
              <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span>Wide Aircraft Selection – </span>From light jets to large airliners, we’ve got you covered.</p>
            </div>
            <div className='w-[35%] max-[700px]:w-full' >
              <Image unoptimized src={'/images/private-jet-charter-pilot-and-passengers-arrive-in-kauai image.jpeg'} alt='image' width={100} height={100} className='w-full h-full object-cover' />
            </div>
           </div>
          }
          isOpen={openIndex === 3}
          onClick={() => handleToggle(3)}
        />

        <Collapsible
          key={4}
          question="Benefits of On-Demand Private Jet Charter Service"
          answer={
            <div className='mb-8'>
              <p className='leading-7 text-[16px] text-[#727982] mb-8'>Our on-demand private jet service offers an array of benefits:</p>
              <p className='leading-7 text-[16px] text-[#727982] mb-8 '><span>Time-saving –</span> No check-in queues or layovers; fly direct to your destination.</p>
              <p className='leading-7 text-[16px] text-[#727982] mb-8 '><span>Convenience –</span> Flight schedules tailored to your itinerary.</p>
              <p className='leading-7 text-[16px] text-[#727982] mb-8 '><span>Flexibility –</span> Change your plans? No problem. We adapt to your needs.</p>
              <p className='leading-7 text-[16px] text-[#727982] mb-8 '><span>Luxury –</span> Experience the epitome of luxury travel in a private setting.</p>
              <p className='leading-7 text-[16px] text-[#727982] mb-8 '><span>Privacy –</span> Discreet travel for those seeking privacy.</p>
           </div>
          }
          isOpen={openIndex === 4}
          onClick={() => handleToggle(4)}
        />
        
        <Collapsible
          key={5}
          question="On-Demand Private Jet Charter Prices Estimation"
          answer={
            <div className='mb-8'>
            <p className='leading-7 text-[16px] text-[#727982] mb-10 '>We offer transparent, competitive pricing for our on-demand private jet service. Costs will vary based on flight duration, aircraft type, and additional services requested. We also offer bespoke packages and deals tailored to your specific needs. For payment, we accept a range of options and provide clear guidelines on deposits and cancellations.</p>
            <Table column={tableColumns} data={tableData} button={false} />
            <p className='italic mt-10 text-[#727982] text-center text-md'>Please be aware that the prices listed above are only approximate values; the actual cost for each trip can vary based on numerous factors, and we cannot guarantee these exact amounts for every individual flight</p>
           </div>
          }
          isOpen={openIndex === 5}
          onClick={() => handleToggle(5)}
        />

        <Collapsible
          key={6}
          question="Who Owns The Planes?"
          answer={
            <div className='mb-8 flex flex-wrap justify-between items-center'>
            <div className='w-[48%] max-[700px]:w-full'>
              <p className='leading-7 text-[18px] text-[#727982] mb-8 '>At JetLevel, we work with a network of trusted and reputable partners who maintain operation of the aircraft. This extensive network allows us to provide a wide variety of aircraft options for our on demand private jet charter service, ensuring you always have the best option for your travel needs.</p>
            </div>
            <div className='w-[48%] max-[700px]:w-full' >
              <Image unoptimized src={'/images/private-jet-privacy-cabin.jpeg'} alt='image' width={100} height={100} className='w-full h-full object-cover' />
            </div>
           </div>
          }
          isOpen={openIndex === 6}
          onClick={() => handleToggle(6)}
        />
        
        <Collapsible
          key={7}
          question="How Are Planes Paired with Trips?"
          answer={
            <div className='mb-8'>
              <p className='leading-7 text-[18px] text-[#727982] mb-8 '>Our expert team at JetLevel evaluates your specific requirements, including the number of passengers, the amount of luggage, travel distance, and any personal preferences you may have. Based on these , we suggest the most suitable aircraft from our extensive fleet to ensure your journey is comfortable, convenient, and perfectly tailored to your needs.</p>
            </div>
          }
          isOpen={openIndex === 7}
          onClick={() => handleToggle(7)}
        />

        <Collapsible
          key={8}
          question="What are the Safety Standards of the Aircraft Used?"
          answer={
            <div className='mb-8'>
              <p className='leading-7 text-[18px] text-[#727982] mb-8 '>Safety is our utmost priority at JetLevel. All aircraft used in our on demand private jet charter service adhere to rigorous safety standards. Our partners maintain their planes in accordance with the highest industry standards, and we routinely conduct safety audits. Additionally, all flights are operated by highly trained and experienced pilots for your peace of mind.</p>
            </div>
          }
          isOpen={openIndex === 8}
          onClick={() => handleToggle(8)}
        />

        <Collapsible
          key={9}
          question="What are the Safety Standards of the Aircraft Used?"
          answer={
            <div className='mb-8'>
              <p className='leading-7 text-[18px] text-[#727982] mb-8 '>Safety is our utmost priority at JetLevel. All aircraft used in our on demand private jet charter service adhere to rigorous safety standards. Our partners maintain their planes in accordance with the highest industry standards, and we routinely conduct safety audits. Additionally, all flights are operated by highly trained and experienced pilots for your peace of mind.</p>
            </div>
          }
          isOpen={openIndex === 9}
          onClick={() => handleToggle(9)}
        />

          <div className='flex items-center flex-wrap justify-between mt-10 mb-8'>
            <div className='w-[48%] max-[700px]:w-full'>
            <Collapsible
                key={10}
                question="Peak Season Charter Flights"
                answer={
                  <>
                     <p className='leading-7 text-[18px] text-[#727982] mb-8 text-justify '>During peak travel seasons, demand for private jets increases. Our on-demand private jet charter service ensures you can always travel in luxury, comfort, and style, even during the busiest times. Book ahead or reach out to our team to discuss the best options for peak-season travel.</p>
                  </>
                }
                isOpen={openIndex === 10}
                onClick={() => handleToggle(10)}
              />
            </div>
            <div className='w-[48%] max-[700px]:w-full'>
              <Collapsible
                  key={11}
                  question="Last Minute Charter Flights"
                  answer={
                    <>
                    <p className='leading-7 text-[18px] text-[#727982] mb-8 text-justify '>We understand that sometimes, you need to fly at a moment’s notice. That’s why our on-demand private jet service includes options for last-minute bookings. Depending on aircraft availability and your destination, we can often arrange a flight for you within just a few hours. Please contact our team for more information or to arrange a last-minute charter flight.</p>
                    </>
                  }
                  isOpen={openIndex === 11}
                  onClick={() => handleToggle(11)}
                />
            </div>
          </div>

          <Collapsible
            key={12}
            question="Frequently Asked Questions about Instant Quotes"
            answer={
              <div className='mb-8'>
              <p className='leading-7 text-[18px] text-[#727982] mb-8 '>Have questions about our private jet quotes online or private jet online quote system? Here are some FAQs to guide you:</p>
              <div className='mb-8'>
              {
                faqData.map((faq,index) => (
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