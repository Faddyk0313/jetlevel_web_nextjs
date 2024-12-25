"use client";

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import BrandNames from '@/sections/BrandNames';
import Hero from '@/sections/Hero';
import React, { useState } from 'react';
import Image from 'next/image';
import bookingSlot from '../../../public/images/booking-slot.webp';
import Link from 'next/link';
import Collapsible from '@/components/Collapsible'
import Button from '@/components/Button';

const RequestQuotePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question:'How Accurate are the Instant Quotes?',
      answer:'Our quotes are highly accurate, thanks to our sophisticated algorithm that considers multiple factors such as distance, jet type, and any additional services you may require. However, please note that these are estimates and final pricing may vary based on real-time availability and other specific requirements you may have.'
    },
    {
      question:'Is My Information Secure?',
      answer:'Absolutely. We prioritize the security and privacy of your information. The details you provide in the inquiry form are encrypted and securely stored, accessible only to our team of professional Aviation Agents for the sole purpose of assisting you with your booking.'
    },
    {
      question:'What Happens After I Submit My Inquiry?',
      answer:'Upon submitting your form, you will receive an instant email confirmation. One of our Aviation Agents, who are available 24/7, will then contact you to discuss your quote in detail and answer any further questions you may have.'
    },
    {
      question:'Can I Modify My Quote After Submission?',
      answer:<div>
        <p>Yes, you can! Our Aviation Agents are here to assist you with any modifications or special requests. You can reach out to us through phone <a href='tel:(855) 538-5383'>(855) 538-5383</a> or email <a href='mailto:Charter@jetlevel.com'>Charter@jetlevel.com</a> to make changes to your quote after submission.</p>
      </div>
    },
  ]
  return (
    <div>
      <Hero title="Instant Private Jet Quotes with JetLevel Aviation" description="Get Your Private Jet Quote Instantly and Fly in Ultimate Luxury" image="https://jetlevel.com/wp-content/uploads/2023/09/cover-jpg.webp" hasOverlay={true} hasCalculator={true} />
      <BrandNames />
      <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
        <div className='min-w-full md:min-w-[72%]'>
          <Breadcrumb />
        </div>
      </section>
      <div className='flex flex-col justify-center gap-y-[20px] p-8'>
        <div className='px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto'>
          <p className='details'>In the fast-paced world of private aviation, time is often as valuable as comfort. That’s why at JetLevel Aviation, we’ve revolutionized the way you can quote private jet services. With our instant private jet quotes, you can discover the cost of your next luxurious journey within minutes. But why are instant quotes so crucial in today’s market?</p>
          <div className='pt-[50px]'>
            <h2 className='text-start'>The Importance of Instant Quotes in Private Aviation</h2>
            <p className='text-black text-start mt-[30px] mb-[50px] text-md details'>Navigating through the myriad of jet charter quotes and charter quotes used to be a cumbersome process. With our state-of-the-art system, you no longer have to wait or haggle. Instant quotes provide you with the speed, accuracy, and transparency you need to make an informed decision. You get to compare different options, ensuring you select the charter that’s right for you.</p>
          </div>

          <div>
              <h2 className='text-start'>How to Get an Instant Quote with JetLevel Aviation</h2>
              <p className='text-black text-start mt-[30px] text-md details'>At JetLevel Aviation, obtaining your instant private jet quote is more than just a quick process; it’s a comprehensive experience designed for your convenience and specificity. Here’s how it works:</p>
              <ul className='pt-3'>
                <li className='mb-6'><span className='text-[#0071ba] font-bold'> -Choose Your Aircraft Type:</span> Our quoting tool categorizes aircraft into six different types—turboprop, very <a href='https://en.wikipedia.org/wiki/Very_light_jet' target='_blank'>light jet</a>, light jet, mid-size jet, super mid-size jet, and heavy jet. This enables you to tailor your journey according to your preferences.</li>
                <li className='mb-6'><span className='text-[#0071ba] font-bold'> -Detailed Aircraft Information:</span> For each aircraft type, we provide valuable data including passenger capacity, estimated flight time, as well as interior and exterior pictures of the jet.</li>
                <li className='mb-6'><span className='text-[#0071ba] font-bold'> -Three-Question Inquiry Form:</span> After selecting your jet type, a simple three-question form will appear. For those interested in a more tailored experience, you can click on “Show” to answer additional, optional questions.</li>
              </ul>
              <p className='border-t pt-4 border-[lightgray] mb-4 details'>The optional questions are designed to fine-tune your private jet charter quote:</p>
              <ul>
                <li className='mb-6'><span className='text-[#0071ba] font-bold'> -Tell Us About Yourself:</span> Are you booking for personal or business travel? Are you a travel agent or concierge?</li>
                <li className='mb-6'><span className='text-[#0071ba] font-bold'> -Baggage Requirements:</span> From XL suitcases to medical equipment, specify your baggage needs.</li>
                <li className='mb-6'><span className='text-[#0071ba] font-bold'> -Travel Companions:</span> Are you traveling with pets or children under 3 years old?</li>
                <li className='mb-6'><span className='text-[#0071ba] font-bold'> -Special Requests:</span> Any unique requirements or requests can be noted here.</li>
              </ul>
              <p className='border-t pt-2 mb-3 border-[lightgray] details'>After submitting the form, you’ll receive an instant email confirmation.</p>
              <div className='text-center mt-8'>
                <Button
                  text='Get Your Quote Instantly'
                  variant='primary'
                />
              </div>
          </div>
         
         <div className='mt-[50px]'>
          <h2 className='mb-8'>What Sets Our Quotes Apart</h2>
            <div className='w-full h-[1000px] max-[700px]:h-[500px] object-cover'>
              <Image 
                unoptimized 
                src={bookingSlot} 
                alt='image' 
                width={100} 
                height={100} 
                className='w-full h-full object-contain' 
              />
            </div>
            <p className='mb-[50px] mt-6 details'>When it comes to private jet charter quotes, it’s not just about the price; it’s about the entire package. What sets JetLevel Aviation’s quotes apart?</p>
            <p className='mb-6 details'><span className='text-[#0071ba] font-bold'> Aircraft Options:</span> We offer a wide variety of jet types to fit every need and preference.</p>
            <p className='mb-6 details'><span className='text-[#0071ba] font-bold'> In-Depth Information:</span> Our quotes aren’t just numbers; they include specifics like passenger capacity, estimated flight time, and even visual aids like photos.</p>
            <p className='mb-6 details'><span className='text-[#0071ba] font-bold'> Personalized Service:</span> Our optional questions allow you to customize your quote further for a truly unique flight experience.</p>

            <p className='mt-[50px] details'>Once your inquiry is submitted, one of our Aviation Agents, who are standing by 24/7, will give you a call to assist with any additional queries or requirements.</p>
         </div>
         
          <div className='mt-[50px]'>
            <h2 className='mb-8'>Instant Private Jet Charter Quotes at Your Fingertips</h2>
            <p className='mb-6 details'>In our mission to offer the highest level of convenience and customization to our valued clients, we proudly present the all-new Private Jet Calculator. Here’s why you’ll find this tool indispensable:</p>
            <p className='mb-6 details'><span className='text-[#0071ba] font-bold'>Instant Quotes:</span> No more waiting. Get immediate, accurate cost estimates for your private jet charters.</p>
            <p className='mb-6 details'><span className='text-[#0071ba] font-bold'>Ease of Use:</span> Navigate through an intuitive and user-friendly interface that simplifies the quoting process.</p>
            <p className='mb-6 details'><span className='text-[#0071ba] font-bold'>Highly Accurate:</span> Leveraging a sophisticated algorithm, our Private Jet Calculator considers multiple factors such as distance, jet type, and additional services to deliver the most precise estimates.</p>
          </div>
         
         <div className='mt-[50px]'>
         <h2 className='mb-8'>How to Save the Private Jet Calculator on Your Phone for Easy Access</h2>
          <p className='mb-4 details'>We recognize that time is invaluable, especially for our busy clients. That’s why we’ve made it simple to save the Private Jet Calculator on your mobile phone’s homepage for quick and convenient access:</p>

          <div className='flex flex-wrap items-center justify-between'>
            <div className='w-[28%] max-[700px]:w-full'>
              <p className='mb-4 details'>For iPhone Users:</p>
              <p className='mb-8 details'>Open Safari and navigate to <Link className='text-[#0071BA]' href='/request-quote'>Jetlevel Instant Quote.</Link></p>
              <p className='details'>Tap Share, then select “Add to Home Screen.” Name it and confirm to view it on your home screen.</p>
            </div>
            <div className='w-[68%] max-[700px]:w-full max-[700px]:mt-8'>
              <Image unoptimized src={'https://jetlevel.com/wp-content/uploads/2023/09/iphone-scaled.webp'} alt='image' width={100} height={100} className='w-full h-full object-cover' />
            </div>
          </div>
         </div>

          <div className='flex flex-wrap  items-start justify-between flex-row-reverse mt-[40px]'>
            <div className='w-[28%] max-[700px]:w-full'>
              <p className='mb-4 details'> For Android Users:</p>
              <p className='mb-8 details'>Open Chrome and go to <Link className='text-[#0071BA]' href='/request-quote'>Jetlevel Instant Quote.</Link></p>
              <p className='details'>Tap on the three dots in the upper right corner, then select “Add to Home Screen.” Name it, confirm, and it will appear on your home screen.</p>
            </div>
            <div className='w-[68%] max-[700px]:w-full max-[700px]:mt-8'>
             <Image unoptimized src={'https://jetlevel.com/wp-content/uploads/2023/09/android-scaled.webp'} alt='image' width={100} height={100} className='w-full h-full object-cover' />
            </div>
          </div>
          <p className='mt-6 details'>By integrating our Private Jet Calculator into your daily life, you can effortlessly obtain accurate trip estimates wherever you are, whenever you need them.</p>

          <div className='mt-[50px]'>
            <h2>We Value Your Feedback</h2>
            <p className='mt-[30px] details'>We’ve designed this tool to make your journey with us as smooth as possible. If you find this tool useful—or have suggestions for improvement—please don’t hesitate to reach out. Your feedback drives our continuous innovation.</p>
          </div>

          <div className='mt-[50px]'>
            <h2>Frequently Asked Questions about Instant Quotes</h2>
            <p className='mt-[30px] mb-[25px] details'>Have questions about our private jet quotes online or private jet online quote system? Here are some FAQs to guide you:</p>
            <div className='mb-8'>
            {
              faqData.map((faq,index) => (
                <Collapsible  
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  iconStyle="caret"
                  iconPosition="start"
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)} 
                  backgroundColor="white"
                  classNames='!text-[#0071BA]  border'
                  answerClassName='!p-4 border-r border-l'
                  questionClassName='text-lg'
                />
              ))
            }
            </div>
          </div>
          
          <div className='mt-[50px]'>
            {/* <h2>Customer Testimonials</h2> */}
            {/* <p className='mt-[30px] mb-[60px]'>Don’t just take our word for it. Here’s what our clients have to say about our private flight quote and charter flight quotes services:</p> */}

            {/* <p className='ml-8 text-[40px] w-[85%] mb-10'>"The instant quote system at JetLevel is unparalleled. It's quick and precise, making my frequent trips a breeze to plan." - A Satisfied Client</p> */}
            <p className='text-center mb-8 w-[85%] m-[0_auto] details'>JetLevel Aviation has simplified the air charter quote and charter plane quote process to offer you a hassle-free experience. Our instant quotes are designed to provide you with the information you need swiftly and accurately. Why wait? Get your quote today and soar to new heights of luxury and convenience.</p>
            <h2 className='text-center w-[85%] m-[0_auto] text-[30px]'>Ready to experience the difference? Get your charter flight quote or online private jet quote now.</h2>
            <div className='text-center mt-[40px]'>
              <Button
                text='Get Your Quote Instantly'
                variant='primary'
              />
            </div>
          </div>
         
        </div>
      </div>
      {/* <RequestQuoteBanner /> */}
    </div>
  );
};

export default RequestQuotePage;