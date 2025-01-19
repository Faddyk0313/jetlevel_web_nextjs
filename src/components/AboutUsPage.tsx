import BrandNames from '@/sections/BrandNames';
import Image from 'next/image';
import React from 'react';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import HalfSection from './HalfSection';

const AboutUsPage = () => {
  return (
    <>
     <div className="bg-[url('/hero_images/1.png')] overlay bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white ">
          About us
        </h1>
      </div>
      <BrandNames />
      <HalfSection showBottomContent={true}>
        <section className='py-12'>
        <div className='flex gap-x-6 min-[900px]:items-center flex-row max-[900px]:flex-col'>
          <div>
            <h2>About Us</h2>
            <p className=''>JetLevel Aviation was founded by a team of industry professionals with over 10 years experience in the Private Jet Charter Industry. With access to over 5000 aircraft globally we can provide customized solutions for all of your Private Jet Charter needs.</p>
            <p className='mt-3 '>Our mission is to provide consumers with fully transparent information so they can make informed buying decisions. We go the extra mile when it comes to gathering  about your mission so we can provide Good, Better, and Best options that align with your request. This is achieved by building long term relationships with our clients and learning about your needs so we can provide customized solutions that will align with each and every mission.</p>
          </div>
        </div>

        <div className='flex item-center justify-between mt-[40px] flex-wrap max-[650px]:gap-y-[40px]'>
          <div className='w-[32%] max-[650px]:w-full max-[650px]:text-center'>
            <h3 className='font-bold text-darkBlue'>Safety Above All</h3>
            <p className=''>At JetLevel we take your safety very seriously. All operators in our preferred network must adhere to very strict safety standards and participate in third party safety audits to ensure the data we collect is accurate. Rest assured that when you book a Private Jet with JetLevel Aviation you will be flying on the safest and most reliable aircraft in the industry.</p>
          </div>
          <div className='w-[32%] max-[650px]:w-full max-[650px]:text-center'>
            <h3 className='font-bold text-darkBlue'>Reliability</h3>
            <p className=''>Our highly experienced agents are standing by 24/7 to assist with all of your Private Jet Charter needs. Call us now and we can have you airborne in as little as 2-4 hours from almost any location in the world.</p>
          </div>
          <div className='w-[32%] max-[650px]:w-full max-[650px]:text-center'>
            <h3 className='font-bold text-darkBlue'>Transparency</h3>
            <p className=''>At JetLevel we believe that Trust and Transparency are the key components to building long lasting relationships with our clients and operators. Our goal is to provide you with hassle free service built around fair, honest, and transparent pricing methods.</p>
            <p className='mt-3 '> Give us a call today to arrange your next Private Jet Charter flight and you will experience service at the highest level! JetLevel</p>
          </div>
        </div>

        </section>
      </HalfSection>
    
    </>
  );
};

export default AboutUsPage;