"use client";
import React, { Suspense, useState } from 'react';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import Collapsible from '@/components/Collapsible'
import Button from '@/components/Button';
import SmartTravelTools from '@/sections/SmartTravelTools';
import PopularPrivateJetCharters from '@/sections/PopularPrivateJetCharters';
import Hero from '@/sections/Hero';
import BrandNames from '@/sections/BrandNames';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import HalfSection from './HalfSection';
import WhatOurClientsSay from '@/sections/WhatOurClientsSay';

const DistanceCalculatorPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const faqData = [
    {
      question:'Is the cost estimate accurate?',
      answer:<div>
        <p>The estimates are fairly accurate but should be considered as a general guide. For precise <Link href='/instant-qoute'><span>quotes</span></Link>, contact our team.</p>
      </div>
    },
    {
      question:'Are there any hidden fees?',
      answer:'Our calculator provides a comprehensive breakdown of expected costs, including taxes and fuel. However, additional services will incur extra charges.'
    },
    {
      question:'Can I choose the aircraft?',
      answer:'Yes, the calculator recommends an aircraft based on your input, but you can request a different type if you prefer.'
    }
  ]
  return (
    <div>
      <Hero title="Flight Time and Distance Calculator" description="Discover How Close Your Next Destination Is Instantly Calculate Your Flight Time and Distance with Precision" image="/hero_images/4.png" hasOverlay={false} hasCalculator={true} showCalculator='DistanceCalculator' />
      <BrandNames />
      <HalfSection showBottomContent={true}>
      <div className='flex flex-col justify-center pt-8'>
      {/* <Collapsible
              key={1}
              question="Key Benefits"
              answer={*/}
              <h2 className='text-darkBlue'>Key Benefits</h2>
                <> 
                <h3><span className='font-normal'>Effortless Planning</span></h3>
                <p className='leading-7 mb-4 '>Skip the guesswork. Our tool does the heavy lifting, offering instant distance calculations.</p>
                <h3><span className='font-normal'>Time-Saving</span></h3>
                <p className='leading-7 mb-4 '>Fast results mean more time for what matters - preparing for your luxurious flight.</p>
                <h3><span className='font-normal'>Informed Choices</span></h3>
                <p className='leading-7 mb-4 '>Know your flight details upfront. Choose the best options for your schedule and preferences.</p>
                <h3><span className='font-normal'>Effortless Planning</span></h3>
                <p className='leading-7 mb-4 '>Skip the guesswork. Our tool does the heavy lifting, offering instant distance calculations.</p>
                <h3><span className='font-normal'>Time-Saving</span></h3>
                <p className='leading-7 mb-4 '>Fast results mean more time for what matters - preparing for your luxurious flight.</p>
                </>
              {/* }
              isOpen={openIndex === 1}
              onClick={() => handleToggle(1)}
            />   */}
      </div>
      </HalfSection>
      <WhatOurClientsSay />
    </div>
  );
};

export default DistanceCalculatorPage;