"use client";

import React, { useState } from 'react';
import Collapsible from '@/components/Collapsible';

const EventDetail = ({ singleEvent }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <h2 className="text-[45px] text-[#0071BA] mb-5 mt-6">{singleEvent?.heading}</h2>
      <p className="text-[#727982] text-md mb-4 text-justify">{singleEvent?.description || ''}</p>

      <div className="mt-8">
        {singleEvent?.content?.map((faq: any, index: number)  => (
          <Collapsible
            key={index}
            question={faq.name}
            answer={
              <div>
                <p className="mb-4">{faq.description}</p>
                <ul>
                  {faq?.list?.map((item: any, idx: number) => (
                    <li className="mb-2" key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            }
            iconStyle="caret"
            iconPosition="end"
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventDetail;
