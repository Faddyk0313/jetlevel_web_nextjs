import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import TopCharteredCities from '@/components/TopCharteredCities'
import Hero from '@/sections/Hero'
import { Facebook, Linkedin, Twitter } from '@/svg'
import Image from 'next/image'
import React from 'react'

const OurTeamPage = () => {
  return (
    <section>
      <div className='flex justify-between'>
        <div className='w-full max-[650px]:w-full text-center'>
          <h2 className='text-[45px] text-black mb-5 mt-6'>MEET OUR TEAM MEMBERS</h2>
          <p className='text-[#727982] text-md mb-4 text-center mb-[50px]'>At JetLevel Aviation, our expert team is devoted to setting the gold standard in private jet travel. From your initial inquiry to your final destination, each member’s goal is to deliver unparalleled safety and personalized service. We distinguish ourselves through our boutique approach, pairing industry-leading safety credentials with a keen attention to each client’s unique needs. Experience for yourself why JetLevel is redefining the private jet charter industry.</p>
        </div>
      </div>
        
      <div>
        <h2 className='text-black text-center mb-[30px]'>Leadership</h2>
        <div className='flex items-center justify-between flex-wrap'>
        <div className="w-[32%] max-[700px]:w-full bg-[#EEEEEE] h-[500px] flex flex-col group justify-center items-center gap-x-[15px] p-6 hover:bg-[#0071BA] text-[#333333] hover:text-white transition-colors duration-300">
          <Image
            src="https://jetlevel.com/wp-content/uploads/2023/09/Ricky-Gomulka-Jet-Level-CEO-e1702364418323.png"
            alt="Ceo Photo"
            width={200}
            height={200}
            className="w-[160px] h-[160px] rounded-full"
          />
          <h4 className="text-[20px] font-bold mt-4 mb-4 group-hover:text-white">
            Ricky Gomulka
          </h4>
          <span className="text-[#777777] mb-5 text-[12px] group-hover:text-white">
            Founder & Managing Partner
          </span>
          <p className="text-center group-hover:text-white text-[15px]">
            Ricky brings extensive industry knowledge and strategic vision to JetLevel
            Aviation. As a co-founder and managing partner, his expertise in private
            aviation is instrumental in steering the company towards new heights.
          </p>
          <div className="flex gap-x-[30px] mt-[30px]">
            <Linkedin className="w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white" />
            <Facebook className="w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white" />
            <Twitter className="w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white" />
          </div>
        </div>


        <div className="w-[32%] max-[700px]:w-full bg-[#EEEEEE] h-[500px] flex flex-col group justify-center items-center gap-x-[15px] p-6 hover:bg-[#0071BA] text-[#333333] hover:text-white transition-colors duration-300">
          <Image
            src="https://jetlevel.com/wp-content/uploads/2023/10/1690029198597-jpeg.webp"
            alt="President Photo"
            width={200}
            height={200}
            className="w-[160px] h-[160px] rounded-full"
          />
          <h4 className="text-[20px] font-bold mt-4 mb-4 group-hover:text-white">
            Kevin Bales
          </h4>
          <span className="text-[#777777] mb-5 text-[12px] group-hover:text-white">
          Vice President
          </span>
          <p className="text-center group-hover:text-white text-[15px]">
          Kevin's role as Vice President is pivotal in driving JetLevel Aviation's growth. His leadership and in-depth understanding of the aviation market ensure operational excellence and client satisfaction.
          </p>
          <div className='flex gap-x-[30px] mt-[30px]'>
            <Linkedin className='w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white' />
            <Facebook className='w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white' />
            <Twitter className='w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white' />
          </div>
        </div>

        <div className="w-[32%] max-[700px]:w-full bg-[#EEEEEE] h-[500px] flex flex-col group justify-center items-center gap-x-[15px] p-6 hover:bg-[#0071BA] text-[#333333] hover:text-white transition-colors duration-300">
          <Image
            src="https://jetlevel.com/wp-content/uploads/2023/12/1698440487069-jpeg.webp"
            alt="Ceo Photo"
            width={200}
            height={200}
            className="w-[160px] h-[160px] rounded-full"
          />
          <h4 className="text-[20px] font-bold mt-4 mb-4 group-hover:text-white">
            Erin Melder
          </h4>
          <span className="text-[#777777] mb-5 text-[12px] group-hover:text-white">
            Flight Support & Client Services
          </span>
          <p className="text-center group-hover:text-white text-[15px]">
            With 20 years of experience in corporate aviation, Erin, an FAA Licensed Aircraft Dispatcher, excels in providing top-notch flight support and client services, ensuring safe and efficient operations for JetLevel Aviation.
          </p>
          <div className='flex gap-x-[30px] mt-[30px]'>
            <Linkedin className='w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white' />
            <Facebook className='w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white' />
            <Twitter className='w-[30px] bg-black rounded-full h-[30px] p-[5px] social-icons hover:bg-white' />
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default OurTeamPage