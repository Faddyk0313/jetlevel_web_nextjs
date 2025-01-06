import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React, { Suspense } from 'react';
import LeadForm from '@/components/LeadForm';
import HalfSection from '@/components/HalfSection';

export const metadata = {
  title: 'Request a Quote​ | JetLevel Aviation',
  description: 'Luxury and convenience in the skies with our Charter Flights request a quote tool. Fill out this form and get our expert aviation advisor to assist you.',
}

export const dynamic = 'force-static';
export const revalidate = false;

const RequestQuotePage = () => {
  return (
    <div>
      <Hero title="Private Jet Charter Request a Quote" description="Experience Personalized Service and Hassle-Free Booking" image="/images/Request A Quote Hero.jpg" hasOverlay={true} hasCalculator={true} showCalculator='LeadForm' />
      <BrandNames />
     
     <HalfSection>
     <div className='flex flex-col justify-center gap-y-[20px] pt-8'>
        <div>
          <h2 className=''>Thank you for your interest in JetLevel Aviation!</h2>
          <p className='text-black  mt-[40px] mb-[50px] text-md '>Fill out the form for a free personalized estimate for your private jet quotes. Book directly or contact our sales team for assistance. Plan your journey hassle-free with our <span className='text-[#0071BA]'>Free instant quotation Tool</span></p>

            <section className='pt-[40px] py-0'>
              <h2 className=' mb-3'>About the Charter Flight Quote</h2>
              <p className='text-md text-black mb-5 '>Upon filling up the form with the desired information, users will receive a comprehensive breakdown of the estimated flight time and aircraft type for their charter flight. The breakdown will include the following :</p>
              <ul className='list-disc ml-5'>
                <li><span className='text-[#0071ba] font-bold'>Aircraft Recommendation:</span>  Based on the number of passengers or any other relevant criteria, this tool will recommend a suitable aircraft type for their trip. It could be a turbo prop, light jet, midsize jet, or any other appropriate option.</li>
                <li><span className='text-[#0071ba] font-bold'>Estimated Flight Time:</span>  This tool will provide an estimated flight duration for the selected route. This information helps users plan their travel schedule more effectively.</li>
              </ul>
              <p className='italic  mt-9'>To obtain a formal quote tailored to their specific requirements, users are encouraged to request one after receiving the initial estimate.</p>
            </section>
        </div>
      </div>
     </HalfSection>
      
    </div>
  );
};

export default RequestQuotePage;