import React from 'react'
import ContactUsForm from './ContactUsForm'

const ContactUsPage = () => {
  return (
    <div className='flex justify-between gap-5 my-12'>
      <div className='w-[48%]'>
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
      <div className='w-[48%]'>
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactUsPage