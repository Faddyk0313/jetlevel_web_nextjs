"use client";

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Collapsible from '@/components/Collapsible'
import Events from '@/components/Events'
import RequestQuoteBanner from '@/components/RequestQuoteBanner';
import Table from '@/components/Table'
import TopCharteredCities from '@/components/TopCharteredCities'
import AvailableAircrafts from '@/sections/AvailableAircrafts'
import BrandNames from '@/sections/BrandNames'
import CompanyOverview from '@/sections/CompanyOverview'
import Hero from '@/sections/Hero'
import SmartTravelTools from '@/sections/SmartTravelTools'
import WhatOurClientsSay from '@/sections/WhatOurClientsSay'
import Image from 'next/image'
import React, { useState } from 'react'

const EventsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  const data=[
    {
      route:{
        arrival:'Chicago',
        departure:'Orlando'
      },
      price:'$13,800',
      type:'LIGHT JET',
      seats:'6',
      time:'2h12'
    },
    {
      route:{
        arrival:'San Francisco',
        departure:'Miami'
      },
      price:'$46,500',
      type:'SUPER MIDSIZE JET',
      seats:'8',
      time:'4h55'
    },
    {
      route:{
        arrival:'Teterboro',
        departure:'Van Nuys'
      },
      price:'$38,900',
      type:'MID SIZE JET',
      seats:'7',
      time:'4h54'
    },
    {
      route:{
        arrival:'Miami',
        departure:'Nassau'
      },
      price:'$8,400',
      type:'VERY LIGHT JET',
      seats:'5',
      time:'0h50'
    },
    {
      route:{
        arrival:'New York',
        departure:'West Palm Beach'
      },
      price:'$22,500',
      type:'HEAVY JET',
      seats:'10',
      time:'1h58'
    },
    {
      route:{
        arrival:'Seattle',
        departure:'Las Vegas'
      },
      price:'$15,600',
      type:'LIGHT JET',
      seats:'8',
      time:'1h39'
    },
    {
      route:{
        arrival:'Chicago',
        departure:'Fort Lauderdale'
      },
      price:'$16,250',
      type:'LIGHT JET',
      seats:'6',
      time:'2h36'
    },
    {
      route:{
        arrival:'Dallas',
        departure:'Las Vegas'
      },
      price:'$16,750',
      type:'MID SIZE JET',
      seats:'7',
      time:'2h06'
    },
    {
      route:{
        arrival:'Austin',
        departure:'Washington D.C.'
      },
      price:'$16,200',
      type:'VERY LIGHT JET',
      seats:'5',
      time:'3h17'
    },
    {
      route:{
        arrival:'Teterboro',
        departure:'Opa-Locka'
      },
      price:'$23,820',
      type:'HEAVY JET',
      seats:'10',
      time:'2h05'
    },
  ]
  let column = [
		{
			heading:'Route',
			accessor: 'route',
			Cell: ({ row }: { row: Record<string, any> }) => 
      <div className='flex items-center gap-x-[80px]'>
        <Image 
          src='https://jetlevel.com/wp-content/uploads/2024/03/take-off.svg' 
          width={100} 
          height={100}
          alt='Plane' 
          className='w-[40px]'
        />
        <p className='w-[100px]'>{row.route.arrival}</p>
        <Image 
          src='https://jetlevel.com/wp-content/uploads/2024/03/Landing.svg' 
          width={100} 
          height={100}
          alt='Plane' 
          className='w-[40px]'
        />
        <p className='w-[100px]'>{row.route.departure}</p>
      </div>
		},
		{
			heading:'Price Est.',
			accessor: 'price',
		},
		{
			heading:'Aircraft Type',
			accessor: 'type',
		},
		{
			heading:'Seats',
			accessor: 'seats',
		},
    {
			heading:'Flight Time',
			accessor: 'time',
		},
    {
			heading:'',
			accessor: '',
      Cell: ({ row }: { row: Record<string, any> }) => <div className='font-bold'>
      <button>Enquire</button>
      </div>
		},
	]; 

  const faqData = [
    {
      question:'What factors typically influence the cost of chartering a private jet?',
      answer:'The cost of chartering a private jet is influenced by several key factors: aircraft type, which determines size and luxury level; flight distance, affecting fuel consumption; trip duration, as longer trips may require overnight crew expenses; airport fees, varying by location; and time of booking, with last-minute arrangements usually costing more.'
    },
    {
      question:'How does the size of the private jet affect the overall charter cost?',
      answer:"The private jet charter cost is influenced by the jet's size, with larger jets typically being more expensive due to greater fuel consumption, higher operating costs, and the ability to carry more passengers."
    },
    {
       question:'What are the average hourly rates for different types of private jets?',
      answer:"Average hourly rates for private jet charter cost vary: Light jets are around $5,400-$6,300, midsize jets cost $6,400-$8,000, and large jets can be $10,000-$14,000. These rates depend on jet type, features, and amenities."
    },
    {
      question:'How does the duration of the flight impact private jet charter costs?',
     answer:"The duration of the flight directly affects the private jet charter cost, as longer flights require more fuel and potentially higher crew costs. Additionally, longer rentals may incur overnight fees for crew accommodations."
    },
    {
      question:'Are there any additional fees or charges beyond the basic charter cost for a private jet?',
     answer:"Beyond the basic private jet charter cost, additional fees may include fuel surcharges, landing fees, crew expenses, catering, and ground transportation. Always check for these potential extra costs when booking."
    },
    {
      question:'How do international private jet charter compare in cost to domestic ones?',
     answer:"Private jet charter cost for international flights is generally higher than domestic due to longer flight durations, increased fuel consumption, international handling fees, and potentially higher crew costs."
    },
    {
      question:'What is the cost difference between a one-way and a round-trip private jet charter?',
     answer:"The cost of a one-way private jet charter is typically higher per leg compared to a round-trip because the jet often flies empty on one leg. Opting for a round-trip can significantly reduce the overall cost due to efficiencies in flight planning and aircraft usage."
    },
    {
      question:'How do fuel surcharges affect the overall cost of private jet charter?',
     answer:"Fuel surcharges can significantly increase the overall cost of private jet charters, especially during periods of high fuel prices. These surcharges are added to the base rate to cover the variable and rising costs of aviation fuel, directly impacting the total charter cost."
    },
    {
      question:'Are catering and in-flight services included in private jet charter costs?',
     answer:"Catering and in-flight services are typically not included in the base cost of private jet charters. These services are often available for an additional fee, allowing passengers to customize their dining and service experience according to their preferences and needs."
    },
    {
      question:'What role do airport fees play in the total cost of chartering a private jet?',
     answer:"Airport fees are a crucial component in the total cost of chartering a private jet, covering landing, parking, and handling charges. These fees vary by airport and can significantly affect the overall charter cost, especially at major or busy airports."
    },
    {
      question:'How does the time of year affect the pricing of private jet charter?',
     answer:"The pricing of private jet charters fluctuates with demand, which is often higher during peak travel seasons such as holidays and summer months. This seasonal demand can lead to increased charter costs. Conversely, during off-peak times, prices may be lower due to reduced demand."
    },
    {
      question:'Can frequent chartering lead to discounts or reduced rates in private jet costs?',
     answer:"Yes, frequent chartering can lead to discounts or reduced rates on private jet costs. Many charter companies offer membership programs or volume discounts for regular clients, which can significantly lower the cost per flight by leveraging loyalty and bulk booking incentives."
    },
    {
      question:'What are the cost implications of last-minute private jet charter bookings?',
     answer:"Last-minute bookings for private jet charters can be more expensive due to the urgency and limited availability of aircraft. However, if a jet needs to reposition or return empty, there might be opportunities for lower-cost, short-notice travel through empty leg deals."
    },
    {
      question:'How does the choice of departure and arrival airports influence the charter cost?',
     answer:"The choice of departure and arrival airports significantly influences the charter cost of a private jet. Opting for smaller, less busy airports can reduce fees related to landing, parking, and handling, thus lowering overall costs. Conversely, major airports might have higher fees due to greater demand and facility charges."
    },
    {
      question:'Are there different pricing structures for business versus leisure private jet charter?',
     answer:"Pricing structures for private jet charters generally do not differ between business and leisure travels, as costs are typically based on aircraft type, distance, and operational fees. However, demand patterns may vary, with business travel often peaking on weekdays and leisure travel on weekends, potentially influencing availability and pricing."
    },
    {
      question:'What insurance costs are involved in chartering a private jet?',
     answer:"Chartering a private jet involves insurance costs that cover risks like accidents, damage, and liability. These are generally included in the overall charter cost, ensuring that the aircraft, crew, and passengers are protected under comprehensive aviation insurance policies."
    },
    {
      question:'How does the need for additional crew or staff impact the cost of a private jet charter?',
     answer:"The need for additional crew or staff on a private jet charter can significantly increase the cost. This includes pilots for longer flights requiring multiple shifts, as well as extra cabin attendants for enhanced service or larger groups, contributing to higher labor and operational expenses."
    },
    {
      question:'What are the cost considerations for overnight or extended stay charter?',
     answer:"For overnight or extended stay charters, cost considerations include crew accommodations, aircraft parking fees, and potentially higher airport charges. These added expenses can increase the overall cost of the charter, especially if the aircraft and crew are stationed away from their home base for multiple days."
    },
    {
      question:'How do amenities and luxury features affect the cost of a private jet rental?',
     answer:"Amenities and luxury features in a private jet, such as high-end entertainment systems, gourmet catering, and designer interiors, significantly affect rental costs. Enhanced amenities lead to higher fees, as they require additional equipment, maintenance, and service levels, elevating the overall charter experience and cost."
    },
    {
      question:'Is it more cost-effective to charter a private jet or to buy fractional ownership?',
     answer:"Chartering a private jet is often more cost-effective for occasional travelers as it requires no upfront investment or ongoing ownership costs. Fractional ownership involves purchasing a share of an aircraft, which can be economical for those who fly frequently, offering reduced hourly rates compared to chartering but with significant initial and recurring expenses."
    },
    {
      question:'How does the age and model of a private jet impact its charter cost?',
     answer:"The age and model of a private jet significantly impact its charter cost. Newer models typically command higher rates due to advanced technology, better fuel efficiency, and luxurious amenities. Older jets might offer lower rates but could have higher operating costs due to less efficiency and more frequent maintenance needs."
    },
    {
      question:'Are there specific regions or destinations that typically have higher private jet charter costs?',
     answer:"Yes, specific regions or destinations can have higher private jet charter costs, particularly those with high demand or limited access. For example, remote or island locations may incur higher costs due to the additional fuel and logistical challenges. Major cities with busy airports like New York or London often have higher fees and charges as well."
    },
    {
      question:'How do fuel efficiency and speed of the jet affect the overall charter cost?',
     answer:"Fuel efficiency and speed of the jet directly affect the overall charter cost. More fuel-efficient jets can reduce the fuel surcharges part of the charter cost, especially on longer flights. Faster jets may command higher rental rates but can reduce flight time, potentially lowering total travel costs by minimizing the hours billed."
    },
    {
      question:'What are typical cancellation fees for private jet charter, if any?',
     answer:"Cancellation fees for private jet charters can vary widely depending on the charter company and the booking agreement. Typically, fees increase as the flight date approaches. Cancelling well in advance might incur minimal or no fees, while cancelling close to the departure date could result in significant charges, sometimes up to 100% of the charter cost if within 24-48 hours of the flight."
    },
    {
      question:'How do special events or peak seasons influence private jet rental prices?',
     answer:"Special events and peak seasons significantly influence private jet rental prices due to increased demand. Events like sports finals, major conferences, or holiday seasons can lead to higher charter rates and limited availability. Booking early is recommended to secure better rates and ensure availability during these high-demand periods."
    },
    {
      question:"What's the cost difference between a luxury private jet and a standard private jet charter?",
     answer:"The cost difference between a luxury private jet and a standard private jet charter can be substantial. Luxury jets often feature high-end amenities, superior comfort, and advanced technology, leading to higher rental rates. Typically, luxury private jets cost anywhere from 30% to 100% more than standard jets, depending on the level of opulence and services provided."
    },
    {
      question:'Does the number of passengers alter the cost of chartering a private jet?',
     answer:"The number of passengers typically does not alter the base cost of chartering a private jet, as prices are generally set by aircraft size, route, and duration. However, increased passengers may raise costs indirectly through higher fees for catering, ground services, and possibly exceeding the capacity of smaller, less expensive aircraft, necessitating a larger, more costly jet."
    },
    {
      question:'Are ground transportation services included in private jet charter costs or separate?',
     answer:"Ground transportation services are usually not included in the base cost of private jet charters and are often arranged as an additional service. Clients can request transportation to be coordinated by the charter company, but this will be billed separately, allowing for tailored solutions to meet specific travel needs."
    },
    {
      question:'How do taxes and government charges impact the total cost of a private jet charter?',
     answer:"Taxes and government charges can significantly impact the total cost of a private jet charter. These may include VAT, passenger taxes, and international fees, depending on the regions involved. Such charges vary by country and can add a substantial amount to the overall cost, especially on international flights."
    },
    {
      question:'What is the cost impact of having custom flight routes for private jet charter?',
     answer:"Custom flight routes for private jet charter can lead to increased costs due to less efficient fuel usage, additional air traffic control fees, and possible landing charges at less common destinations. Tailoring a flight path to specific needs may also require more complex planning and potentially longer flight times, further elevating costs."
    },
    {
      question:'How does the length of the runway at the destination airport affect private jet costs?',
     answer:"The length of the runway at the destination airport can affect private jet costs by limiting the types of jets that can land there. Shorter runways may require smaller aircraft that may not have the desired range or amenities, potentially increasing costs if additional legs are needed. Conversely, airports that accommodate larger jets often have higher landing fees but may offer more direct and efficient routes."
    },
    {
      question:'What additional costs should be considered for international private jet flights?',
     answer:<div>
      <p className='mb-2'>For international private jet flights, additional costs to consider include:</p>
      <p className='mb-2'><span className='font-bold'>Customs and Immigration Fees:</span> Handling international entry and exit procedures can incur fees.</p>
      <p className='mb-2'><span className='font-bold'>International Handling and Permits:</span> Costs for obtaining necessary overflight and landing permits, as well as handling services at foreign airports.</p>
      <p className='mb-2'><span className='font-bold'>Increased Fuel Costs:</span> Longer flights require more fuel, which can significantly increase costs, especially if refueling in countries with high fuel prices.</p>
      <p className='mb-2'><span className='font-bold'>Crew Expenses:</span> Accommodation and daily allowances for the crew during stops or layovers.</p>
      <p className='mb-2'><span className='font-bold'>Catering and In-Flight Services:</span> Enhanced catering options to meet the duration and standards expected on longer flights.</p>
      <p className='mb-2'><span className='font-bold'>Taxes:</span> Different countries may impose various taxes, such as value-added tax (VAT) or luxury taxes on flights.</p>
      <p className='mb-2'><span className='font-bold'>Insurance Premiums:</span> May be higher for international travel due to extended coverage requirements.</p>
      <p className='mt-2'> These factors collectively contribute to a higher overall cost for international private jet charters compared to domestic flights.</p>
     </div>
    },
    {
      question:'How is the cost of a private jet charter affected by on-board connectivity and entertainment options?',
     answer:"On-board connectivity and entertainment options can affect the cost of a private jet charter by increasing it due to the inclusion of advanced technologies. Wi-Fi, satellite phones, and high-end entertainment systems are often available, but they may come with additional charges depending on the provider. These features require infrastructure and subscription services that add to the operational costs of the flight, reflected in the charter price."
    },
    {
      question:'What are the typical costs associated with pet travel on a private jet?',
     answer:"Traveling with pets on a private jet typically incurs minimal additional costs compared to commercial flights. While most private jets accommodate pets without significant extra charges, some may require a cleaning fee, especially if specific preparations or accommodations are needed for the pet's comfort and safety. Generally, the convenience and minimal restrictions for pets add to the appeal of private jet travel for pet owners."
    },
    {
      question:'How does the day of the week influence private jet charter pricing?',
     answer:"The day of the week can significantly influence private jet charter pricing due to varying demand. Weekdays are typically busier with business-related travel, possibly resulting in higher prices due to greater demand. Conversely, weekends might see a dip in business travel but an increase in leisure trips. Prices can vary based on these patterns; however, overall, less busy days may offer slightly lower rates. Booking flexibility around these trends can potentially yield cost savings."
    },
    {
      question:'Are there any loyalty programs that offer discounts on private jet charter?',
     answer:"Yes, many private jet charter companies offer loyalty programs that provide discounts and other benefits to frequent flyers. These programs often include tiered memberships where the more you fly, the more benefits you receive, such as reduced rates, priority booking, and access to exclusive services. Some programs might also offer discounted rates on empty leg flights and special promotions for members only."
    },
    {
      question:'What is the impact of weather conditions on the cost of chartering a private jet?',
     answer:"Weather conditions can significantly impact the cost of chartering a private jet. Adverse weather may lead to delays, diversions, or the need for additional fuel and alternative airport landings. These changes can incur extra operational costs such as additional airport fees, increased fuel consumption, and possible overnight crew and passenger accommodations. In some cases, severe weather could lead to flight cancellations, potentially involving rebooking costs and logistical adjustments."
    },
    {
      question:'Can you provide a breakdown of how the flight distance affects private jet charter costs?',
     answer:<div>
      <p className='mb-2'>Private jet charter costs increase with flight distance due to factors such as fuel consumption, crew time, and operational expenses. Here's a basic breakdown:</p>
      <ul className='list-decimal	ml-6'>
        <li className='mb-2'><span className='font-bold'>Short-Haul Flights</span> (up to 2 hours): Generally utilize light or very light jets, which are more cost-effective for shorter distances.</li>
        <li className='mb-2'><span className='font-bold'>Medium-Haul Flights</span> (2-4 hours): Often require mid-size jets, which provide a balance between range and cost.</li>
        <li className='mb-2'><span className='font-bold'>Long-Haul Flights</span> (4+ hours): Typically use large or heavy jets capable of traveling these distances without refueling, but at a higher operational cost.</li>
      </ul>
      <p>Cost per hour typically rises with the size and range capabilities of the aircraft needed for the journey.</p>
     </div>
    },
    {
      question:'What are the typical standby charges for private jets if a trip is delayed?',
     answer:"Typical standby charges for private jets can vary, but they generally apply when a trip is delayed beyond the scheduled departure time. These charges compensate for the crew's extended service hours and the aircraft's operational costs during the wait. Rates can range from hundreds to thousands of dollars per hour, depending on the aircraft type and contractual terms with the charter company."
    },
    {
      question:'How does booking in advance versus last-minute affect the cost of a private jet charter?',
     answer:"Booking a private jet charter in advance typically results in more competitive rates and better aircraft selection due to higher availability. Conversely, last-minute bookings can be more expensive due to limited options and the urgency of the arrangement. However, last-minute bookings might also offer deals on empty leg flights, which can be a cost-effective option if timing and destination align with the available segments."
    },
    {
      question:'Are there any environmental or carbon offset fees associated with private jet charter?',
     answer:"Yes, some private jet charter companies include environmental or carbon offset fees as part of their efforts to mitigate the environmental impact of private flights. These fees are used to fund projects that reduce greenhouse gases, such as reforestation or renewable energy projects. While not universal, this practice is becoming more common as the industry moves towards greater sustainability. These fees typically represent a small percentage of the total charter cost."
    },
    {
      question:'How do empty leg flights compare in cost to standard private jet charter?',
     answer:"Empty leg flights, which occur when a private jet needs to reposition with no passengers, are significantly cheaper than standard private jet charter. These can offer discounts of up to 75%, providing a cost-effective option for flexible travelers who can adjust their schedules to match the availability of these flights."
    },
    {
      question:'What are the usual payment terms and conditions for chartering a private jet?',
     answer:"The usual payment terms for chartering a private jet typically require a deposit at the time of booking, with the balance due prior to departure. Some operators may require full payment upfront, especially for short-notice bookings. Cancellation policies can vary, potentially including fees if the charter is cancelled close to the scheduled flight date. Additionally, some operators offer flexible payment options for frequent flyers or members of jet card programs."
    },
    {
      question:'How does the requirement for additional security measures impact private jet charter costs?',
     answer:"The requirement for additional security measures can significantly increase private jet charter costs. Enhanced security can include background checks for crew and passengers, onboard security personnel, and specialized secure ground transportation. These measures require extra coordination and resources, thus raising the overall expense of the charter, particularly for high-profile passengers or sensitive destinations."
    },
    {
      question:'Can customized branding or personalization on the jet affect the charter price?',
     answer:"Customized branding or personalization on a private jet, such as tailored exterior decals or interior modifications, can indeed affect the charter price. These customizations involve additional costs for design, implementation, and possibly removal, leading to a higher overall charter cost. Such services are often requested for corporate or special event purposes, reflecting unique branding or thematic preferences."
    },
    {
      question:'What are the insurance requirements and how do they influence the total charter cost?',
     answer:"Insurance requirements for private jet charters, including liability and hull insurance, are mandatory and often included in the charter cost. These cover potential damages, accidents, and third-party liabilities. The extent and coverage of insurance can influence the total charter cost, as higher coverage levels entail higher premiums, indirectly increasing the charter rates."
    },
    {
      question:'How are costs affected if the charter includes multiple stops or destinations?',
     answer:"Costs for private jet charters that include multiple stops or destinations generally increase due to additional landing fees, increased fuel consumption, and crew accommodations if overnight stays are required. Each stop can add complexity and time to the itinerary, thereby raising the overall cost of the charter."
    },
    {
      question:'Are there any membership models available that affect the overall cost of chartering private jets frequently?',
     answer:"Yes, there are membership models available that can affect the overall cost of chartering private jets frequently. These memberships often offer reduced rates, priority booking, and other perks in exchange for a recurring fee or prepaid hours. Such programs are designed to provide cost savings and convenience for frequent flyers, making regular private jet travel more economically feasible."
    }
  ]

  return (
    <div>
        <Hero image={"https://fly.jetlevel.com/assets/Private%20jet%20interior%20bg%20.webp"} title={"Cost of Chartering a Private Jet - Flights & Rates"} tagline={"Explore the cost of chartering a private jet flights, including breakdowns, factors, fees, and comparative analyses for informed decision-making"} hasCalculator={true} hasOverlay={false}/>
        <BrandNames />
        <Breadcrumb />
        <CompanyOverview />
        <AvailableAircrafts />
        <section className='px-5 md:px-10 lg:px-20 pb-0'>
        <h2 className='text-center mb-4'>Popular Flights Routes & Estimates</h2>
          <div className='flex items-center justify-between bg-[#0071BA] text-white p-4 rounded-[20px_20px_0px_0px]'>
          <div>
            <h3>Popular Private Jet Charter Flights Routes</h3>
            <p>Dive into our exclusive collection of popular private jet charter routes.</p>
          </div>
          <button className='bg-black p-3 font-md rounded-lg hover:underline'>Enquire Now</button>
          </div>
          <Table
            data={data}
            column={column}
            button={true}
          />
        </section>
      
        <SmartTravelTools />
        <WhatOurClientsSay />
        <div className='mt-6 flex flex-col gap-y-[15px]'>
          {
            faqData.map((faq,index) => (
              <Collapsible  
                key={index}
                question={faq.question}
                answer={faq.answer}
                iconStyle="caret"
                iconPosition="end"
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)} 
                backgroundColor='#0071BA'
              />
            ))
          }
          <RequestQuoteBanner />
        </div>
    </div>
  )
}

export default EventsPage