import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import { Facebook, Linkedin, Twitter } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OurTeamPage = () => {
  return (
    <>
    <div className="bg-[url('/hero_images/3.png')] overlay bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white ">
          Our Team
        </h1>
      </div>
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 pb-0 max-w-[1800px] mx-auto">
        <Breadcrumb />
      </section>
      <section className="px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto">
      <div className='flex justify-between'>
        <div className='w-full max-[650px]:w-full text-center'>
          <h2 className='mb-5 mt-6'>MEET OUR TEAM MEMBERS</h2>
          <p className='text-[#727982] text-md text-center mb-[50px] details'>At JetLevel Aviation, our expert team is devoted to setting the gold standard in private jet travel. From your initial inquiry to your final destination, each member’s goal is to deliver unparalleled safety and personalized service. We distinguish ourselves through our boutique approach, pairing industry-leading safety credentials with a keen attention to each client’s unique needs. Experience for yourself why JetLevel is redefining the private jet charter industry.</p>
        </div>
      </div>

        <h2 className=' text-center mb-[30px]'>Leadership</h2>
        <div className='flex items-center justify-between flex-wrap'>
        <div className="w-[32%] rounded-2xl mb-6 max-[700px]:w-full border-[3px] bg-blue-background hover:shadow-card_shadow bg-cover h-[500px] flex flex-col group justify-center items-center gap-x-[15px] p-6  text-white transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue">
          <Image
            src="/images/Ricky-Gomulka-Jet-Level-CEO-With Wife.png"
            alt="Ceo Photo"
            width={200}
            height={200}
            className="w-[160px] h-[160px] rounded-full"
          />
          <h4 className="text-[20px] font-bold mt-4 mb-4 ">
            Ricky Gomulka
          </h4>
          <span className=" mb-5 text-[12px] text-white">
            Founder & Managing Partner
          </span>
          <p className="text-center  text-[15px]">
            Ricky brings extensive industry knowledge and strategic vision to JetLevel
            Aviation. As a co-founder and managing partner, his expertise in private
            aviation is instrumental in steering the company towards new heights.
          </p>
          <div className="flex gap-x-[30px] mt-[30px]">
            <Link href={'https://www.linkedin.com/in/ricky-gomulka-98879212/'}><Linkedin className="w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white" /></Link>
          </div>
        </div>

        <div className="w-[32%] rounded-2xl mb-6 max-[700px]:w-full border-[3px] bg-blue-background hover:shadow-card_shadow bg-cover h-[500px] flex flex-col group justify-center items-center gap-x-[15px] p-6  text-white transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue">
          <Image
            src="/images/President Photo.webp"
            alt="President Photo"
            width={200}
            height={200}
            className="w-[160px] h-[160px] rounded-full"
          />
          <h4 className="text-[20px] font-bold mt-4 mb-4 ">
            Kevin Bales
          </h4>
          <span className=" mb-5 text-[12px] text-white">
          Vice President
          </span>
          <p className="text-center  text-[15px]">
          Kevin's role as Vice President is pivotal in driving JetLevel Aviation's growth. His leadership and in-depth understanding of the aviation market ensure operational excellence and client satisfaction.
          </p>
          <div className='flex gap-x-[30px] mt-[30px]'>
            <Link href={'https://www.linkedin.com/in/kevin-g-b-50a29327/'} ><Linkedin className='w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white' /></Link>
          </div>
        </div>

        <div className="w-[32%] rounded-2xl mb-6 max-[700px]:w-full border-[3px] bg-blue-background hover:shadow-card_shadow bg-cover h-[500px] flex flex-col group justify-center items-center gap-x-[15px] p-6  text-white transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue">
          <Image
            src="/images/Ceo Photo.webp"
            alt="Ceo Photo"
            width={200}
            height={200}
            className="w-[160px] h-[160px] rounded-full"
          />
          <h4 className="text-[20px] font-bold mt-4 mb-4 ">
            Erin Melder
          </h4>
          <span className=" mb-5 text-[12px] text-white">
            Flight Support & Client Services
          </span>
          <p className="text-center  text-[15px]">
            With 20 years of experience in corporate aviation, Erin, an FAA Licensed Aircraft Dispatcher, excels in providing top-notch flight support and client services, ensuring safe and efficient operations for JetLevel Aviation.
          </p>
          <div className='flex gap-x-[30px] mt-[30px]'>
            <Link href={'https://www.linkedin.com/in/erin-melder-50a538b9/'} ><Linkedin className='w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white' /></Link>
          </div>
        </div>
    </div>
    </section>
    </>
  
  );
};

export default OurTeamPage;