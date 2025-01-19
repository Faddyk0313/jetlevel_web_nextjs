import React from 'react'
import events from '../../events.json';
import Image from 'next/image';
import Link from 'next/link';

const Events = ({eventsData}:any) => {
  // console.log('eventsData',eventsData);

  return (
    <div>
      {
        events.event.map((items, index) => 
        <div key={index}>
          <h2 className='mt-[20px] text-[30px]'>{items.name}</h2>
          <div className='flex gap-x-[33px] mt-6 flex-wrap gap-y-[30px] mb-[50px]'>
            {
              items.content.map((data) =>
                <div className='w-[31%] max-[650px]:w-full'>
                   <img
                    src={data.image}
                    alt={data.heading}
                    width={200} 
                    height={200} 
                    className="object-cover h-[170px] w-full max-[650px]:mb-6"
                  />
                  <Link href={`/events/${data.heading.replace(/ /g, '-').toLowerCase()}`}>
                    <h3 className='font-bold text-[#54595F] text-[17px] mt-4 hover:underline'>{data.heading}</h3>
                  </Link>
                </div>
              )
            }
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Events