
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Airplane, Broker, Terminal, Charter, Price, Service } from '@/svg';
import React, { useState } from 'react';
import Collapsible from '@/components/Collapsible';
import Link from 'next/link';
import BrandNames from '@/sections/BrandNames';
import FaqContent from '@/components/FaqContent';
import { ContentData, ContentoClient } from '@gocontento/client';
import { createClient } from '@/lib/contento';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about private jet charters, including booking processes, flight flexibility, destinations, and cancellation policies.',
};

async function fetchAllContent(contentArray: {content_link: string}[], client: ContentoClient) {
  // Create an empty array to store the fetched content
  const fetchedContentArray = [];

  // Iterate over the array of content links
  for (const item of contentArray) {
      // Extract the ID by removing 'ref:' prefix from content_link
      const id = item.content_link.replace('ref:', '');

      try {
          // Fetch content using client.getContentById and add it to the array
          const content = await client.getContentById(id);
          fetchedContentArray.push(content);
      } catch (error) {
          console.error(`Error fetching content for ID: ${id}`, error);
      }
  }

  // Return the array containing all fetched content
  return fetchedContentArray;
}


const FaqPage = async () => {

  const client = createClient();
  let response = await client.getContentById("c_01jgRD1057Zs55Y9T7pJt8qEvD");
  const faqLinkArray = response.fields.faq_single_entry.content_links

  let result = await fetchAllContent(faqLinkArray, client)

  return (
    <div>
      <div className="bg-[url('/hero_images/1.png')] bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white ">
          Frequently Asked Questions
        </h1>
      </div>
      <BrandNames />
      <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <Breadcrumb />
        <div className='flex justify-between'>
          <div className='w-full max-[650px]:w-full'>

            <FaqContent content={result} />

          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;