"use client";

import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import React, { useState } from "react";
import Image from "next/image";
import Collapsible from "@/components/Collapsible";
import Table from "./Table";
import HalfSection from "./HalfSection";

const OnDemandCharterPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question:
        "How large can our group be for a charter flight with JetLevel Aviation?",
      answer: "At JetLevel, we can cater to a wide range of group sizes, from small teams to large gatherings requiring airliners. Contact our team with your specific needs, and we’ll provide the best solutions.",
    },
    {
      question:
        " Can we customize our group charter flight schedule and onboard services with JetLevel? ",
      answer: "Absolutely! Our group charter flight service is highly customizable, from the flight schedule to catering and other onboard services. We’re committed to making your journey as comfortable and enjoyable as possible.",
    },
    {
      question:
        "How quickly can JetLevel Aviation arrange a group charter flight?",
      answer: "Our team is available 24/7 and strives to provide prompt responses to all requests. Depending on aircraft availability and your group’s specific needs, we can often arrange a flight within a few hours.",
    },
    {
      question:
        "What safety measures does JetLevel take for group charter flights?",
      answer: "Safety is our utmost priority at JetLevel. All our partner aircraft adhere to the highest safety standards, and all flights are operated by highly trained and experienced pilots. We also follow all recommended guidelines for health and safety.",
    },
  ];
  return (
    <div>
      <Hero
        title="Group Charter Flight Services"
        image="/images/private-jet-charter-services.jpg"
        hasOverlay={true}
        hasCalculator={true}
      />
      <BrandNames />
      <HalfSection showBottomContent={true}>
        <div className="flex flex-col justify-center gap-y-[20px] pt-8">
          <div className="max-w-[1800px] mx-auto w-full">
            <Collapsible
              key={1}
              question="Tailored Group Travel Solutions with JetLevel Aviation"
              answer={
                <div className="mb-8">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-[60%] max-[700px]:w-full">
                      <p className="leading-7 text-[16px] text-[#727982] mb-4">
                        At JetLevel Aviation, we
                        specialize in meeting the unique
                        needs of group travel. No matter
                        the size of your party, our
                        extensive network and direct
                        access to a variety of aircraft
                        ensure we can accommodate groups
                        of 19, 30, 50, and even larger
                        gatherings requiring airliners.
                        Our group charter flights are an
                        excellent solution when there
                        are no direct commercial options
                        or if you have a significant
                        number of passengers requiring
                        coordinated travel.{" "}
                      </p>
                      <p className="leading-7 text-[16px] text-[#727982] mb-4">
                        Our dedicated and experienced agents are available 24/7 and would be delighted to provide you with an in-depth cost vs. experience analysis. This comparison will showcase the benefits and convenience of private group charter flights over commercial airline travel.
                      </p>
                    </div>
                    <div className="w-[35%] max-[700px]:w-full max-[700px]:mb-6">
                      <Image
                        src="/images/group charter.webp"
                        alt="Private Jet"
                        width={500}
                        height={250}
                        layout="responsive"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="leading-7 text-[16px] text-[#727982] mb-4">
                    Trust JetLevel Aviation with your group charter flight needs – we’re here to deliver exceptional service and ensure a seamless travel experience for your group.
                  </p>
                </div>
              }
              isOpen={openIndex === 1}
              onClick={() => handleToggle(1)}
            />

            <Collapsible
              key={2}
              question="Private Airliner for Group Charter Flight"
              answer={
                <div className="mb-8">
                  <p className="mb-8 leading-7 text-[16px] text-[#727982] ">
                    Experience the ultimate in group travel with our private airliner charter service. We can provide large, comfortable aircraft ideally suited for group charter flights.
                  </p>
                </div>
              }
              isOpen={openIndex === 2}
              onClick={() => handleToggle(2)}
            />

            <Collapsible
              key={3}
              question="Our Group Aircraft Charter Specialties"
              answer={
                <div className="mb-8">

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Team Travel &ndash;</span> From sports teams to corporate groups, we ensure your team arrives at their destination together and on time.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Artist and Band Tours &ndash; </span>We provide efficient, comfortable, and discreet travel solutions for artists, bands, and their crews.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Crew Rotations &ndash; </span>We offer seamless and efficient rotation flights for offshore workers, ensuring they arrive on-site safely and on schedule.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Oil and Gas &ndash; </span>Serving the energy sector with reliable, flexible charter solutions tailored to the specific needs of oil and gas projects.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Company Business Travel for Large Groups &ndash; </span>Company Business Travel for Large Groups &ndash; We streamline corporate travel, ensuring your team arrives together and rested, ready for business.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Bachelor/Bachelorette Parties &ndash; </span>Bachelor/Bachelorette Parties &ndash; Let the celebration begin from the moment you step on board our group charter flights.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Destination Weddings &ndash; </span>Simplify the logistics of wedding travel. We&rsquo;ll ensure your party arrives together and stress-free at your dream location.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Vacation Travel for Large Groups &ndash; </span>Start your group vacation the right way &ndash; with a relaxed, private charter flight that operates on your schedule.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4">
                    JetLevel Aviation is dedicated to providing a stress-free and enjoyable group charter flight experience. Our team is standing by to assist with your travel needs, ensuring an unforgettable journey from start to finish.
                  </p>
                </div>

              }
              isOpen={openIndex === 3}
              onClick={() => handleToggle(3)}
            />
            <Collapsible
              key={4}
              question="Group Charter Flight Benefits"
              answer={
                <div className="mb-8">

                  <p className="leading-7 text-[16px] text-[#727982] mb-4">
                    Choosing a group charter flight with JetLevel Aviation offers numerous advantages over traditional commercial flights. Our service is:
                  </p>
                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Team Travel &ndash;</span> From sports teams to corporate groups, we ensure your team arrives at their destination together and on time.</p>
                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span> Customizable &ndash;</span> From the flight schedule to onboard services, we tailor every aspect of the journey to your group&rsquo;s preferences.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span> Efficient &ndash;</span> Avoid time-consuming layovers, security lines, and boarding queues. We get your group to its destination quickly and efficiently.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span> Private &ndash;</span> Enjoy the exclusivity of having the entire plane to yourselves, ensuring a comfortable and private journey.</p>

                </div>

              }
              isOpen={openIndex === 4}
              onClick={() => handleToggle(4)}
            />
            <Collapsible
              key={5}
              question="Why Choose JetLevel Aviation for Group Charter Flights"
              answer={
                <div className="mb-8">

                  <p className="leading-7 text-[16px] text-[#727982] mb-4">
                    JetLevel Aviation is more than just a private jet broker – we’re a trusted partner committed to delivering excellent service. Here’s why groups choose us:
                  </p>
                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span>Experienced Team &ndash;</span> Our team has extensive experience in the private aviation industry, ensuring smooth, hassle-free travel arrangements.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span> Global Network &ndash;</span> Our wide network of aircraft owners allows us to offer a variety of options to accommodate different group sizes and preferences.</p>

                  <p className="leading-7 text-[16px] text-[#727982] mb-4" > <span> 24/7 Service &ndash;</span>We are available around the clock to cater to your group&rsquo;s needs and ensure the best flight experience.</p>

                </div>

              }
              isOpen={openIndex === 5}
              onClick={() => handleToggle(5)}
            />

            <Collapsible
              key={6}
              question="Group Charter Flight Booking Process"
              answer={
                <div className="mb-8 flex flex-wrap justify-between">
                  <div className="w-[60%] max-[700px]:w-full">
                    <p className="leading-7 text-[16px] text-[#727982] mb-8 ">
                      Booking your group charter flight with JetLevel Aviation is straightforward and stress-free:
                    </p>
                    <p className="mb-8 leading-7 text-[16px] text-[#727982] "> <span>Contact Our Team &ndash;</span> Reach out to us with your group&rsquo;s itinerary and any specific preferences or requirements.</p>

                    <p className="mb-8 leading-7 text-[16px] text-[#727982] "> <span>Receive a Tailored Proposalndash;</span> We&rsquo;ll provide a detailed proposal, including the best aircraft options for your group size and destination, pricing, and additional services.</p>

                    <p className="mb-8 leading-7 text-[16px] text-[#727982] "> <span>Confirm Your Booking &ndash;</span> Once you&rsquo;re satisfied with the proposal, confirm the booking, and we&rsquo;ll handle the rest.</p>
                  </div>
                  <div className="w-[35%] max-[700px]:w-full">
                    <Image
                      unoptimized
                      src={
                        "/images/private-jet-privacy-cabin.jpeg"
                      }
                      alt="image"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              }
              isOpen={openIndex === 6}
              onClick={() => handleToggle(6)}
            />

            <Collapsible
              key={7}
              question="Frequently Asked Questions (FAQs)"
              answer={
                <div className="mb-8">
                  <p className="leading-7 text-[18px] text-[#727982] mb-8 ">
                    We understand that you may have questions about arranging a group charter flight. Here are answers to some of the most frequently asked questions
                  </p>
                  <div className="mb-8">
                    {faqData.map((faq, index) => (
                      <div key={index} className="pb-6">
                        <h3 className="font-bold text-gray-900">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-7 mt-1">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              }
              isOpen={openIndex === 7}
              onClick={() => handleToggle(7)}
            />
          </div>
        </div>
      </HalfSection>
    </div>
  );
};

export default OnDemandCharterPage;
