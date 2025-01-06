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

const CostCalculatorPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  
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
      <Hero title="Charter Flights Cost Calculator" description="Get instant comprehensive breakdown of the estimated cost and aircraft type" image="/images2/cost calculator.jpg" hasOverlay={true} hasCalculator={true} showCalculator='LeadForm'/>
      <BrandNames />
      <HalfSection showBottomContent={true}>
      <div className='flex flex-col justify-center gap-y-[20px] pt-8'>
          <Collapsible
              key={1}
              question="Thank you for your interest in JetLevel Aviation!"
              answer={
                <>
                 <p className='text-black text-center mb-[50px] text-md '>Try our Charter Flights Cost Calculator. Fill out the form for a free personalized estimate. Book directly or contact our sales team for assistance. Plan your journey hassle-free with our calculator.</p>
                  {/* <div className='flex justify-center'>
                    <div className='w-full outline-none h-auto' id="my-iframe">
                        <Suspense fallback={<div className="search-form__loader"></div>}>
        
                            <LeadForm/>
                        </Suspense>
                      </div>
                  </div> */}
                </>
              }
              isOpen={openIndex === 1}
              onClick={() => handleToggle(1)}
            />  

            <Collapsible
              key={2}
              question="About the Charter Flights Cost Calculator"
              answer={
                <>
                 <h2 className='text-start mb-3'></h2>
                  <p className='text-md text-black mb-5 '>Upon filling up the form with the desired information, users will receive a comprehensive breakdown of the estimated cost for their charter flight. The breakdown will include the following :</p>
                  <ul className='list-disc ml-5'>
                    <li><span className='text-[#0071ba] font-bold'>Aircraft Recommendation:</span>  Based on the number of passengers or any other relevant criteria, this tool will recommend a suitable aircraft type for their trip. It could be a turbo prop, light jet, midsize jet, or any other appropriate option.</li>
                    <li><span className='text-[#0071ba] font-bold'>Estimated Flight Time:</span>  This tool will provide an estimated flight duration for the selected route. This information helps users plan their travel schedule more effectively.</li>
                    <li><span className='text-[#0071ba] font-bold'>Comprehensive Cost Breakdown: </span>  Users will receive a breakdown of the estimated costs associated with the charter flight. This breakdown will encompass all relevant expenses, including the base charter rate, fuel costs, taxes, and any anticipated fees. By presenting a comprehensive view of the costs, users can better evaluate the financial aspects of their charter flight.</li>
                  </ul>
                  <p className='italic text-center mt-9'>It is important to note that the provided prices are only estimates. To obtain a formal quote tailored to their specific requirements, users are encouraged to request one after receiving the initial estimate.</p>
                </>
              }
              isOpen={openIndex === 2}
              onClick={() => handleToggle(2)}
            /> 

            <Collapsible
              key={3}
              question="How to Use the Charter Flights Cost Calculator"
              answer={
                <>
                  <p className=''>Using our Charter Flights Cost Calculator is straightforward. Start by filling in essential  like departure and destination cities, the number of passengers, and any specific requests you may have. After entering this information, click the “Calculate” button. Within seconds, you’ll receive a breakdown of the estimated cost for your trip. The report will show you an aircraft recommendation, an estimated flight duration, and a comprehensive list of expenses, including taxes and fuel costs. It’s a simple way to get a quick estimation of how much your charter flight might cost.</p>
                </>
              }
              isOpen={openIndex === 3}
              onClick={() => handleToggle(3)}
            /> 

            <Collapsible
              key={4}
              question="Why Use a Charter Flights Cost Calculator"
              answer={
                <>
                  <p className=''>Understanding the cost of a charter flight can be complicated due to multiple variables involved. Our Charter Flights Cost Calculator simplifies this by offering instant, personalized estimates. Unlike making a phone call or sending an inquiry via email, which can be time-consuming, the calculator provides immediate results. This convenience allows you to plan your trip more effectively, manage your budget, and make quick decisions without waiting for replies from service providers.</p>
                  <div className='mt-10'>
                  {
                    faqData.map((faq,index) => (
                      <div key={index} className='pb-6'>
                        <h3 className='font-bold text-gray-900'>{faq.question}</h3>
                        <div className='text-gray-700 leading-7 mt-1'>{faq.answer}</div>
                      </div>
                    ))
                    }
                </div>
                </>
              }
              isOpen={openIndex === 4}
              onClick={() => handleToggle(4)}
            /> 

            <Collapsible
              key={5}
              question="What Affects Charter Flights Costs"
              answer={
                <>
                  <p className=''>The cost of chartering a flight can vary due to multiple factors. Firstly, the type of aircraft you choose affects the base rate. Secondly, distance and duration of the flight influence fuel costs. Seasonal demand can also fluctuate prices. If you require extra services like in-flight catering or ground transportation, those will be additional costs. Understanding these variables can help you make more informed decisions when using our calculator.</p>
                </>
              }
              isOpen={openIndex === 5}
              onClick={() => handleToggle(5)}
            /> 

            <Collapsible
              key={6}
              question="Glossary of Terms"
              answer={
                <ul className='list-disc pl-4'>
                  <li className='mb-3'>Base Charter Rate: Initial cost of renting the aircraft.</li>
                  <li className='mb-3'>Fuel Surcharge: Additional charges for fuel, varies by distance.</li>
                  <li className='mb-3'>Taxes: Government levies on the flight cost.</li>
                  <li className='mb-3'>Additional Services: Extra amenities like food, Wi-Fi, etc.</li>
                </ul>
              }
              isOpen={openIndex === 6}
              onClick={() => handleToggle(6)}
            /> 

            <Collapsible
              key={7}
              question="Downloadable Resources"
              answer={
                <>
                  <p className='mb-8 '>For more comprehensive information on charter flight costs, we offer downloadable PDF guides. These resources delve deeper into cost structures, types of aircraft, and more.</p>
                  <a href='https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/The-Comprehensive-Guide-to-Chartering-a-Private-Jet.pdf' download>
                    <Button
                      text='Click here to download'
                      variant='primary'
                    />
                  </a>
                </>
              }
              isOpen={openIndex === 7}
              onClick={() => handleToggle(7)}
            /> 
      </div>
      </HalfSection>
    </div>
  );
};

export default CostCalculatorPage;