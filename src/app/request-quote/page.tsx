import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React, { Suspense } from 'react';
import LeadForm from '@/components/LeadForm';

const RequestQuotePage = () => {
  return (
    <div>
      <Hero title="Private Jet Charter Request a Quote" description="Experience Personalized Service and Hassle-Free Booking" image="https://jetlevel.com/wp-content/uploads/2019/10/iStock-1073242590-e1687592795610.jpg" hasOverlay={true} hasCalculator={true} showCalculator={false} />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className='min-w-full md:min-w-[72%]'>
          <Breadcrumb />
        </div>
      </section>
      <div className='flex flex-col justify-center gap-y-[20px] p-8'>
        <div className='px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto'>
          <h2 className='text-center'>Thank you for your interest in JetLevel Aviation!</h2>
          <p className='text-black text-center mt-[40px] mb-[50px] text-md details'>Fill out the form for a free personalized estimate for your private jet quotes. Book directly or contact our sales team for assistance. Plan your journey hassle-free with our <span className='text-[#0071BA]'>Free instant quotation Tool</span></p>
            <div className='flex justify-center'>
               <div className='w-full outline-none h-auto' id="my-iframe">
                  <Suspense fallback={<div className="search-form__loader"></div>}>
                      <LeadForm/>
                  </Suspense>
                </div>
            </div>

            <section className='pt-[40px] py-0'>
              <h2 className='text-center mb-3'>About the Charter Flight Quote</h2>
              <p className='text-md text-black mb-5 details'>Upon filling up the form with the desired information, users will receive a comprehensive breakdown of the estimated flight time and aircraft type for their charter flight. The breakdown will include the following details:</p>
              <ul className='list-disc ml-5'>
                <li><span className='text-[#0071ba] font-bold'>Aircraft Recommendation:</span>  Based on the number of passengers or any other relevant criteria, this tool will recommend a suitable aircraft type for their trip. It could be a turbo prop, light jet, midsize jet, or any other appropriate option.</li>
                <li><span className='text-[#0071ba] font-bold'>Estimated Flight Time:</span>  This tool will provide an estimated flight duration for the selected route. This information helps users plan their travel schedule more effectively.</li>
              </ul>
              <p className='italic text-center mt-9'>To obtain a formal quote tailored to their specific requirements, users are encouraged to request one after receiving the initial estimate.</p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default RequestQuotePage;