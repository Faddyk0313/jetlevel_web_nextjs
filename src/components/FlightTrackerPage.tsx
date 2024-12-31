"use client";
import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import Collapsible from '@/components/Collapsible'
import Button from '@/components/Button';
import SmartTravelTools from '@/sections/SmartTravelTools';
import PopularPrivateJetCharters from '@/sections/PopularPrivateJetCharters';
import Hero from '@/sections/Hero';
import BrandNames from '@/sections/BrandNames';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import HalfSection from './HalfSection';
import FlightTracker from '@/components/FlightTracker';


const FlightTrackerPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  const faqData = [
    {
      question: 'How do I use the Private Jet Flight Tracker to monitor my flight?',
      answer: (
        <div>
          <p className='mb-4 leading-7 '>
            Using our Private Jet Flight Tracker is simple and intuitive. Just follow these steps:
          </p>
          <ol className="list-decimal ml-6">
            <li>
              Locate your private jet’s unique identifier, which can be either the tail number or the registration number.
            </li>
            <li>
              Enter this number into the designated field on our flight tracker tool.
            </li>
            <li>
              Instantly, you’ll receive real-time data, detailing your flight’s status, current trajectory, and expected time of arrival.
            </li>
          </ol>
        </div>
      ),
    },
    {
      question: 'How accurate is the information provided by the Private Jet Flight Tracker?',
      answer: (
        <div>
          <p className='!leading-7 '>
            Our Private Jet Flight Tracker is designed to offer the most up-to-date and accurate information available. It fetches real-time data directly from aviation sources, ensuring that you receive precise and reliable details about your flight. Rest assured, the tool aims to provide you with the transparency and assurance needed for a luxurious and worry-free journey.
          </p>
        </div>
      ),
    },
  ];
  
  return (
    <div>
      <Hero title="JetLevel Aviation Flight Tracker" description="Soar with certainty. Track your private jet journey in real-time." image="/images/flight tracker Hero.png" hasOverlay={true} hasCalculator={true} showCalculator='FlightTracker' />
      <BrandNames />
      <HalfSection showBottomContent={true}>
        <p className='!leading-7 text-[17px]  text-[#575757] pt-12 pb-0'>Navigating the skies has never been this simple. Welcome to our Private Jet Flight Tracker page, designed for discerning travelers like you who prioritize time, safety, and luxury in every journey.</p>
      <div className='flex flex-col justify-center gap-y-[20px] pt-8'>
      <Collapsible
      key={1}
      question="Keep an Eye on the Skies: Your Personal Jet Flight Tracker"
      answer={
        <>
          <p className='!leading-7 text-[17px] mb-4'>
            We understand that your time is invaluable. With our easy-to-use flight tracker, you can monitor your private jet’s journey in real-time. Whether you’re planning a business trip or a leisurely escape, staying informed about your flight’s status ensures a seamless and satisfying experience. Use our <Link href='/distance-calculator/' className='text-blue'>Distance Calculator</Link> to plan your route and travel time more efficiently.
          </p>
        </>
      }
      isOpen={openIndex === 1}
      onClick={() => handleToggle(1)}
    />
    <Collapsible
      key={2}
      question="How Live Flight Status & Tracker Works"
      answer={
        <>
          <p className='!leading-7 text-[17px]  mb-4'>
            <span>Enter Your Tail or Registration Number: </span> Locate your private jet’s unique identifier, either the tail number or the registration number, and input it into the tracker.
          </p>
          <p className='!leading-7 text-[17px]  mb-4'>
            <span>Instant Insights:</span> In a matter of seconds, our tool will fetch real-time data, providing you with comprehensive details about your flight’s status, trajectory, and expected time of arrival.
          </p>
          <p className='!leading-7 text-[17px]  mb-4'>
            <strong>The Assurance of Safety</strong><br />
            Safety is not just a priority; it’s a guarantee. By tracking your private jet, you’re always in the know. This level of transparency ensures that you can travel with peace of mind, knowing that your journey is on course.
          </p>
        </>
      }
      isOpen={openIndex === 2}
      onClick={() => handleToggle(2)}
    />
    <Collapsible
      key={3}
      question="Luxury in Every Detail"
      answer={
        <>
          <p className='!leading-7 text-[17px]  mb-4'>
            From the moment you book your flight to the second you touch down, we ensure that your experience is steeped in luxury and convenience. Our flight tracker is just one more way we’re enhancing your journey, making sure it’s as effortless and enjoyable as possible.
          </p>
        </>
      }
      isOpen={openIndex === 3}
      onClick={() => handleToggle(3)}
    />
    <Collapsible
      key={4}
      question="Your Journey, Your Rules"
      answer={
        <>
          <p className='!leading-7 text-[17px]  mb-4'>
            Travel is not just about getting from point A to point B; it’s an experience, tailored to your preferences and needs. By offering you the tools to monitor your flight effortlessly, we’re putting control and information right at your fingertips.
          </p>
          <p className='!leading-7 text-[17px]  mb-4'>
            <span>Ready to Track Your Charter Flight?</span><br />
            Utilize our Private Jet Flight Tracker below and embark on a journey where luxury meets real-time assurance.
          </p>
          <p className='!leading-7 text-[17px]  mb-4'>
            Feel free to explore other resources on our website that cater to your taste for excellence, safety, and time efficiency.
          </p>
          <p className='!leading-7 text-[17px]  mb-4'>Safe travels and blue skies ahead!</p>
          <div className="text-center pt-8">
            <Link href={'/flight-tracker/#my-iframe'}>
          <Button
              text='Track a Flight'
              variant='primary'
          />
          </Link>
        </div>
        </>
      }
      isOpen={openIndex === 4}
      onClick={() => handleToggle(4)}
    />
    <Collapsible
      key={5}
      question="We Value Your Feedback"
      answer={
        <>
          <p className='!leading-7 text-[17px]  mb-4'>
            We’ve designed this tool to make your journey with us as smooth as possible. If you find this tool useful—or have suggestions for improvement—please don’t hesitate to reach out. Your feedback drives our continuous innovation.
          </p>
        </>
      }
      isOpen={openIndex === 5}
      onClick={() => handleToggle(5)}
    />

<Collapsible
              key={6}
              question="Frequently Asked Questions about Instant Quotes"
              answer={
                <div className="mb-8">
                  <p className="leading-7 text-[18px] text-[#727982] mb-8 ">
                    We understand that you may have questions about arranging a group charter flight. Here are answers to some of the most frequently asked questions
                  </p>
                  <div className="mb-8">
                    {faqData.map((faq, index) => (
                      <div key={index} className="pb-6">
                        <h3 className="font-bold text-gray-900">
                          {faq.question}
                        </h3>
                        <div className="text-gray-700 leading-7 mt-1">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
              isOpen={openIndex === 6}
              onClick={() => handleToggle(6)}
            />

      </div>
      </HalfSection>
    </div>
  );
};

export default FlightTrackerPage;