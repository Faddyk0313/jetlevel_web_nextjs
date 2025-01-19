import React from 'react'
import ContactUsForm from './ContactUsForm'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import BrandNames from '@/sections/BrandNames'
import SmartTravelTools from '@/sections/SmartTravelTools'
import PopularPrivateJetCharters from '@/sections/PopularPrivateJetCharters'

const ContactUsPage = () => {
  return (
    <>
     <div className="bg-[url('/hero_images/2.png')] overlay bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white ">
          Contact us
        </h1>
      </div>
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto">
        <Breadcrumb />
      </section>

      <div className='flex justify-between mt-6 flex-wrap mb-10 max-[750px]:block gap-10 px-5 md:px-10 lg:px-20 py-7 max-w-[1800px] mx-auto'>
        <div className='w-[48%] max-[750px]:w-full'>
          <h3 className='font-bold'>VISIT OUR ORLANDO OFFICE</h3>
          <p className='text-[#666666] text-lg'>3505 Lake Lynda Dr Suite 200 Orlando,FL 32817</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14011.853837535233!2d-81.221936!3d28.600873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77bcb564732cd%3A0x4592f58008ffe406!2sJetLevel%20Aviation!5e0!3m2!1sen!2sus!4v1734257222611!5m2!1sen!2sus" 
            width="600" 
            height="450"  
            loading="lazy" 
            className='w-full h-[200px] mt-6'
          />
          <h3 className='font-bold mt-10 mb-2'>VISIT OUR OCALA OFFICE AT SHELTAIR</h3>
          <p className='text-[#666666] text-lg'>1770 SW 60th Ave Suite 400, Ocala, FL 34474</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13934.999791492923!2d-82.219953!3d29.17204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e87ff6b10c3f93%3A0x302d9abd2e4e2ac5!2sSheltair%20Aviation%20OCF!5e0!3m2!1sen!2sus!4v1734257292468!5m2!1sen!2sus"
            width="600" 
            height="450" 
            loading="lazy" 
          className='w-full h-[200px] mt-4'
          />
        </div>
        <div className='w-[48%] max-[750px]:w-full max-[750px]:mt-[30px]'>
          <ContactUsForm />
        </div>
      </div>
      <SmartTravelTools />
      <PopularPrivateJetCharters />
    </>
  )
}

export default ContactUsPage