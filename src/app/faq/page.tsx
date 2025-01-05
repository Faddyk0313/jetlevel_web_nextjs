
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { Airplane, Broker, Terminal, Charter, Price, Service } from '@/svg'
import React, { useState } from 'react'
import Collapsible from '@/components/Collapsible'
import Link from 'next/link';
import BrandNames from '@/sections/BrandNames';
import FaqContent from '@/components/FaqContent';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about private jet charters, including booking processes, flight flexibility, destinations, and cancellation policies.',
}

const FaqPage = () => {
  
  return (
    <div>
       <div className="bg-[url('/images/blog-hero-image.jpg')] bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
          <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white ">
          Frequently Asked Questions
          </h1>
        </div>
      <BrandNames />
       <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
       <Breadcrumb />
        <div className='flex justify-between'>
          <div className='w-full max-[650px]:w-full'>
            
            <FaqContent />
            
          </div>
        </div>
       </section>
    </div>
  )
}

export default FaqPage