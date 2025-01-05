"use client"

import { Airplane, Broker, Terminal, Charter, Price, Service } from '@/svg';
import Link from 'next/link';
import React, { useState } from 'react';
import Collapsible from '@/components/Collapsible'

// interface FaqContentProps {
//     content: any;
//   }
  
// const FaqContent:React.FC<FaqContentProps> = ({content}) => {
const FaqContent = () => {

  // console.log("--------", content)

    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const sidebar = [
    {
      name: 'Aircraft',
      icon: <Airplane />,
      id: 'aircraft'
    },
    {
      name: 'Airport',
      icon: <Terminal />,
      id: 'airports'
    },
    {
      name: 'Broker',
      icon: <Broker />,
      id: 'broker'
    },
    {
      name: 'Charter',
      icon: <Charter />,
      id: 'charter'
    },
    {
      name: 'Price',
      icon: <Price />,
      id: 'price'
    },
    {
      name: 'Service',
      icon: <Service />,
      id: 'service'
    }
  ];

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

      const hash = window.location.hash.slice(1);
      if (hash && hash === id) {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        return;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='flex relative mt-10 max-[700px]:w-full max-[700px]:flex-col'>
              <div className='flex flex-col gap-y-8 gap-x-8 max-[700px]:overflow-y-hidden max-[700px]:overflow-x-auto  w-[20%] max-[700px]:w-full max-[700px]:flex-row items-start max-[700px]:relative sticky max-[700px]:top-0 top-[105px] max-[700px]:h-[80px] h-[400px]'>
                {
                  sidebar.map((item, index) => (
                    <div
                      key={index}
                      className='flex max-[700px]:flex-col max-[700px]:gap-x-[10px] max-[700px]:justify-between items-center gap-x-4 gap-y-4 cursor-pointer'
                      onClick={() => scrollToSection(item.id)}
                    >
                      <div className='w-[30%] h-[40px]'>
                        {item.icon}
                      </div>
                      <div className='w-[68%]'>
                        <p className='text-[18px] font-bold'>{item.name}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

              <div className='w-[80%] max-[700px]:w-full max-[700px]:mt-[50px]'>
                {
                  faqData.map((faq, index) => (
                    <div key={index} id={faq.id} className='pb-8'>
                      <h2 className='bg-[#F9F9F9] p-3 mb-6'>{faq.heading}</h2>
                      {
                        faq.content.map((content, index) => (
                          <Collapsible
                            key={index}
                            question={content.question}
                            answer={content.answer}
                            iconStyle="caret"
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                            answerClassName={`font-bold !text-[#0573BD]`}
                            isfaq={true}
                          />
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
  )
}

export default FaqContent
