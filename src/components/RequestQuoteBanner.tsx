import React from 'react'
import Button from '@/components/Button'

const RequestQuoteBanner = () => {
  return (
    <div 
      style={{ backgroundImage: `url('/images/request-quote-banner.jpg)`}}
      className='h-[550px] w-full bg-cover bg-center flex items-center justify-center'
    >
     <div className='flex flex-col items-center justify-center gap-y-[10px]'>
      <h3 className='text-white text-[52px]'>Aviation Agents Standing by 24/7 to Assist.</h3>
      <p className='text-white text-[24px] text-center'>Call us now to book! <span className='font-bold'>1-855-JETLEVEL</span></p>
      <Button
        text='Request a Quote'
        variant='primary'
      />
     </div>
    </div>
  )
}

export default RequestQuoteBanner