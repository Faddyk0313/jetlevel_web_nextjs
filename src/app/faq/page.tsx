import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { Aircraft, Airports } from '@/svg'
import React from 'react'

const FaqPage = () => {
  const sidebar = [
    {
      name:'Aircraft',
      icon:<Aircraft />
    },
    {
      name:'Airport',
      icon:<Airports />
    },
    {
      name:'Broker',
      icon:''
    },
    {
      name:'Charter',
      icon:''
    },
    {
      name:'Price',
      icon:''
    },
    {
      name:'Service',
      icon:''
    }
  ]
  return (
    <div>
       <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
       <Breadcrumb />
        <div className='flex justify-between'>
          <div className='w-full max-[650px]:w-full'>
            
            <h1 className='text-[45px] text-[#0071BA] text-center mb-5 mt-6'>Frequently Asked Questions</h1>
            <div>
              <div>
                {
                  sidebar.map((item) => (
                    <div>
                      {item.icon}
                      <p>{item.name}</p>
                    </div>
                  ))
                }
              </div>
              
            </div>
          </div>
        </div>
        
       </section>
    </div>
  )
}

export default FaqPage