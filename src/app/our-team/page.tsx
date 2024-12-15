import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import TopCharteredCities from '@/components/TopCharteredCities'
import Hero from '@/sections/Hero'
import { Facebook, Linkedin, Twitter } from '@/svg'
import Image from 'next/image'
import React from 'react'

const OurTeamPage = () => {
  return (
    <div>
       <Hero 
        title="Our Team" 
        image="https://jetlevel.com/wp-content/uploads/2023/09/ban_jets-jpg.webp" 
        hasCalculator={false} 
        hasOverlay={true}
      />
      <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
       <Breadcrumb />
        <div className='flex justify-between'>
          <div className='w-[73%] max-[650px]:w-full'>
            <h2 className='text-[45px] text-[#0071BA] mb-5 mt-6'>MEET OUR TEAM MEMBERS</h2>
            <p className='text-[#727982] text-md mb-4 text-justify'>At JetLevel Aviation, our expert team is devoted to setting the gold standard in private jet travel. From your initial inquiry to your final destination, each member’s goal is to deliver unparalleled safety and personalized service. We distinguish ourselves through our boutique approach, pairing industry-leading safety credentials with a keen attention to each client’s unique needs. Experience for yourself why JetLevel is redefining the private jet charter industry.</p>
          </div>
          
          <div className="min-w-[24%] max-w-fit  mt-[76px] max-[650px]:hidden">
            <TopCharteredCities
              title="Airports For"
              cities={[
                { name: "New York, NY", link: "#" },
                { name: "Aspen, CO", link: "#" },
                { name: "Los Angeles, CA", link: "#" },
                { name: "San Francisco, CA", link: "#" },
                { name: "Miami, FL", link: "#" },
                { name: "Chicago, IL", link: "#" },
                { name: "Houston, TX", link: "#" },
                { name: "Dallas, TX", link: "#" },
                { name: "Las Vegas, NV", link: "#" },
                { name: "Denver, CO", link: "#" },
              ]}
              buttonLink="#"
            />
          </div>
        </div>
        
        <div>
          <h2>Leadership</h2>
          <div className='flex items-center justify-between'>
          <div className="w-[32%] bg-[#EEEEEE] flex flex-col group justify-center items-center gap-x-[15px] p-6 hover:bg-[#0071BA] text-[#333333] hover:text-white transition-colors duration-300">
            <Image
              src="https://jetlevel.com/wp-content/uploads/2023/09/Ricky-Gomulka-Jet-Level-CEO-e1702364418323.png"
              alt="Ceo Photo"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-full"
            />
            <h4 className="text-[20px] font-bold mt-4 mb-4 group-hover:text-white">
              Ricky Gomulka
            </h4>
            <span className="text-[#777777] mb-5 text-[12px] group-hover:text-white">
              Founder & Managing Partner
            </span>
            <p className="text-center group-hover:text-white">
              Ricky brings extensive industry knowledge and strategic vision to JetLevel
              Aviation. As a co-founder and managing partner, his expertise in private
              aviation is instrumental in steering the company towards new heights.
            </p>
            <div className='flex gap-x-[30px] mt-[30px]'>
              <Linkedin className='w-[25px] bg-black rounded-full h-[25px] p-[5px] social-icons hover:bg-white' />
              <Facebook className='w-[25px] bg-black rounded-full h-[25px] p-[5px]' />
              <Twitter className='w-[25px] bg-black rounded-full h-[25px] p-[5px]' />
            </div>
          </div>

          <div className="w-[32%] bg-[#EEEEEE] flex flex-col group justify-center items-center gap-x-[15px] p-6 hover:bg-[#0071BA] text-[#333333] hover:text-white transition-colors duration-300">
            <Image
              src="https://jetlevel.com/wp-content/uploads/2023/09/Ricky-Gomulka-Jet-Level-CEO-e1702364418323.png"
              alt="Ceo Photo"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-full"
            />
            <h4 className="text-[20px] font-bold mt-4 mb-4 group-hover:text-white">
              Ricky Gomulka
            </h4>
            <span className="text-[#777777] mb-5 text-[12px] group-hover:text-white">
              Founder & Managing Partner
            </span>
            <p className="text-center group-hover:text-white">
              Ricky brings extensive industry knowledge and strategic vision to JetLevel
              Aviation. As a co-founder and managing partner, his expertise in private
              aviation is instrumental in steering the company towards new heights.
            </p>
          </div>

          <div className="w-[32%] bg-[#EEEEEE] flex flex-col group justify-center items-center gap-x-[15px] p-6 hover:bg-[#0071BA] text-[#333333] hover:text-white transition-colors duration-300">
            <Image
              src="https://jetlevel.com/wp-content/uploads/2023/09/Ricky-Gomulka-Jet-Level-CEO-e1702364418323.png"
              alt="Ceo Photo"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-full"
            />
            <h4 className="text-[20px] font-bold mt-4 mb-4 group-hover:text-white">
              Ricky Gomulka
            </h4>
            <span className="text-[#777777] mb-5 text-[12px] group-hover:text-white">
              Founder & Managing Partner
            </span>
            <p className="text-center group-hover:text-white">
              Ricky brings extensive industry knowledge and strategic vision to JetLevel
              Aviation. As a co-founder and managing partner, his expertise in private
              aviation is instrumental in steering the company towards new heights.
            </p>
          </div>
          </div>
        </div>
       </section>
    </div>
  )
}

export default OurTeamPage