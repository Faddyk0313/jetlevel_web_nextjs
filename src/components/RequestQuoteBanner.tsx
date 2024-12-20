import React from 'react'

const RequestQuoteBanner = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${'https://jetlevel.com/wp-content/uploads/2023/05/private-jet-charter-services-1.jpg'})`}}
      className='h-[550px] w-full bg-cover bg-center flex items-center justify-center'
    >
     <div className='flex flex-col items-center justify-center gap-y-[10px]'>
      <h3 className='text-white text-[52px]'>Aviation Agents Standing by 24/7 to Assist.</h3>
      <p className='text-white text-[24px] text-center'>Call us now to book! <span className='font-bold'>1-855-JETLEVEL</span></p>
      <button className='uppercase bg-[#0071BA] p-3 text-white font-[500px] hover:underline'>Request a Quote</button>
     </div>
    </div>
  )
}

export default RequestQuoteBanner