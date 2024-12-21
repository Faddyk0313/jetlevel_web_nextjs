"use client";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { Airplane, Broker, Terminal, Charter, Price, Service } from '@/svg'
import React, { useState } from 'react'
import Collapsible from '@/components/Collapsible'
import Link from 'next/link';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
    
  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
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
  const faqData = [
    {
      heading:'Aircraft',
      id:'aircraft',
      content:[
        {
          question:'Can I charter a helicopter along with a jet?',
          id:'can-i-charter-a-helicopter-along-with-a-jet',
          answer:<div>
            <Link href={`/faq/can-i-charter-a-helicopter-along-with-a-jet`}><p>Read more</p></Link>
          </div>
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          answer:'Read more'
        }
      ]
    },
    {
      heading:'Airports',
      id:'airports',
      content:[
        {
          question:'Can I charter a helicopter along with a jet?',
          id:'can-i-charter-a-helicopter-along-with-a-jet',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        }
      ]
    },
    {
      heading:'Broker',
      id:'broker',
      content:[
        {
          question:'Can I charter a helicopter along with a jet?',
          id:'can-i-charter-a-helicopter-along-with-a-jet',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        }
      ]
    },
    {
      heading:'Charter',
      id:'charter',
      content:[
        {
          question:'Can I charter a helicopter along with a jet?',
          id:'can-i-charter-a-helicopter-along-with-a-jet',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        }
      ]
    },
    {
      heading:'Price',
      id:'price',
      content:[
        {
          question:'Can I charter a helicopter along with a jet?',
          id:'can-i-charter-a-helicopter-along-with-a-jet',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        }
      ]
    },
    {
      heading:'Service',
      id:'service',
      content:[
        {
          question:'Can I charter a helicopter along with a jet?',
          id:'can-i-charter-a-helicopter-along-with-a-jet',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        },
        {
          question:'What are the differences between light, midsize, and heavy jets?',
          id:'what-are-the-differences-between-light-midsize-and-heavy-jets',
          answer:'Read more'
        }
      ]
    }
  ]

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const headerOffset = 80;
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <div>
       <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
       <Breadcrumb />
        <div className='flex justify-between'>
          <div className='w-full max-[650px]:w-full'>
            
            <h1 className='text-[45px] text-[#0071BA] text-center mb-5 mt-6'>Frequently Asked Questions</h1>
            <div className='flex relative mt-10'>
              <div className='flex flex-col gap-y-8 w-[30%] items-center sticky top-[105px] h-[400px]'>
                {
                  sidebar.map((item) => (
                    <div 
                      key={item.id}
                      className='flex items-center gap-x-4 gap-y-4 cursor-pointer'  
                      onClick={() => scrollToSection(item.id)}
                    >
                      <div className='w-[40] h-[40px]'>
                        {item.icon}
                      </div>
                      <p className='text-[18px] font-bold'>{item.name}</p>
                    </div>
                  ))
                }
              </div>

              <div className='w-[68%] mt-6'>
                {
                  faqData.map((faq,index) => (
                   <div key={index} id={faq.id}>
                    <h3 className='bg-[#F9F9F9] p-3 mb-4'>{faq.heading}</h3>
                    {
                      faq.content.map((content,index) =>(
                        <Collapsible  
                          key={index}
                          question={content.question}
                          answer={content.answer}
                          iconStyle="caret"
                          iconPosition="start"
                          isOpen={openIndex === index}
                          onClick={() => handleToggle(index)} 
                          classNames={`${openIndex === index ? 'border border-b-0 font-bold':''} bg-white mb-[14px]`}
                          backgroundColor="#F7F9FB"
                          answerClassName={`${openIndex === index ? 'border-r border-l border-b':''} !p-3 font-bold !text-[#0573BD] text-[17px] !pl-10`}
                          questionClassName={`text-lg text-black  ${openIndex === index ? 'font-bold':' font-[400]'}`}
                          iconColor={'text-black'}
                        />
                      ))
                    }
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