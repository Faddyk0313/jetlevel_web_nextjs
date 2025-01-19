import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React from 'react';
import industory from '../../../../industory.json';
import CharterDescription from '@/components/CharterDescription';
import CharterAdvantages from '@/components/CharterAdvantages';
import Card from '@/components/Card';
import ChartersTypes from '@/components/ChartersTypes';
import SmartTravelTools from '@/sections/SmartTravelTools';
import PopularPrivateJetCharters from '@/sections/PopularPrivateJetCharters';
import WhatOurClientsSay from '@/sections/WhatOurClientsSay';
import charterTypes from '../../../../charterTypes.json'; 
import Button from '@/components/Button';
import { iconMapping } from '@/lib/constant';
import Link from 'next/link';

type PageProps = {
  params: {
    subOption: string;
  };
};

// Generate metadata dynamically using title and description from charterTypes.json
export async function generateMetadata({ params }: PageProps) {
  const { subOption } = params;

  // Find the matching charter type based on the subOption
  const charterType = charterTypes.charterTypes.find((charter) => charter.url === subOption);
  
  // Provide default values if the subOption does not match any entry
  const title = charterType?.title;
  const description = charterType?.description;

  return {
    title,
    description,
  };
}

// Generate static paths for all subOptions in charterTypes.json
export async function generateStaticParams() {
  return charterTypes.charterTypes.map((charter) => ({
    subOption: charter.url,
  }));
}

const IndustoryCharterDetail = ({ params }: PageProps) => {
  const singleIndustory = industory.industory.find((event) => event.id === params.subOption);
  const charterType = charterTypes.charterTypes.find((charter) => charter.url === params.subOption);
  const filterCharters = charterTypes?.charterTypes.filter((charter) => charter.url !== params.subOption);
  return (
    <div>
      <Hero 
        title={singleIndustory?.hereosHeading || ''}
        description={singleIndustory?.heroDescription || ''}
        image={charterType?.image || ""}  
        hasCalculator={false} 
        hasOverlay={true}
      />
      <BrandNames />
      <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <Breadcrumb />
      </section>

      <CharterDescription 
        heading={singleIndustory?.industoryDescription?.heading || ''} 
        paragraph={singleIndustory?.industoryDescription?.description || ''} 
      />

      <section className="px-5 md:px-10 pt-[60px] pb-[60px] xl:px-20 py-7 max-w-[1800px] mx-auto">
        <h2 className='mb-8'>{singleIndustory?.advantages?.heading || ''}</h2>
        <div className='flex flex-wrap justify-between'>
          {
            singleIndustory?.advantages?.contents?.map((content,index,array) => {
              const Icon = iconMapping[content.icon] ;
              return(
                <div key ={index}  className={`${
                  array?.length === 6 
                    ? 'w-[33%] max-[900px]:w-[48%] max-[700px]:w-full' 
                    : 'w-[48%] max-[900px]:w-[48%] max-[700px]:w-full'
                  }`}>
                  <CharterAdvantages icon={<Icon />} heading={content?.title} description={content?.para}  />
                </div>
              )
            })
          }
        </div>
      </section>

      <section className="px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto max-[700px]:hidden">
        <h2>{singleIndustory?.aviationSolutions?.heading || ''}</h2>
        <div className='flex gap-x-[20px] mt-[40px] mb-[40px] flex-wrap gap-y-[20px]'> 
          {
            singleIndustory?.aviationSolutions?.aviationIcons.map((icon,index) => {
              const Icon = iconMapping[icon.icons];
              return (
                <div key={index} className='industrycardContanier w-[23%] max-[900px]:w-[48%] max-[700px]:w-full'>
                <Card className={'min-h-[100%]'} link='' icon={<Icon />} title={icon?.heading} description={icon?.description} bgcolor={'white'} />
                </div>
              )
            })
          }
        </div>
      </section>

      <section 
        style={{ backgroundImage: `url('/images/About us Hero Image.jpg')`}} 
        className="px-5 md:px-10 mt-[50px] mb-[50px] xl:px-20 py-7 w-full relative bg-center bg-cover h-full pb-[70px] pt-[70px]"
      >
        <div className='absolute inset-0 bg-black opacity-50 group-hover:opacity-60'></div>
        <div className='flex relative flex-wrap justify-between'>
          <div className='w-[48%] max-[800px]:w-full'>
            <h2 className='text-white max-[800px]:mb-8 text-[40px] font-calibari font-bold max-[800px]:text-[25px]'>{singleIndustory?.whyChooseJet?.heading || ''}</h2>
          </div>
          <div className='flex flex-wrap max-[800px]:w-full max-[800px]:mb-8 w-[48%] justify-between gap-y-6 items-center'>
            {
              singleIndustory?.whyChooseJet?.items.map((item, index) => (
                <div key={index} className='w-[48%] max-[700px]:w-full'>
                  <h4 className='text-white font-bold mb-4'>{item?.title}</h4>
                  <p className='text-white text-sm'>{item?.description}</p>
                </div>
              ))
            }
            <div className='w-[48%] max-[800px]:w-full max-[800px]:text-end max-[800px]:mt-8'>
            <Link href="/request-a-quote">
            <Button
                text={singleIndustory?.buttonName}
                variant='primary'
              />
            </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[80%] max-[700px]:w-[95%] m-[0_auto]">
        <div 
          className="h-[500px] max-[700px]:p-[50px] p-[90px] text-center text-white flex flex-col rounded-2xl justify-center items-center relative overflow-hidden bg-black"
        >
          <div 
            style={{
              backgroundImage: `url('/images/Logo.png')`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '80% 200px',
              backgroundAttachment: 'fixed',
              opacity: 0.2,
            }} 
            className="absolute inset-0 z-0"
          ></div>

          <div className="relative z-10">
            <h2 className="text-[45px] font-bold mb-4 text-white font-calibari max-[700px]:text-[25px]">{singleIndustory?.corporateTravel?.heading}</h2>
            <p className="text-md mb-4">
             {singleIndustory?.corporateTravel?.description}
            </p>
            <Link href="/request-a-quote">
            <Button
                text={singleIndustory?.buttonName}
              variant='primary'
            />
            </Link>
            
          </div>
        </div>
      </section>
    
      <section className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20">
        <h2>Interested in other industry specific charters?</h2>
        <ChartersTypes charterType={filterCharters} />
      </section>

      <SmartTravelTools />
      <PopularPrivateJetCharters />
      <WhatOurClientsSay />
    </div>
  )
}

export default IndustoryCharterDetail