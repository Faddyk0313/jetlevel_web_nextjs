"use client";

import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React, { useState } from 'react';
import Image from 'next/image';
import Collapsible from '@/components/Collapsible';
import Table from './Table';
import HalfSection from './HalfSection';
import Link from 'next/link';

const OnDemandCharterPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: 'How quickly can JetLevel Aviation arrange an air ambulance charter flight?',
      answer: 'JetLevel Aviation can often provide options for air ambulance charter flights within 30 minutes to an hour of receiving your call. Our team is on standby 24/7, understanding that emergency situations require a prompt response and efficient service.'
    },
    {
      question: 'What type of medical staff will be onboard during an air ambulance charter flight?',
      answer: 'The medical staff onboard an air ambulance charter flight can vary depending on the patient’s needs. This could include paramedics, nurses, and even doctors. Rest assured, all medical professionals are highly trained to handle medical emergencies during the flight.'
    },
    {
      question: "What kind of medical equipment is available on JetLevel's air ambulance charter flights?",
      answer: 'Our air ambulance charter flights are equipped with advanced medical equipment including, but not limited to, heart monitors, defibrillators, ventilators, and medical kits. If a special device is required, we’ll make every effort to ensure it’s available for your flight.'
    },
    {
      question: 'Can JetLevel Aviation coordinate ground transportation for air ambulance charter flights?',
      answer: 'Yes, JetLevel Aviation can coordinate ground ambulance services, ensuring safe and efficient transportation to and from the aircraft. We aim to provide a seamless experience at every stage of your journey.'
    },
  ];
  return (
    <div>
      <Hero title="Medical Flight Transport" description="Air Ambulance Charter Flight Services " image="/images/air ambulance Hero image.jpg" hasOverlay={true} hasCalculator={true} />
      <BrandNames />
      <HalfSection showBottomContent={true}>
        <div className='flex flex-col justify-center gap-y-[20px] pt-8'>
          <div className='max-w-[1800px] mx-auto w-full'>
            <Collapsible
              key={1}
              question="Air Ambulance Charter and Medical Flight Transport Services"
              answer={
                <div className="mb-8">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-[60%] max-[700px]:w-full">
                      <p className="leading-7 text-[16px] text-[#727982] mb-4">
                        In emergency situations, speed and professional care are of utmost importance. That’s where JetLevel Aviation’s Air Ambulance Charter and Medical Flight Transport services come in. If you need to charter a private jet with medical facilities, our experienced team can efficiently organize lifesaving air ambulance flights, often providing options within as little as thirty minutes to an hour after receiving your call.

                      </p>
                      <p className="leading-7 text-[16px] text-[#727982] mb-4">

                        During such stressful times, we strive to provide compassionate, personalized, and reliable service, making the process as smooth as possible. Our experts are on hand to advise you on arrangements for both ambulatory and non-ambulatory passengers, ensuring every aspect of the journey is handled with the utmost care and professionalism.
                      </p>
                    </div>
                    <div className="w-[35%] max-[700px]:w-full max-[700px]:mb-6">
                      <Image
                        src="/images/side-ambulance.webp"
                        alt="Private Jet"
                        width={500}
                        height={250}
                        layout="responsive"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="leading-7 text-[16px] text-[#727982] mb-4">


                    At <Link href={'/'} className='text-blue'>JetLevel Aviation</Link> , our medical flight transport services also coordinate ground ambulance services, ensuring safe and efficient transportation to and from the aircraft. If your situation requires Oxygen support, our knowledgeable agents can assist in securing <a className='text-blue' href={'https://www.faa.gov/about/initiatives/cabin_safety/portable_oxygen'}>FAA-approved Oxygen devices</a> or any other specialized equipment necessary for the flight. Trust JetLevel Aviation to charter a private jet with medical facilities for your Air Ambulance Charter and medical flight transport needs – we’re here to serve with compassion and professionalism.

                  </p>
                </div>
              }
              isOpen={openIndex === 1}
              onClick={() => handleToggle(1)}
            />


            <Collapsible
              key={2}
              question="Air Ambulance Charter Specialties"
              answer={
                <div className='mb-4'>
                  <p className='leading-7 text-[16px] text-[#727982] mb-4'>We are well-equipped and experienced in providing specialized air ambulance and medical flight transport services for a wide range of situations:</p>
                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Emergency Air Transfer Services &ndash;</span> Our team is available 24/7 to coordinate emergency air transfers and medical flight transport, ensuring critical care is available when it&rsquo;s needed the most.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Organ and Blood Shipping &ndash;</span> We understand the time-sensitive nature of organ and blood transport and offer expedited, secure, and safe shipping services.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Patients Needing Organ Transplants &ndash;</span> We provide comfortable and prompt transportation for patients on their way to receiving an organ transplant.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Special Needs Patients &ndash; </span>Our team has experience in accommodating passengers with special needs, ensuring they receive the required care and assistance during their flight.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Patients Unable to Fly on Commercial or Private Charter Aircraft &ndash;</span> For those with a disability or health condition that prevents them from flying commercially, our air ambulance service provides a safe and comfortable alternative.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Ground Ambulance Transfers &ndash; </span>We coordinate ground ambulance services to and from the aircraft, ensuring seamless transportation at every stage of your journey.</p>
                </div>
              }
              isOpen={openIndex === 2}
              onClick={() => handleToggle(2)}
            />


            <Collapsible
              key={3}
              question="The JetLevel Advantage"
              answer={
                <div className='mb-4'>
                  <p className='leading-7 text-[16px] text-[#727982] mb-4'>Choosing JetLevel Aviation to a <Link href={'/private-jet-charter/'}>Private jet charter </Link>with medical facilities comes with a host of advantages:</p>
                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Experienced Staff &ndash;</span> Our team is not just highly skilled but also deeply empathetic, understanding the emotional and logistical challenges that come with medical emergencies.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Prompt Response &ndash;</span> We understand that in emergency situations, every second counts. That&rsquo;s why we aim to provide flight options within 30 minutes to an hour of receiving your call.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Complete Coordination &ndash;</span> From coordinating ground transportation to arranging for FAA-approved Oxygen devices, we handle every aspect of the journey to ensure a seamless experience.</p>

                  <p></p>
                </div>
              }
              isOpen={openIndex === 3}
              onClick={() => handleToggle(3)}
            />



            <Collapsible
              key={4}
              question="Understanding Air Ambulance Charter Flights"
              answer={
                <div className='mb-8 flex flex-wrap justify-between items-center'>
                  <div className='w-[48%] max-[700px]:w-full'>
                    <p className='leading-7 text-[18px] text-[#727982] mb-8 '>An air ambulance charter flight is more than just a means of transportation. It’s a complete airborne medical unit equipped with state-of-the-art medical equipment and staffed by medical professionals who can provide critical care en route to the hospital.</p>
                  </div>
                  <div className='w-[48%] max-[700px]:w-full' >
                    <Image unoptimized src={'/images/understanding air ambulance.webp'} alt='image' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
                </div>
              }
              isOpen={openIndex === 4}
              onClick={() => handleToggle(4)}
            />

            <Collapsible
              key={5}
              question="Onboard Medical Team "
              answer={
                <div className="mb-8">
                  <p className="mb-8 leading-7 text-[16px] text-[#727982] ">The medical team onboard an air ambulance charter flight can include paramedics, nurses, and even doctors, depending on the patient’s needs. This team is trained to handle medical emergencies and provide appropriate care during the flight.</p>
                </div>
              }
              isOpen={openIndex === 5}
              onClick={() => handleToggle(5)}
            />


            <Collapsible
              key={6}
              question="Aircraft Medical Equipment"
              answer={
                <div className="mb-8">
                  <p className="mb-8 leading-7 text-[16px] text-[#727982] ">Our air ambulance charter flights are equipped with advanced medical equipment, including heart monitors, defibrillators, ventilators, medical kits, and more. If a special device is required, we work to ensure it’s available for your flight.</p>
                </div>
              }
              isOpen={openIndex === 6}
              onClick={() => handleToggle(6)}
            />



            <Collapsible
              key={7}
              question="Understanding Medical Flights Cost"
              answer={
                <div className='mb-4'>
                  <p className='leading-7 text-[16px] text-[#727982] mb-4'>When it comes to providing medical flight transport, we at JetLevel Aviation believe in full transparency and commitment to affordability. Understanding the costs involved in medical flights can help you make informed decisions during such critical times. <br /> The cost of medical flights can vary depending on several factors:</p>
                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Distance &ndash;</span> The longer the flight distance, the higher the cost due to increased fuel consumption and flight time.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Type of Aircraft &ndash;</span> Different medical flights use different types of aircraft. A larger, more specialized aircraft might come at a higher cost.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Medical Staff and Equipment &ndash; </span>The cost also depends on the type and number of medical professionals required for the flight, and the nature of the medical equipment used.</p>

                  <p className='leading-7 text-[16px] text-[#727982] mb-4 '><span> Ground Transportation &ndash;</span> Ground ambulance services for transport to and from the aircraft are usually included in the overall medical flights cost.</p>
                  <p className='leading-7 text-[16px] text-[#727982] mb-4'>We encourage you to reach out to our experienced team for a detailed breakdown of costs involved with our medical flight transport services. We are here to assist you 24/7, providing clear, comprehensive information to help you navigate your medical flight needs. <br /> Please note that while the cost of emergency medical flights can seem high, remember that you’re investing in a service that prioritizes speed, safety, and the highest level of care for patients in need.</p>

                </div>
              }
              isOpen={openIndex === 7}
              onClick={() => handleToggle(7)}
            />

            <Collapsible
              key={8}
              question="Air Ambulance Charter Flight Booking Process"
              answer={
                <div className='mb-8 flex flex-wrap justify-between'>
                  <div className='w-[60%] max-[700px]:w-full'>
                    <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span> Reach Out to Us &ndash;</span> Call our team anytime with the necessary information regarding the patient and the required services.</p>

                    <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span> Flight Arrangement &ndash;</span> Our team will promptly arrange the most suitable flight, ensuring all medical and logistical needs are taken care of.</p>

                    <p className='mb-8 leading-7 text-[16px] text-[#727982] '><span> Post-Flight Follow-Up &ndash;</span> Once the flight is complete, our team remains available to address any further needs or concerns.</p>
                  </div>
                  <div className='w-[35%] max-[700px]:w-full' >
                    <Image unoptimized src={'/images/air-ambulance-helicopter.webp'} alt='image' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
                </div>
              }
              isOpen={openIndex === 8}
              onClick={() => handleToggle(8)}
            />

            <Collapsible
              key={9}
              question="Frequently Asked Questions (FAQs)"
              answer={
                <div className='mb-8'>
                  <p className='leading-7 text-[18px] text-[#727982] mb-8 '>We understand that you might have questions about our air ambulance charter flights. Here are answers to some of the most frequently asked questions.</p>
                  <div className='mb-8'>
                    {
                      faqData.map((faq, index) => (
                        <div key={index} className='pb-6'>
                          <h3 className='font-bold text-gray-900'>{faq.question}</h3>
                          <p className='text-gray-700 leading-7 mt-1'>{faq.answer}</p>
                        </div>
                      ))
                    }
                  </div>
                  <p className='leading-7 text-[18px] text-[#727982] mb-8 '>At JetLevel Aviation, our goal is to deliver top-tier, compassionate service while prioritizing the health and safety of our passengers. Don’t hesitate to reach out to us anytime – our team is ready to assist with your air ambulance charter flight needs.</p>

                </div>
              }
              isOpen={openIndex === 9}
              onClick={() => handleToggle(9)}
            />
          </div>
        </div>
      </HalfSection>
    </div>
  );
};

export default OnDemandCharterPage;