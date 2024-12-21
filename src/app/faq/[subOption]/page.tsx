import React, { Suspense } from 'react'
import { Airplane, Broker, Terminal, Charter, Price, Service } from '@/svg'
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
const FaqDetailPage = () => {
  const sidebar = [
    {
      name:'Aircraft',
      icon:<Airplane />,
      id:'aircraft'
    },
    {
      name:'Airport',
      icon:<Terminal />,
      id:'airports'
    },
    {
      name:'Broker',
      icon:<Broker />,
      id:'broker'
    },
    {
      name:'Charter',
      icon:<Charter />,
      id:'charter'
    },
    {
      name:'Price',
      icon:<Price />,
      id:'price'
    },
    {
      name:'Service',
      icon:<Service />,
      id:'service'
    }
  ]

  const relatedQuestion = [
    {
      question:'What is a charter flight?',
      id:'what-is-a-charter-flight'
    },
    {
      question:'Can I arrange for medical services or special assistance during the flight?',
      id:'can-i-arrange-for-medical-services-or-special-assistance-during-the-flight'
    },
    {
      question:'Do you offer concierge services for hotel bookings and ground transfers?',
      id:'do-you-offer-concierge-services-for-hotel-bookings-and-ground-transfers',
    },
    {
      question:'Can I request special in-flight services like catering or ground transportation?',
      id:'can-i-request-special-in-flight-services-like-catering-or-ground-transportation',
    },
    {
      question:'What services are included when I book a private jet charter?',
      id:'what-services-are-included-when-i-book-a-private-jet-charter',
    },
    {
      question:'What are the cancellation and refund policies for charter flights?',
      id:'what-are-the-cancellation-and-refund-policies-for-charter-flights',
    }
  ]
  return (
    <div className='md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto'>
      <div className='flex justify-between'>
      <div className='w-[67%] text-justify'>
        <h2>Can I charter a helicopter along with a jet?</h2>
        <p className='mt-2 leading-7 text-md'>A charter flight is a non-scheduled flight booked by an individual, group, or company for private use. Unlike commercial airlines which follow set routes and schedules, a charter flight is tailored to your needs. You can choose your destination, departure time and even the type of aircraft. Whether you’re flying for business, pleasure, or transporting cargo, charter flights offer flexibility and comfort you can’t get on a commercial flight.</p>
        <p className='mt-2 leading-7 text-md'>Charter flights can be for short or long haul, skip the crowds, and long security queues. They are popular with high-profile individuals, businesses, and those who want a more luxurious and exclusive travel experience. Ultimately a charter flight is about creating a bespoke flying experience that puts the passenger first.</p>

        <h2>Types of Charter Flights</h2>
        <p className='mt-2 leading-7 text-md'>Charter flights come in many forms depending on the purpose and client. Below are the main</p>

        <h2>Public and Private Charter Flight</h2>
        <p className='mt-2 leading-7 text-md'>In a public charter an organization or travel agency rents an aircraft to transport a group of people, usually for holidays or events. It’s cheaper than private jets but still offers some level of exclusivity compared to commercial airlines. A public charter is not the same as a private charter flight which offers a more exclusive and bespoke travel experience.</p>

        <h2>Public and Private Charter Flight</h2>
        <p className='mt-2 leading-7 text-md'>In a public charter an organization or travel agency rents an aircraft to transport a group of people, usually for holidays or events. It’s cheaper than private jets but still offers some level of exclusivity compared to commercial airlines. A public charter is not the same as a private charter flight which offers a more exclusive and bespoke travel experience.</p>

        <h2>Public and Private Charter Flight</h2>
        <p className='mt-2 leading-7 text-md'>In a public charter an organization or travel agency rents an aircraft to transport a group of people, usually for holidays or events. It’s cheaper than private jets but still offers some level of exclusivity compared to commercial airlines. A public charter is not the same as a private charter flight which offers a more exclusive and bespoke travel experience.</p>
        <h2>Public and Private Charter Flight</h2>
        <p className='mt-2 leading-7 text-md'>In a public charter an organization or travel agency rents an aircraft to transport a group of people, usually for holidays or events. It’s cheaper than private jets but still offers some level of exclusivity compared to commercial airlines. A public charter is not the same as a private charter flight which offers a more exclusive and bespoke travel experience.</p>
        <h2>Public and Private Charter Flight</h2>
        <p className='mt-2 leading-7 text-md'>In a public charter an organization or travel agency rents an aircraft to transport a group of people, usually for holidays or events. It’s cheaper than private jets but still offers some level of exclusivity compared to commercial airlines. A public charter is not the same as a private charter flight which offers a more exclusive and bespoke travel experience.</p>
      </div>


      <div className='w-[28%] mt-8 sticky top-0 h-full'>
        <h3 className='font-bold text-xl mb-4'>Related Questions</h3>
        <div className='mb-7'>
          {
            relatedQuestion.map((question,index) => (
              <Link href={`/faq/${question.id}`}>
               <p className='text-[#6EC1E4] text-[16px] font-medium hover:underline curdor-pointer mb-4' key={index}>{question.question}</p>
              </Link>
            ))
          }
        </div>

        <div>
          <h3 className='font-bold text-xl mb-4'>GO TO CATEGORY:</h3>
          <div className='flex flex-col gap-y-4 w-[30%] items-center sticky top-[105px] h-[400px]'>
            {
              sidebar.map((item) => (
                <div 
                  key={item.id}
                  className='flex items-center gap-x-4 gap-y-4 cursor-pointer'  
                  // onClick={() => scrollToSection(item.id)}
                >
                  <div className='w-[40] h-[40px]'>
                    {item.icon}
                  </div>
                  <p className='text-[18px]'>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      </div>
     
      <section>
        <h2 className='text-center mb-6'>Use our quote calculator to estimate private jet charter prices</h2>
        <div className='w-[90%] m-[0_auto] outline-none h-auto' id="my-iframe">
          <Suspense fallback={<div className="search-form__loader"></div>}>
              <LeadForm />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

export default FaqDetailPage