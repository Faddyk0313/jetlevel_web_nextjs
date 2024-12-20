"use client";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React, { Suspense, useState } from 'react';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import Collapsible from '@/components/Collapsible'

const CostCalculatorPage = () => {
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
      <Hero title="Charter Flights Cost Calculator" description="Get instant comprehensive breakdown of the estimated cost and aircraft type" image="https://jetlevel.com/wp-content/uploads/2019/10/iStock-1073242590-e1687592795610.jpg" hasOverlay={true} hasCalculator={true} showCalculator={false} />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className='min-w-full md:min-w-[72%]'>
          <Breadcrumb />
        </div>
      </section>
      <div className='flex flex-col justify-center gap-y-[20px] p-8'>
        <div className='px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto'>
          <h2 className='text-center'>Thank you for your interest in JetLevel Aviation!</h2>
          <p className='text-black text-center mt-[40px] mb-[50px] text-md'>Try our Charter Flights Cost Calculator. Fill out the form for a free personalized estimate. Book directly or contact our sales team for assistance. Plan your journey hassle-free with our calculator.</p>
            <div className='flex justify-center'>
               <div className='w-full outline-none h-auto' id="my-iframe">
                  <Suspense fallback={<div className="search-form__loader"></div>}>
  
                      <LeadForm/>
                  </Suspense>
                </div>
            </div>

            <section className='pt-[40px] py-0 pb-0'>
              <h2 className='text-start mb-3'>About the Charter Flights Cost Calculator</h2>
              <p className='text-md text-black mb-5'>Upon filling up the form with the desired information, users will receive a comprehensive breakdown of the estimated cost for their charter flight. The breakdown will include the following details:</p>
              <ul className='list-disc ml-5'>
                <li><span className='text-[#0071ba] font-bold'>Aircraft Recommendation:</span>  Based on the number of passengers or any other relevant criteria, this tool will recommend a suitable aircraft type for their trip. It could be a turbo prop, light jet, midsize jet, or any other appropriate option.</li>
                <li><span className='text-[#0071ba] font-bold'>Estimated Flight Time:</span>  This tool will provide an estimated flight duration for the selected route. This information helps users plan their travel schedule more effectively.</li>
                <li><span className='text-[#0071ba] font-bold'>Comprehensive Cost Breakdown: </span>  Users will receive a breakdown of the estimated costs associated with the charter flight. This breakdown will encompass all relevant expenses, including the base charter rate, fuel costs, taxes, and any anticipated fees. By presenting a comprehensive view of the costs, users can better evaluate the financial aspects of their charter flight.</li>
              </ul>
              <p className='italic text-center mt-9'>It is important to note that the provided prices are only estimates. To obtain a formal quote tailored to their specific requirements, users are encouraged to request one after receiving the initial estimate.</p>
            </section>

            <section className='pb-0'>
              <h2>How to Use the Charter Flights Cost Calculator</h2>
              <p>Using our Charter Flights Cost Calculator is straightforward. Start by filling in essential details like departure and destination cities, the number of passengers, and any specific requests you may have. After entering this information, click the “Calculate” button. Within seconds, you’ll receive a breakdown of the estimated cost for your trip. The report will show you an aircraft recommendation, an estimated flight duration, and a comprehensive list of expenses, including taxes and fuel costs. It’s a simple way to get a quick estimation of how much your charter flight might cost.</p>
            </section>

            <section className='pb-0'>
              <h2>Why Use a Charter Flights Cost Calculator</h2>
              <p>Understanding the cost of a charter flight can be complicated due to multiple variables involved. Our Charter Flights Cost Calculator simplifies this by offering instant, personalized estimates. Unlike making a phone call or sending an inquiry via email, which can be time-consuming, the calculator provides immediate results. This convenience allows you to plan your trip more effectively, manage your budget, and make quick decisions without waiting for replies from service providers.</p>

              <div className='mt-6'>
              {
              faqData.map((faq,index) => (
                <Collapsible  
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  iconStyle="caret"
                  iconPosition="end"
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)} 
                  classNames='bg-[#F7F9FB] mb-4'
                  backgroundColor="#F7F9FB"
                  answerClassName='!p-6'
                  questionClassName='text-lg text-black'
                  iconColor={'text-black'}
                />
              ))
            }
              </div>
            </section>

            <section className='pb-0'>
              <h2>What Affects Charter Flights Costs</h2>
              <p>The cost of chartering a flight can vary due to multiple factors. Firstly, the type of aircraft you choose affects the base rate. Secondly, distance and duration of the flight influence fuel costs. Seasonal demand can also fluctuate prices. If you require extra services like in-flight catering or ground transportation, those will be additional costs. Understanding these variables can help you make more informed decisions when using our calculator.</p>
            </section>

            <section className='pb-0'>
              <h2>Glossary of Terms</h2>
              <ul className='list-disc pl-4'>
                <li className='mb-3'>Base Charter Rate: Initial cost of renting the aircraft.</li>
                <li className='mb-3'>Fuel Surcharge: Additional charges for fuel, varies by distance.</li>
                <li className='mb-3'>Taxes: Government levies on the flight cost.</li>
                <li className='mb-3'>Additional Services: Extra amenities like food, Wi-Fi, etc.</li>
              </ul>
            </section>

            <section className='pb-0'>
              <h2>Downloadable Resources</h2>
              <p>For more comprehensive information on charter flight costs, we offer downloadable PDF guides. These resources delve deeper into cost structures, types of aircraft, and more.</p>
              <button className='p-3 bg-[#0071BA] text-white mt-8'>Click here to download</button>
            </section>
        </div>
      </div>
    </div>
  );
};

export default CostCalculatorPage;