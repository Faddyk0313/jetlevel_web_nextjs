'use client';

import React, { useState } from 'react';
import Collapsible from '@/components/Collapsible';
import Image from 'next/image';
import Table from './Table';

const PricingContent = ({ children }: any) => {
    const [faqSection, setFaqSection] = useState<string | null>('general-cost-breakdown');
    const toggleSection = (section: string) => {
        setFaqSection(prevSection => (prevSection === section ? null : section));
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqData = [
        {
            question: 'What factors typically influence the cost of chartering a private jet?',
            answer: 'The cost of chartering a private jet is influenced by several key factors: aircraft type, which determines size and luxury level; flight distance, affecting fuel consumption; trip duration, as longer trips may require overnight crew expenses; airport fees, varying by location; and time of booking, with last-minute arrangements usually costing more.'
        },
        {
            question: 'How does the size of the private jet affect the overall charter cost?',
            answer: "The private jet charter cost is influenced by the jet's size, with larger jets typically being more expensive due to greater fuel consumption, higher operating costs, and the ability to carry more passengers."
        },
        {
            question: 'What are the average hourly rates for different types of private jets?',
            answer: "Average hourly rates for private jet charter cost vary: Light jets are around $5,400-$6,300, midsize jets cost $6,400-$8,000, and large jets can be $10,000-$14,000. These rates depend on jet type, features, and amenities."
        },
        {
            question: 'How does the duration of the flight impact private jet charter costs?',
            answer: "The duration of the flight directly affects the private jet charter cost, as longer flights require more fuel and potentially higher crew costs. Additionally, longer rentals may incur overnight fees for crew accommodations."
        },
        {
            question: 'Are there any additional fees or charges beyond the basic charter cost for a private jet?',
            answer: "Beyond the basic private jet charter cost, additional fees may include fuel surcharges, landing fees, crew expenses, catering, and ground transportation. Always check for these potential extra costs when booking."
        },
        {
            question: 'How do international private jet charter compare in cost to domestic ones?',
            answer: "Private jet charter cost for international flights is generally higher than domestic due to longer flight durations, increased fuel consumption, international handling fees, and potentially higher crew costs."
        },
        {
            question: 'What is the cost difference between a one-way and a round-trip private jet charter?',
            answer: "The cost of a one-way private jet charter is typically higher per leg compared to a round-trip because the jet often flies empty on one leg. Opting for a round-trip can significantly reduce the overall cost due to efficiencies in flight planning and aircraft usage."
        },
        {
            question: 'How do fuel surcharges affect the overall cost of private jet charter?',
            answer: "Fuel surcharges can significantly increase the overall cost of private jet charters, especially during periods of high fuel prices. These surcharges are added to the base rate to cover the variable and rising costs of aviation fuel, directly impacting the total charter cost."
        },
        {
            question: 'Are catering and in-flight services included in private jet charter costs?',
            answer: "Catering and in-flight services are typically not included in the base cost of private jet charters. These services are often available for an additional fee, allowing passengers to customize their dining and service experience according to their preferences and needs."
        },
        {
            question: 'What role do airport fees play in the total cost of chartering a private jet?',
            answer: "Airport fees are a crucial component in the total cost of chartering a private jet, covering landing, parking, and handling charges. These fees vary by airport and can significantly affect the overall charter cost, especially at major or busy airports."
        },
        {
            question: 'How does the time of year affect the pricing of private jet charter?',
            answer: "The pricing of private jet charters fluctuates with demand, which is often higher during peak travel seasons such as holidays and summer months. This seasonal demand can lead to increased charter costs. Conversely, during off-peak times, prices may be lower due to reduced demand."
        },
        {
            question: 'Can frequent chartering lead to discounts or reduced rates in private jet costs?',
            answer: "Yes, frequent chartering can lead to discounts or reduced rates on private jet costs. Many charter companies offer membership programs or volume discounts for regular clients, which can significantly lower the cost per flight by leveraging loyalty and bulk booking incentives."
        },
        {
            question: 'What are the cost implications of last-minute private jet charter bookings?',
            answer: "Last-minute bookings for private jet charters can be more expensive due to the urgency and limited availability of aircraft. However, if a jet needs to reposition or return empty, there might be opportunities for lower-cost, short-notice travel through empty leg deals."
        },
        {
            question: 'How does the choice of departure and arrival airports influence the charter cost?',
            answer: "The choice of departure and arrival airports significantly influences the charter cost of a private jet. Opting for smaller, less busy airports can reduce fees related to landing, parking, and handling, thus lowering overall costs. Conversely, major airports might have higher fees due to greater demand and facility charges."
        },
        {
            question: 'Are there different pricing structures for business versus leisure private jet charter?',
            answer: "Pricing structures for private jet charters generally do not differ between business and leisure travels, as costs are typically based on aircraft type, distance, and operational fees. However, demand patterns may vary, with business travel often peaking on weekdays and leisure travel on weekends, potentially influencing availability and pricing."
        },
        {
            question: 'What insurance costs are involved in chartering a private jet?',
            answer: "Chartering a private jet involves insurance costs that cover risks like accidents, damage, and liability. These are generally included in the overall charter cost, ensuring that the aircraft, crew, and passengers are protected under comprehensive aviation insurance policies."
        },
        {
            question: 'How does the need for additional crew or staff impact the cost of a private jet charter?',
            answer: "The need for additional crew or staff on a private jet charter can significantly increase the cost. This includes pilots for longer flights requiring multiple shifts, as well as extra cabin attendants for enhanced service or larger groups, contributing to higher labor and operational expenses."
        },
        {
            question: 'What are the cost considerations for overnight or extended stay charter?',
            answer: "For overnight or extended stay charters, cost considerations include crew accommodations, aircraft parking fees, and potentially higher airport charges. These added expenses can increase the overall cost of the charter, especially if the aircraft and crew are stationed away from their home base for multiple days."
        },
        {
            question: 'How do amenities and luxury features affect the cost of a private jet rental?',
            answer: "Amenities and luxury features in a private jet, such as high-end entertainment systems, gourmet catering, and designer interiors, significantly affect rental costs. Enhanced amenities lead to higher fees, as they require additional equipment, maintenance, and service levels, elevating the overall charter experience and cost."
        },
        {
            question: 'Is it more cost-effective to charter a private jet or to buy fractional ownership?',
            answer: "Chartering a private jet is often more cost-effective for occasional travelers as it requires no upfront investment or ongoing ownership costs. Fractional ownership involves purchasing a share of an aircraft, which can be economical for those who fly frequently, offering reduced hourly rates compared to chartering but with significant initial and recurring expenses."
        },
        {
            question: 'How does the age and model of a private jet impact its charter cost?',
            answer: "The age and model of a private jet significantly impact its charter cost. Newer models typically command higher rates due to advanced technology, better fuel efficiency, and luxurious amenities. Older jets might offer lower rates but could have higher operating costs due to less efficiency and more frequent maintenance needs."
        },
        {
            question: 'Are there specific regions or destinations that typically have higher private jet charter costs?',
            answer: "Yes, specific regions or destinations can have higher private jet charter costs, particularly those with high demand or limited access. For example, remote or island locations may incur higher costs due to the additional fuel and logistical challenges. Major cities with busy airports like New York or London often have higher fees and charges as well."
        },
        {
            question: 'How do fuel efficiency and speed of the jet affect the overall charter cost?',
            answer: "Fuel efficiency and speed of the jet directly affect the overall charter cost. More fuel-efficient jets can reduce the fuel surcharges part of the charter cost, especially on longer flights. Faster jets may command higher rental rates but can reduce flight time, potentially lowering total travel costs by minimizing the hours billed."
        },
        {
            question: 'What are typical cancellation fees for private jet charter, if any?',
            answer: "Cancellation fees for private jet charters can vary widely depending on the charter company and the booking agreement. Typically, fees increase as the flight date approaches. Cancelling well in advance might incur minimal or no fees, while cancelling close to the departure date could result in significant charges, sometimes up to 100% of the charter cost if within 24-48 hours of the flight."
        },
        {
            question: 'How do special events or peak seasons influence private jet rental prices?',
            answer: "Special events and peak seasons significantly influence private jet rental prices due to increased demand. Events like sports finals, major conferences, or holiday seasons can lead to higher charter rates and limited availability. Booking early is recommended to secure better rates and ensure availability during these high-demand periods."
        },
        {
            question: "What's the cost difference between a luxury private jet and a standard private jet charter?",
            answer: "The cost difference between a luxury private jet and a standard private jet charter can be substantial. Luxury jets often feature high-end amenities, superior comfort, and advanced technology, leading to higher rental rates. Typically, luxury private jets cost anywhere from 30% to 100% more than standard jets, depending on the level of opulence and services provided."
        },
        {
            question: 'Does the number of passengers alter the cost of chartering a private jet?',
            answer: "The number of passengers typically does not alter the base cost of chartering a private jet, as prices are generally set by aircraft size, route, and duration. However, increased passengers may raise costs indirectly through higher fees for catering, ground services, and possibly exceeding the capacity of smaller, less expensive aircraft, necessitating a larger, more costly jet."
        },
        {
            question: 'Are ground transportation services included in private jet charter costs or separate?',
            answer: "Ground transportation services are usually not included in the base cost of private jet charters and are often arranged as an additional service. Clients can request transportation to be coordinated by the charter company, but this will be billed separately, allowing for tailored solutions to meet specific travel needs."
        },
        {
            question: 'How do taxes and government charges impact the total cost of a private jet charter?',
            answer: "Taxes and government charges can significantly impact the total cost of a private jet charter. These may include VAT, passenger taxes, and international fees, depending on the regions involved. Such charges vary by country and can add a substantial amount to the overall cost, especially on international flights."
        },
        {
            question: 'What is the cost impact of having custom flight routes for private jet charter?',
            answer: "Custom flight routes for private jet charter can lead to increased costs due to less efficient fuel usage, additional air traffic control fees, and possible landing charges at less common destinations. Tailoring a flight path to specific needs may also require more complex planning and potentially longer flight times, further elevating costs."
        },
        {
            question: 'How does the length of the runway at the destination airport affect private jet costs?',
            answer: "The length of the runway at the destination airport can affect private jet costs by limiting the types of jets that can land there. Shorter runways may require smaller aircraft that may not have the desired range or amenities, potentially increasing costs if additional legs are needed. Conversely, airports that accommodate larger jets often have higher landing fees but may offer more direct and efficient routes."
        },
        {
            question: 'What additional costs should be considered for international private jet flights?',
            answer: <div>
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
            question: 'How is the cost of a private jet charter affected by on-board connectivity and entertainment options?',
            answer: "On-board connectivity and entertainment options can affect the cost of a private jet charter by increasing it due to the inclusion of advanced technologies. Wi-Fi, satellite phones, and high-end entertainment systems are often available, but they may come with additional charges depending on the provider. These features require infrastructure and subscription services that add to the operational costs of the flight, reflected in the charter price."
        },
        {
            question: 'What are the typical costs associated with pet travel on a private jet?',
            answer: "Traveling with pets on a private jet typically incurs minimal additional costs compared to commercial flights. While most private jets accommodate pets without significant extra charges, some may require a cleaning fee, especially if specific preparations or accommodations are needed for the pet's comfort and safety. Generally, the convenience and minimal restrictions for pets add to the appeal of private jet travel for pet owners."
        },
        {
            question: 'How does the day of the week influence private jet charter pricing?',
            answer: "The day of the week can significantly influence private jet charter pricing due to varying demand. Weekdays are typically busier with business-related travel, possibly resulting in higher prices due to greater demand. Conversely, weekends might see a dip in business travel but an increase in leisure trips. Prices can vary based on these patterns; however, overall, less busy days may offer slightly lower rates. Booking flexibility around these trends can potentially yield cost savings."
        },
        {
            question: 'Are there any loyalty programs that offer discounts on private jet charter?',
            answer: "Yes, many private jet charter companies offer loyalty programs that provide discounts and other benefits to frequent flyers. These programs often include tiered memberships where the more you fly, the more benefits you receive, such as reduced rates, priority booking, and access to exclusive services. Some programs might also offer discounted rates on empty leg flights and special promotions for members only."
        },
        {
            question: 'What is the impact of weather conditions on the cost of chartering a private jet?',
            answer: "Weather conditions can significantly impact the cost of chartering a private jet. Adverse weather may lead to delays, diversions, or the need for additional fuel and alternative airport landings. These changes can incur extra operational costs such as additional airport fees, increased fuel consumption, and possible overnight crew and passenger accommodations. In some cases, severe weather could lead to flight cancellations, potentially involving rebooking costs and logistical adjustments."
        },
        {
            question: 'Can you provide a breakdown of how the flight distance affects private jet charter costs?',
            answer: <div>
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
            question: 'What are the typical standby charges for private jets if a trip is delayed?',
            answer: "Typical standby charges for private jets can vary, but they generally apply when a trip is delayed beyond the scheduled departure time. These charges compensate for the crew's extended service hours and the aircraft's operational costs during the wait. Rates can range from hundreds to thousands of dollars per hour, depending on the aircraft type and contractual terms with the charter company."
        },
        {
            question: 'How does booking in advance versus last-minute affect the cost of a private jet charter?',
            answer: "Booking a private jet charter in advance typically results in more competitive rates and better aircraft selection due to higher availability. Conversely, last-minute bookings can be more expensive due to limited options and the urgency of the arrangement. However, last-minute bookings might also offer deals on empty leg flights, which can be a cost-effective option if timing and destination align with the available segments."
        },
        {
            question: 'Are there any environmental or carbon offset fees associated with private jet charter?',
            answer: "Yes, some private jet charter companies include environmental or carbon offset fees as part of their efforts to mitigate the environmental impact of private flights. These fees are used to fund projects that reduce greenhouse gases, such as reforestation or renewable energy projects. While not universal, this practice is becoming more common as the industry moves towards greater sustainability. These fees typically represent a small percentage of the total charter cost."
        },
        {
            question: 'How do empty leg flights compare in cost to standard private jet charter?',
            answer: "Empty leg flights, which occur when a private jet needs to reposition with no passengers, are significantly cheaper than standard private jet charter. These can offer discounts of up to 75%, providing a cost-effective option for flexible travelers who can adjust their schedules to match the availability of these flights."
        },
        {
            question: 'What are the usual payment terms and conditions for chartering a private jet?',
            answer: "The usual payment terms for chartering a private jet typically require a deposit at the time of booking, with the balance due prior to departure. Some operators may require full payment upfront, especially for short-notice bookings. Cancellation policies can vary, potentially including fees if the charter is cancelled close to the scheduled flight date. Additionally, some operators offer flexible payment options for frequent flyers or members of jet card programs."
        },
        {
            question: 'How does the requirement for additional security measures impact private jet charter costs?',
            answer: "The requirement for additional security measures can significantly increase private jet charter costs. Enhanced security can include background checks for crew and passengers, onboard security personnel, and specialized secure ground transportation. These measures require extra coordination and resources, thus raising the overall expense of the charter, particularly for high-profile passengers or sensitive destinations."
        },
        {
            question: 'Can customized branding or personalization on the jet affect the charter price?',
            answer: "Customized branding or personalization on a private jet, such as tailored exterior decals or interior modifications, can indeed affect the charter price. These customizations involve additional costs for design, implementation, and possibly removal, leading to a higher overall charter cost. Such services are often requested for corporate or special event purposes, reflecting unique branding or thematic preferences."
        },
        {
            question: 'What are the insurance requirements and how do they influence the total charter cost?',
            answer: "Insurance requirements for private jet charters, including liability and hull insurance, are mandatory and often included in the charter cost. These cover potential damages, accidents, and third-party liabilities. The extent and coverage of insurance can influence the total charter cost, as higher coverage levels entail higher premiums, indirectly increasing the charter rates."
        },
        {
            question: 'How are costs affected if the charter includes multiple stops or destinations?',
            answer: "Costs for private jet charters that include multiple stops or destinations generally increase due to additional landing fees, increased fuel consumption, and crew accommodations if overnight stays are required. Each stop can add complexity and time to the itinerary, thereby raising the overall cost of the charter."
        },
        {
            question: 'Are there any membership models available that affect the overall cost of chartering private jets frequently?',
            answer: "Yes, there are membership models available that can affect the overall cost of chartering private jets frequently. These memberships often offer reduced rates, priority booking, and other perks in exchange for a recurring fee or prepaid hours. Such programs are designed to provide cost savings and convenience for frequent flyers, making regular private jet travel more economically feasible."
        }
    ];

    const scrollToSection = (id: string) => {
        toggleSection(id);

        setTimeout(() => {
            const section = document.getElementById(id);
            const headerOffset = 180;

            if (section) {
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            } else {
            }
        }, 300);
    };
    return (
        <>
            <section className='flex relative justify-between px-5 md:px-10 lg:px-20 pb-0'>
                <div className='w-[65%] max-[700px]:w-full flex flex-col gap-y-[30px]'>
                    <Collapsible
                        key={1}
                        question={'General Cost Breakdown'}
                        answer={
                            <div id='general-cost-breakdown'>
                                <h3 className='font-bold text-black'>Billable Flight Time</h3>
                                <p className='mb-6 mt-8 '>Billable flight time refers to the duration for which clients are charged for the use of an aircraft. It starts from the moment the aircraft begins to move for takeoff and concludes when it comes to a stop after landing. While there’s a standard practice in the aviation industry to charge a minimum of 2 hours per day for aircraft rental and charter services, this is particularly prevalent in Jet Card programs. In the on-demand charter world, operators often rely on system-generated flight times for billing. They provide some flexibility, typically not charging extra if the actual flight time slightly exceeds the estimate, and similarly, not reducing charges for marginally shorter flights.</p>

                                <h3 className='font-bold text-black'>Fuel Surcharge</h3>
                                <p className='mb-6 mt-8 '>A fuel surcharge becomes applicable when there’s a notable rise in aviation fuel prices. This additional cost, reflecting current market fluctuations, can vary between $200 to $2,250 per hour, sometimes even higher, depending on the size and type of the aircraft. At Jetlevel Aviation, we prioritize transparency and client convenience. Therefore, we include any potential fuel surcharges directly in our initial quotes.</p>

                                <h3 className='font-bold text-black'>Crew Fees</h3>
                                <p className='mb-6 mt-8 '>Crew fees go beyond basic salaries, reflecting the expertise and experience necessary for safe, efficient flight operations. These fees, generally ranging from $600 for domestic locations to $2,000 for larger crews and international destinations, basically vary according to the flight’s duration, route intricacy, and specific demands of each journey. Notably, longer or more complex routes may involve higher fees due to the increased workload and expertise required from the crew.</p>

                                <h3 className='font-bold text-black'>Federal Excise Tax (FET)</h3>
                                <p className='mb-6 mt-8 '>Federal Excise Tax (FET) is an essential component of the costs associated with private jet charters in the United States. Levied by the federal government, FET is 7.5% of the air transportation charges. This tax is not only applicable to domestic journeys but also extends to segments of international flights traversing U.S. airspace. A key aspect to remember is the additional segment fee, charged per leg of the flight, which varies depending on the route and aircraft type.At JetLevel Aviation, this tax is accounted for in the overall cost of the private jet charter, ensuring our clients receive a transparent and all-inclusive quote that reflects the total expense, including FET, without any hidden fees.</p>


                                <h3 className='font-bold text-black'>Segment Fees</h3>
                                <p className='mb-6 mt-8 '>Segment fees are a government tax charge for passengers, typically applied per leg in the itinerary. In the U.S. These fees are often around $4.30 per segment for each passenger. They’re used to fund Federal Aviation Administration (FAA) costs, and it’s an addition to the 7.5% Federal Excise Tax (FET).</p>

                                <h3 className='font-bold text-black'>Additional Concierge Services</h3>
                                <p className='mb-6 mt-8 '>Additional concierge services in private jet charter, like bespoke travel arrangements or special requests, add a personalized touch but also impact the overall cost. These services can include anything from booking luxury ground transportation, securing reservations at exclusive restaurants, to arranging event tickets or special on-board amenities. The cost varies greatly depending on the nature and complexity of the services, potentially ranging from a few hundred to several thousand dollars.</p>

                            </div>
                        }
                        iconStyle="caret"
                        iconPosition="end"
                        classNames='pt-0'
                        isOpen={faqSection === 'general-cost-breakdown'}
                        onClick={() => toggleSection('general-cost-breakdown')}
                    />

                    <Collapsible
                        key={2}
                        question={'Factors Affecting Charter Costs'}
                        answer={
                            <div id='factors-affecting-charter-costs'>
                                <h3 className='font-bold text-black'>Flight Time & Distance</h3>
                                <p className='mb-6 mt-8 '>The cost to charter a private jet can vary significantly based on flight time and distance. Shorter flights might cost around $1,800 to $3,800 per hour, while longer, intercontinental journeys can escalate to $14,000 per hour or more. This is due to factors like fuel consumption, crew expenses, and aircraft type. For instance, a flight from New York(KJFK) to Los Angeles(KLAX) can cost approximately $45,000, while a shorter hop like New York(KJFK) to Miami(KMIA) might be around $20,000. These costs are approximate and depend on specific aircraft and journey .</p>

                                <h3 className='font-bold text-black'>Charter Destination</h3>
                                <p className='mb-6 mt-8 '>The destination of your private jet charter significantly influences the cost. Popular destinations might offer more competitive pricing due to higher demand and availability of aircraft. For example, a charter flight to a major city like Las Vegas or New York could be more cost-effective compared to remote or less frequented locations. International destinations generally increase the cost, with factors like international fees and longer flight durations playing a role.</p>
                                <p className='mb-6 mt-8 '><span>A private jet charter from the USA to Europe</span>, for instance, A heavy jet like Falcon 900EX from Orlando(KMCO) to Barcelona(KBCN) can cost about $120,000 or more.</p>

                                <h3 className='font-bold text-black'>Aircraft Type</h3>
                                <p className='mb-6 mt-8 '>The <span>type of aircraft</span> chosen for a private jet charter greatly impacts the cost. Smaller, light jets suitable for short trips may cost around $5,400 to $6,300 per hour. Mid-size jets, offering more space and longer range, typically range from $6,000 to $8,000 per hour. For larger groups or long-haul flights, heavy jets are ideal, with costs ranging from $10,000 to $14,000 per hour. Ultra-long-range jets, providing the utmost in luxury and distance capabilities like transatlantic flight, can exceed $14,000 per hour.</p>

                                <h3 className='font-bold text-black'>Age of Aircraft</h3>
                                <p className='mb-6 mt-8 '>The age of the aircraft is a crucial factor in determining private jet charter costs. Newer jets, often featuring the latest in technology and luxury amenities, command higher prices, potentially adding thousands to the hourly rate. For example, the latest model, a brand new heavy jet like Gulfstream 700, might cost around $18,000 per hour. In contrast, older models, while still safe and comfortable like Gulfstream G-IV, can be more budget-friendly, with hourly rates possibly around $14,000.</p>

                                <Image src="/images2/HEro banner.jpg" width={100} height={100} alt='plane' className='w-full h-[500px] mt-5 mb-6' unoptimized />

                                <h3 className='font-bold text-black'>Peak Demand Scheduling</h3>
                                <p className='mb-6 mt-8 '>During peak demand periods, the cost of chartering a private jet typically increases due to higher demand and limited availability of aircraft. These periods often include holidays, major events, or business seasons. For instance, chartering a jet during Christmas or the Super Bowl can be significantly more expensive, sometimes by 20% to 50%, compared to off-peak times.</p>

                                <p className='font-bold mb-6'>Expert Tip from Ricky Gomulka, Founder and Managing Partner</p>
                                <div>
                                    <p className='border-l-[6px] pl-4 border-[#1F3E54]'>While we pride ourselves on accommodating last-minute bookings, I always advise our clients to plan ahead, especially during peak demand seasons. Booking early not only secures better rates but also ensures a wider choice of aircraft. Remember, the closer you get to major holidays or events like Christmas or the Super Bowl, the steeper the prices can climb – sometimes up to 50% more. Early planning is key to enjoying the luxury of private jet travel without unnecessary surcharges.</p>
                                </div>
                            </div>
                        }
                        iconStyle="caret"
                        iconPosition="end"
                        isOpen={faqSection === 'factors-affecting-charter-costs'}
                        onClick={() => toggleSection('factors-affecting-charter-costs')}
                    />

                    <Collapsible
                        key={3}
                        question={'Additional Costs and Fees'}
                        answer={
                            <div id='additional-costs-and-fees'>
                                <h3 className='font-bold text-black pb-2'>In-flight Phone Usage</h3>
                                <span className='text-lg'>($5 to $11 per minute)</span>
                                <p className='mb-6 mt-8 '>In-flight phone use on private jets can be costly, often ranging from $5 to $8 per minute domestically, while for international flights it can cost between $8 to $11 per minute. Charges are based on usage, so longer calls or data use can significantly increase costs. It’s wise to check rates and consider alternatives like Wi-Fi for calls to manage expenses.</p>

                                <h3 className='font-bold text-black pb-2'>De-icing</h3>
                                <span>($1,500 to $10,000)</span>
                                <p className='mb-6 mt-8 '>De-icing is a crucial safety measure for private jet charters in cold weather. The process involves removing ice and snow from the aircraft with a de-icing fluid, ensuring safe operation. The cost of de-icing varies depending on the size of the jet and the amount of ice build-up, ranging from $1,500 to $10,000 or more. For smaller jets like light jets it can cost around $1,500 while larger jets like airliners can cost more then $10,000 since they require more de-icing fluid.</p>

                                <h3 className='font-bold text-black pb-2'>Airport Landing Fees</h3>
                                <span>($100 to $1,500 per flight)</span>
                                <p className='mb-6 mt-8 '>Airport landing fees are a standard charge for private jet charters,ranging from $100 to $1,500 per flight and varying based on the airport’s size and location. Smaller airports might charge a few hundred dollars, while major international hubs can charge several thousand. These fees cover the use of airport facilities and services. It’s important to factor these into the overall cost of your charter, as they can add a significant amount to the total, especially for multi-leg trips as they involve multiple landing.</p>

                                <h3 className='font-bold text-black pb-2'>Hangar Rentals</h3>
                                <span>($500 to $1,500 per day)</span>
                                <p className='mb-6 mt-8 '>This is like renting a garage for your car but for jets. It’s the cost for storing the aircraft in a hangar, particularly important for protecting the jet from harsh weather. If your jet stays overnight or for several days at an airport, it might be kept in a hangar, leading to rental charges. These fees depend on the airport and the size of the aircraft. It’s wise to consider these as extra parking costs when planning your jet charter, especially for longer stays as they are calculated per day.</p>

                                <h3 className='font-bold text-black pb-2'>Ramp and Handling Fees</h3>
                                <span>($100 to $500 per visit)</span>
                                <p className='mb-6 mt-8 '>These are more like the valet services for your jet. They cover the costs of services provided on the ground, such as parking the jet on the airport ramp (which is basically the jet parking lot), servicing the aircraft, and any ground support needed while the aircraft is at the airport. These fees can vary based on the airport’s size and the level of service they provide, and are charged by the fixed-base operator (FBO).</p>

                                <h3 className='font-bold text-black pb-2'>Overnight Accommodation</h3>
                                <span>($150 to $300 per crew member)</span>
                                <p className='mb-6 mt-8 '>Overnight accommodation costs for the crew can impact the overall price of a private jet charter. If your trip requires the crew to stay overnight or for multiple nights, you’ll need to cover their hotel and possibly meal expenses. These costs can vary greatly depending on the location and duration of the stay. For example, a night’s stay in a standard hotel might add approximately $150 to $300 per crew member, while upscale locations could be higher.</p>

                                <h3 className='font-bold text-black pb-2'>Short Leg Fees (Applied on under 1-2 hour flight time)</h3>
                                <p className='mb-6 mt-8 '>Short leg fees are added costs on private jet charters for exceptionally brief flights, often applied when a trip is below a certain mileage or time threshold, like under 1 hour or 2 hours of flight time. These fees compensate for the operational costs not covered by the minimum billing. For example, a jet might have a 2-hour minimum charge, so a 1-hour flight could still incur the cost of 2 hours.</p>

                                <h3 className='font-bold text-black pb-2'>Aircraft Positioning Fees</h3>
                                <p className='mb-6 mt-8 '>A charter client will pay aircraft positioning fees in scenarios where the chosen jet isn’t located at the departure airport. For example, if you’re flying out of Los Angeles but the jet is based in San Francisco, the jet needs to be flown, or ‘positioned,’ to Los Angeles for your trip. This positioning involves additional flight time, fuel, crew, and maintenance costs, all of which contribute to the fee. Essentially, it’s like a delivery charge for bringing the jet to your starting point. Aircraft positioning fees typically cost less than the standard charter rate that a broker quotes for the actual flight. These fees are meant to cover the operational costs of moving the aircraft to your departure point.</p>

                                <h3 className='font-bold text-black pb-2'>Cleaning Fees</h3>
                                <span>($150 to $350 per charter)</span>
                                <p className='mb-6 mt-8 '>Cleaning fees for private jet charters cover the cost of cleaning and sanitizing the aircraft before and after each flight. These fees have become particularly significant in maintaining high hygiene standards after COVID-19. Depending on the size of the jet and the level of service, cleaning fees can range from $150 to $350 per charter.</p>

                                <h3 className='font-bold text-black pb-2'>Aircraft Daily Minimums</h3>
                                <p className='mb-6 mt-8 '>Aircraft daily minimums in private jet charter typically refer to a required minimum number of billable flight hours per day when booking a charter. Most aircraft have a 2-hour daily minimum. For instance, if you book a 3-day round-trip, the cost might reflect 6 hours of billable flight time (3 days x 2 hours) even if the actual flight time is less. This daily minimum ensures revenue for aircraft owners for the days the aircraft is reserved, even if the actual flying time is shorter.</p>

                                <Table
                                    border={true}
                                    column={[
                                        {
                                            heading: 'Aircraft Type',
                                            accessor: 'aircraftType',
                                        },
                                        {
                                            heading: 'Daily Minimum Hours',
                                            accessor: 'dailyMinutes',
                                        }
                                    ]} data={[
                                        {
                                            aircraftType: 'Turboprop',
                                            dailyMinutes: '1.5 hours'
                                        },
                                        {
                                            aircraftType: 'Midsize Jets',
                                            dailyMinutes: '2 hours'
                                        },
                                        {
                                            aircraftType: 'Large Jets',
                                            dailyMinutes: '2.5 hours'
                                        }
                                    ]}
                                    button={false}
                                />
                                <h3 className='font-bold text-black pb-2 mt-6'>Cost of Medical Evacuation Services</h3>
                                <span>($10,000 to $100,000+)</span>
                                <p className='mb-6 mt-8 '>The cost of medical evacuation services via private jet can be substantial, reflecting the specialized nature of these flights. Prices typically start around $10,000 and can exceed $100,000, depending on factors like the distance of the flight, the type of aircraft required, and the level of medical care needed. For instance, a medevac flight within the United States may be on the lower end of the scale, while international medical repatriation can be much more expensive due to longer distances and additional logistical complexities.</p>

                                <h3 className='font-bold text-black pb-2'>Refueling</h3>
                                <p className='mb-6 mt-8 '>Refueling costs are a key component of private jet charter expenses. The cost depends on the aircraft’s fuel consumption rate and the current price of jet fuel. For instance, refueling a light jet might cost between $2,000 to $3,000, while larger jets could incur $5,000 to $10,000 or more per refueling. These costs vary with fuel price fluctuations and the specific fuel needs of the aircraft. It’s important to note that longer flights requiring multiple refueling stops can substantially increase the total charter cost.</p>

                                <Table
                                    border={true}
                                    column={[
                                        {
                                            heading: 'Aircraft Type',
                                            accessor: 'aircraftType',
                                        },
                                        {
                                            heading: 'Fuel Consumption Rate',
                                            accessor: 'fuelConsumed',
                                        },
                                        {
                                            heading: 'Flat Amount Per Hour',
                                            accessor: 'amount',
                                        }
                                    ]} data={[
                                        {
                                            aircraftType: 'Light Jet',
                                            fuelConsumed: 'Moderate',
                                            amount: '$625 per hour'
                                        },
                                        {
                                            aircraftType: 'Midsize Jets',
                                            fuelConsumed: 'Higher than Light Jet',
                                            amount: '$800 per hour'
                                        },
                                        {
                                            aircraftType: 'Super-Midsize Jet',
                                            fuelConsumed: 'Higher than Midsize Jet',
                                            amount: '$850 per hour'
                                        },
                                        {
                                            aircraftType: 'Heavy Jet',
                                            fuelConsumed: 'High',
                                            amount: '$925 per hour'
                                        }
                                    ]}
                                    button={false}
                                />

                                <h3 className='font-bold text-black pb-2 mt-6'>Unscheduled Itinerary Changes</h3>
                                <p className='mb-6 mt-8 '>Making changes to your flight plan, especially last minute, can incur additional fees. For instance, altering the destination might result in rerouting fees, additional fuel costs, and possibly crew accommodation expenses, potentially adding thousands to your bill. Similarly, changing departure times could lead to crew overtime charges or overnight fees for the aircraft.</p>

                                <h3 className='font-bold text-black pb-2'>International Charges</h3>
                                <span>($1,000 to $10,000)</span>
                                <p className='mb-6 mt-8 '>International charges can include international handling fees, customs and immigration services, and potentially higher landing and parking fees at international airports. For example, a transatlantic flight might incur additional costs ranging from $1,000 to $10,000 or more, depending on the destination, length of stay, and airport fees. Overflight permits and navigation charges also contribute to these costs.</p>

                            </div>
                        }
                        iconStyle="caret"
                        iconPosition="end"
                        isOpen={faqSection === 'additional-costs-and-fees'}
                        onClick={() => toggleSection('additional-costs-and-fees')}
                    />

                    <Collapsible
                        key={4}
                        question={'Comparative Cost Analysis'}
                        answer={
                            <div id='comparative-cost-analysis'>
                                <h3 className='font-bold text-black pb-2'>How Much Do Private Jets of Different Sizes Cost?</h3>
                                <p className='mb-6 mt-8 '>Aircraft for private jet charter are differentiated by size, each suited to specific travel needs based on range, passenger capacity, and luggage space. Typically, the larger the jet, the longer the range it can cover and the more passengers and baggage it can accommodate. Correspondingly, the hourly rental rates increase with the size of the aircraft.</p>
                                <p className='mb-6 mt-8 '>The cost of chartering a private jet is influenced by multiple factors including the jet’s size, model, and age. It’s essential to select an aircraft not just by its size, but also by its ability to reach your destination efficiently. For example, opting for a smaller jet might seem cost-effective due to lower hourly rates, but if it requires additional fuel stops, this could extend your travel time and add unforeseen expenses. In some cases, a larger aircraft, despite a higher hourly rate, could offer better overall value by eliminating the need for refueling stops and reducing total travel time. This balance between size, range, and cost is a key consideration when planning your private jet charter.</p>

                                <h3 className='font-bold text-black pb-2'>Turboprops</h3>
                                <p className='mb-6 mt-8 '>Turboprops are an efficient choice for shorter journeys, featuring turbine propeller engines that offer a unique blend of performance and convenience. Typically seating between 5 to 11 passengers, these aircraft boast an average cabin height of about 4.8 feet, ensuring a comfortable travel experience. With their capability to cover ranges of 3 to 6 hours, turboprops are ideal for trips under 1,000 miles, especially advantageous for accessing airports with shorter runways.</p>

                                <Table
                                    border={false}
                                    column={[
                                        {
                                            heading: 'Name',
                                            accessor: 'name',
                                        },
                                        {
                                            heading: 'Passenger Capacity',
                                            accessor: 'capacity',
                                        },
                                        {
                                            heading: 'Range',
                                            accessor: 'range',
                                        },
                                        {
                                            heading: 'Speed',
                                            accessor: 'speed',
                                        },
                                        {
                                            heading: 'Hourly Rate	',
                                            accessor: 'hourlyRate',
                                        },
                                        {
                                            heading: 'Max Airtime',
                                            accessor: 'maxAirtime',
                                        }
                                    ]} data={[
                                        {
                                            name: 'King Air 250',
                                            capacity: '6-8 passengers',
                                            range: '1,720 nm or 1,980 miles',
                                            speed: '310 kts or 357 mph',
                                            hourlyRate: '$2,300 - $2,900',
                                            maxAirtime: '~5.55 hours'
                                        },
                                        {
                                            name: 'King Air 350',
                                            capacity: '9-11 passengers',
                                            range: '1,550 nm or 1,784 miles',
                                            speed: '310 kts or 357 mph',
                                            hourlyRate: '$4,300 - $5,600',
                                            maxAirtime: '~5.00 hours'
                                        },
                                        {
                                            name: 'Pilatus PC12',
                                            capacity: '6-8 passengers',
                                            range: '1,803 nm or 2,075 miles',
                                            speed: '268 kts or 308 mph',
                                            hourlyRate: '$2,300 - $2,900',
                                            maxAirtime: '~6.73 hours'
                                        },
                                        {
                                            name: 'Cessna Caravan',
                                            capacity: '7-9 passengers',
                                            range: '1,070 nm or 1,231 miles',
                                            speed: '186 kts or 214 mph	',
                                            hourlyRate: '$1,900 - $3,900',
                                            maxAirtime: '~5.75 hours'
                                        },
                                        {
                                            name: 'TBM Socata 850',
                                            capacity: '5-6 passengers',
                                            range: '1191 nm or 1,370 miles',
                                            speed: '317 kts or 364 mph',
                                            hourlyRate: '$1,700 - $3,700',
                                            maxAirtime: '~3.76 hours'
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8 '>For example, a trip from Aspen to Denver in a modern Pilatus PC-12NG, carrying 8 passengers, would take roughly 45 minutes. With an average hourly rate of about $2,300, this journey would cost approximately $1,725. In another scenario, flying from Martha’s Vineyard to Boston in a Beechcraft King Air 250, ideal for 7 passengers, the estimated flight time is 35 minutes. Given an hourly rate of $2,300, the total cost for this route would be around $1,340. Lastly, a journey from Napa Valley to Los Angeles in a sleek TBM 930, accommodating 6 passengers, can be expected to take about 1 hour and 20 minutes. At an hourly rate of $2,500, this flight would approximate $3,300. These examples showcase the efficiency and cost-effectiveness of turboprops for shorter, regional travel.</p>

                                <h3 className='font-bold text-black pb-2'>Very Light Jet</h3>
                                <p className='mb-6 mt-8 '>Very Light Jets (VLJs) represent a revolution in air travel, offering an economical yet comfortable option for short-haul flights. These jets typically seat 4 to 7 passengers and are powered by modern, efficient engines. Renowned for their cost-effectiveness and lower operational costs, VLJs are an ideal solution for small groups and individuals traveling on shorter routes, up to about 1,500 miles. They provide a cozy cabin space, perfect for quick business trips or weekend getaways, without the larger footprint of traditional private jets.</p>

                                <Table
                                    border={false}
                                    column={[
                                        {
                                            heading: 'Name',
                                            accessor: 'name',
                                        },
                                        {
                                            heading: 'Passenger Capacity',
                                            accessor: 'capacity',
                                        },
                                        {
                                            heading: 'Range',
                                            accessor: 'range',
                                        },
                                        {
                                            heading: 'Speed',
                                            accessor: 'speed',
                                        },
                                        {
                                            heading: 'Hourly Rate	',
                                            accessor: 'hourlyRate',
                                        },
                                        {
                                            heading: 'Max Airtime',
                                            accessor: 'maxAirtime',
                                        }
                                    ]} data={[
                                        {
                                            name: 'Citation M2',
                                            capacity: '5-7 passengers',
                                            range: '1,550 nm or 1,784 miles',
                                            speed: '404 kts or 465 mph',
                                            hourlyRate: '$4,900 - $6,900',
                                            maxAirtime: '3.84 hours'
                                        },
                                        {
                                            name: 'Honda Jet',
                                            capacity: '5-6 passengers',
                                            range: '1,223 nm or 1,407 miles',
                                            speed: '422 kts or 485 mph	',
                                            hourlyRate: '$4,900 - $6,900',
                                            maxAirtime: '2.90 hours'
                                        },
                                        {
                                            name: 'Phenom 100',
                                            capacity: '4-6 passengers',
                                            range: '1,519 nm or 1,748 miles',
                                            speed: '389 kts or 448 mph',
                                            hourlyRate: '$4,400 - $6,400',
                                            maxAirtime: '3.90 hours'
                                        },
                                        {
                                            name: 'Vision Jet',
                                            capacity: '6-7 passengers',
                                            range: '1,275 nm or 1,467 miles',
                                            speed: '305 kts or 351 mph		',
                                            hourlyRate: '$4,200 - $6,200',
                                            maxAirtime: '4.18 hours'
                                        },
                                        {
                                            name: 'Eclipse 550',
                                            capacity: '4-6 passengers',
                                            range: '1,125 nm or 1,295 miles',
                                            speed: '375 kts or 430 mph',
                                            hourlyRate: '$4,200 - $6,200',
                                            maxAirtime: '3.00 hours'
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8 '>For example, a flight from Boston to Washington D.C. in a Cessna Citation Mustang, which comfortably seats 4 passengers, would take about 1 hour and 30 minutes. Considering the average hourly rate of $3,000 for VLJs, this trip would amount to approximately $4,500. Another scenario could be a journey from Las Vegas to Los Angeles in an Eclipse 500, known for its efficiency and speed, accommodating 4 passengers. This flight would last around 1 hour and 10 minutes, and with an hourly rate of $4,200, the estimated cost would be about $4,900. VLJs like these offer an accessible entry point into private jet travel, combining convenience, affordability, and the luxury of private aviation.</p>

                                <h3 className='font-bold text-black pb-2'>Light Jet</h3>
                                <p className='mb-6 mt-8 '>Light jets, distinguishable by their sleek design and advanced jet engines, cater superbly to small groups seeking speed and efficiency. Typically seating 6 to 9 passengers, these jets offer a compact yet luxurious cabin environment, ideal for short to medium-range flights. With an impressive cruising speed of around ~450 mph and a range of 1,700 to 2,300 nautical miles, light jets are perfect for quick city hops or efficient business trips. They provide a harmonious blend of comfort, speed, and functionality, making them a preferred choice for travelers looking for a step above turboprops in both performance and luxury.</p>

                                <Table
                                    border={false}
                                    column={[
                                        {
                                            heading: 'Name',
                                            accessor: 'name',
                                        },
                                        {
                                            heading: 'Passenger Capacity',
                                            accessor: 'capacity',
                                        },
                                        {
                                            heading: 'Range',
                                            accessor: 'range',
                                        },
                                        {
                                            heading: 'Speed',
                                            accessor: 'speed',
                                        },
                                        {
                                            heading: 'Hourly Rate	',
                                            accessor: 'hourlyRate',
                                        },
                                        {
                                            heading: 'Max Airtime',
                                            accessor: 'maxAirtime',
                                        }
                                    ]} data={[
                                        {
                                            name: 'Citation Encore+',
                                            capacity: '7-9 passengers',
                                            range: '1,712 nm or 1,800 miles',
                                            speed: '430 kts or 495 mph',
                                            hourlyRate: '$5,900 - $7,900',
                                            maxAirtime: '~4.00 hours'
                                        },
                                        {
                                            name: 'Citation CJ3',
                                            capacity: '6-8 passengers',
                                            range: '2,000 nm or 2,000 miles',
                                            speed: '480 kts or 552 mph	',
                                            hourlyRate: '$5,900 - $7,900	',
                                            maxAirtime: '~4.20 hours'
                                        },
                                        {
                                            name: 'Phenom 300',
                                            capacity: '6-7 passengers',
                                            range: '1,971 nm or 2,000 miles',
                                            speed: '430 kts or 495 mph',
                                            hourlyRate: '$6,250 - $7,450',
                                            maxAirtime: '~4.60 hours'
                                        },
                                        {
                                            name: 'Nextant 400XTI',
                                            capacity: '6-8 passengers',
                                            range: '1,801 nm or 2,003 miles',
                                            speed: '447 kts or 514 mph	',
                                            hourlyRate: '$5,400 - $7,400',
                                            maxAirtime: '~4.00 hours'
                                        },
                                        {
                                            name: 'Lear 45XR',
                                            capacity: '8-9 passengers',
                                            range: '2,301 nm or 2,100 miles',
                                            speed: '400 kts or 460 mph',
                                            hourlyRate: '$6,400 - $8,400',
                                            maxAirtime: '~5.75 hours'
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8 '>For instance, a flight from Miami to New York in a sleek Embraer Phenom 300, accommodating 7 passengers, would take around 2 hours and 30 minutes. At an average hourly rate of $5,400 for light jets, this journey would cost approximately $13,500. Alternatively, a trip from San Francisco to Seattle in a HondaJet, known for its innovative design and efficient performance, carrying 6 passengers, would last about 2 hours. With an hourly rate of $4,900, the total cost for this route would be roughly $9,800. Light jets like these combine efficiency, luxury, and speed, making them a fantastic choice for travelers seeking a comfortable and swift journey.</p>

                                <h3 className='font-bold text-black pb-2'>Midsize Jet</h3>
                                <p className='mb-6 mt-8 '>Midsize jets stand out as the versatile choice for longer domestic or short international flights, offering a comfortable balance between range and luxury. Typically accommodating 7 to 9 passengers, these jets provide more cabin space, enabling passengers to stand up and move around with ease. With an average range of about 2,100 to 3,200 nautical miles and a cruising speed of around ~500 mph, midsize jets are ideal for travelers seeking enhanced comfort without venturing into the larger, more costly jet categories. They often feature amenities like WiFi, enhanced soundproofing, and superior in-flight entertainment systems, making them suitable for both business and leisure travel.</p>

                                <Table
                                    border={false}
                                    column={[
                                        {
                                            heading: 'Name',
                                            accessor: 'name',
                                        },
                                        {
                                            heading: 'Passenger Capacity',
                                            accessor: 'capacity',
                                        },
                                        {
                                            heading: 'Range',
                                            accessor: 'range',
                                        },
                                        {
                                            heading: 'Speed',
                                            accessor: 'speed',
                                        },
                                        {
                                            heading: 'Hourly Rate	',
                                            accessor: 'hourlyRate',
                                        },
                                        {
                                            heading: 'Max Airtime',
                                            accessor: 'maxAirtime',
                                        }
                                    ]} data={[
                                        {
                                            name: 'Hawker 800XP',
                                            capacity: '8-9 passengers',
                                            range: '3,100 nm or 3,567 miles',
                                            speed: '419 kts or 482 mph	',
                                            hourlyRate: '$6,800 to $8,800	',
                                            maxAirtime: '~7.40 hours'
                                        },
                                        {
                                            name: 'Hawker 900XP',
                                            capacity: '6-8 passengers',
                                            range: '3,242 nm or 3,730 miles',
                                            speed: '419 kts or 482 mph	',
                                            hourlyRate: '$6,900 and $8,900	',
                                            maxAirtime: '~7.74 hours'
                                        },
                                        {
                                            name: 'Citation XLS',
                                            capacity: '7-9 passengers',
                                            range: '2,100 nm or 2,416 miles',
                                            speed: '441 kts or 507 mph',
                                            hourlyRate: '$6,800 and $8,800',
                                            maxAirtime: '~4.76 hours'
                                        },
                                        {
                                            name: 'Lear 60',
                                            capacity: '6-7 passengers',
                                            range: '2,405 nm or 2767 miles',
                                            speed: '425 kts or 489 mph	',
                                            hourlyRate: '$6,400 and $8,400',
                                            maxAirtime: '~5.66 hours'
                                        },
                                        {
                                            name: 'Lear 75',
                                            capacity: '6-8 passengers',
                                            range: '2,040 nm or 2347 miles',
                                            speed: '465 kts or 535 mph',
                                            hourlyRate: '$7,400 and $9,400',
                                            maxAirtime: '~4.39 hours'
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8 '>Consider a trip from New York to Miami in a Learjet 60, known for its spacious cabin and high performance, carrying 8 passengers. The estimated flight time for this route is around 3 hours. At an average hourly rate of $6,400 for midsize jets, the cost for this journey would be approximately $19,200. In another scenario, flying from Los Angeles to Toronto in a Hawker 800XP, which offers a blend of range and comfort for 9 passengers, the flight would take about 4 hours and 30 minutes. With an hourly rate of $6,900, the total cost for this flight would be around $31,000. Midsize jets, with their optimal balance of comfort, range, and cost, are a popular choice for those seeking a more luxurious travel experience without the extravagance of larger jets.</p>

                                <h3 className='font-bold text-black pb-2'>Super-Midsize Jet</h3>
                                <p className='mb-6 mt-8 '>Super-midsize jets elevate the private flying experience, blending the spaciousness of a large jet with the efficiency of a midsize model. Seating typically ranges from 8 to 10 passengers, with cabins spacious enough for standing and moving about comfortably. These jets are ideal for longer-range flights, boasting ranges of approximately 2,800 to 3,400 nautical miles and cruising speeds close to 525 mph. Super-midsize jets often feature enhanced amenities such as full stand-up cabins, more luxurious seating, advanced entertainment systems, and full-service galleys, catering to both business and leisure travelers seeking a higher level of comfort and luxury.</p>

                                <Table
                                    border={false}
                                    column={[
                                        {
                                            heading: 'Name',
                                            accessor: 'name',
                                        },
                                        {
                                            heading: 'Passenger Capacity',
                                            accessor: 'capacity',
                                        },
                                        {
                                            heading: 'Range',
                                            accessor: 'range',
                                        },
                                        {
                                            heading: 'Speed',
                                            accessor: 'speed',
                                        },
                                        {
                                            heading: 'Hourly Rate	',
                                            accessor: 'hourlyRate',
                                        },
                                        {
                                            heading: 'Max Airtime',
                                            accessor: 'maxAirtime',
                                        }
                                    ]} data={[
                                        {
                                            name: 'Citation X',
                                            capacity: '8-9 passengers',
                                            range: '3,125 nm or 3,596 miles',
                                            speed: '525 kts or 604 mph		',
                                            hourlyRate: '$8,900 - $10,900	',
                                            maxAirtime: '~5.95 hours'
                                        },
                                        {
                                            name: 'Citation Sovereign',
                                            capacity: '8-9 passengers',
                                            range: '2,847 nm or 3,276 miles',
                                            speed: '430 kts or 495 mph	',
                                            hourlyRate: '$8,900 - $10,900	',
                                            maxAirtime: '~6.62 hours'
                                        },
                                        {
                                            name: 'Falcon 50EX',
                                            capacity: '9-10 passengers',
                                            range: '3,230 nm or 3,717 miles	',
                                            speed: '417 kts or 480 mph',
                                            hourlyRate: '$7,900 - $9,900',
                                            maxAirtime: '~7.75 hours'
                                        },
                                        {
                                            name: 'Challenger 300',
                                            capacity: '8-9 passengers',
                                            range: '3,100 nm or 3,567 miles',
                                            speed: '470 kts or 540 mph	',
                                            hourlyRate: '$10,900 - $12,900	',
                                            maxAirtime: '~6.60 hours'
                                        },
                                        {
                                            name: 'Gulfstream G200	',
                                            capacity: '8-10 passengers	',
                                            range: '3,400 nm or 3,912 miles',
                                            speed: '494 kts or 568 mph',
                                            hourlyRate: '$10,500 to $12,500',
                                            maxAirtime: '~6.88 hours'
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8 '>For instance, a flight from San Francisco to New York in a Challenger 350, renowned for its elegant interiors and range capabilities, accommodating 9 passengers, would take about 5 hours and 30 minutes. With an average hourly rate of $9,500 for super-midsize jets, this journey would cost approximately $52,250. Alternatively, a trip from Seattle to Miami in a Cessna Citation X, one of the fastest business jets, carrying 8 passengers, is estimated to take around 6 hours. At an hourly rate of $10,000, the total cost for this route would be around $60,000. Super-midsize jets, with their combination of luxury, range, and comfort, are an excellent choice for those requiring a bit more space and luxury for their long-haul flights.</p>

                                <h3 className='font-bold text-black pb-2'>Heavy Jet</h3>
                                <p className='mb-6 mt-8 '>Heavy jets are the epitome of luxury and range in private aviation, designed for long-haul travel and larger groups. These aircraft typically accommodate 8 to 16 passengers, offering ample cabin space that includes areas for dining, relaxation, and even sleeping quarters in some models. With a range of about 3,000 to 6,000 nautical miles and cruising speeds of around ~525 mph, heavy jets are perfect for transcontinental and international journeys, providing unmatched comfort and amenities like high-speed WiFi, gourmet catering facilities, and entertainment systems.</p>

                                <Table
                                    border={false}
                                    column={[
                                        {
                                            heading: 'Name',
                                            accessor: 'name',
                                        },
                                        {
                                            heading: 'Passenger Capacity',
                                            accessor: 'capacity',
                                        },
                                        {
                                            heading: 'Range',
                                            accessor: 'range',
                                        },
                                        {
                                            heading: 'Speed',
                                            accessor: 'speed',
                                        },
                                        {
                                            heading: 'Hourly Rate	',
                                            accessor: 'hourlyRate',
                                        },
                                        {
                                            heading: 'Max Airtime',
                                            accessor: 'maxAirtime',
                                        }
                                    ]} data={[
                                        {
                                            name: 'Gulfstream GIVSP',
                                            capacity: '13-16 passengers',
                                            range: '4,166 nm or 4,781 miles',
                                            speed: '435 kts or 500 mph		',
                                            hourlyRate: '$9,000 - $12,000	',
                                            maxAirtime: '~9.58 hours'
                                        },
                                        {
                                            name: 'Gulfstream GV',
                                            capacity: '12-16 passengers',
                                            range: '6,750 nm or 7,767 miles',
                                            speed: '435 kts or 500 mph	',
                                            hourlyRate: '$12,000 - $16,000	',
                                            maxAirtime: '~15.52 hours'
                                        },
                                        {
                                            name: 'Falcon 2000',
                                            capacity: '8-12 passengers',
                                            range: '3,130 nm or 3,601 miles	',
                                            speed: '487 kts or 560 mph	',
                                            hourlyRate: '$8,000 - $11,000',
                                            maxAirtime: '~6.43 hours'
                                        },
                                        {
                                            name: 'Falcon 900',
                                            capacity: '12 passengers',
                                            range: '3,970 nm or 4,569 miles',
                                            speed: '378 kts or 512 mph	',
                                            hourlyRate: '$11,000 - $14,000	',
                                            maxAirtime: '~10.50 hours'
                                        },
                                        {
                                            name: 'Challenger 605	',
                                            capacity: '10-12 passengers',
                                            range: '4,123 nm or 4,745 miles',
                                            speed: '447 kts or 514 mph',
                                            hourlyRate: '$8,000 - $11,000',
                                            maxAirtime: '~9.22 hours'
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8 '>Take, for example, a journey from Los Angeles to London in a Gulfstream G450. This aircraft, known for its spacious and luxurious cabin, can comfortably transport 14 passengers. The estimated flight time for this route is about 10 hours. At an average hourly rate of $12,000 for heavy jets, the cost for this transatlantic trip would be approximately $120,000. In another scenario, traveling from New York to Dubai in a Bombardier Global 6000, which offers a blend of luxury, range, and cabin comfort for 12 passengers, the flight duration is around 12 hours. With an hourly rate of $14,000, the total cost for this long-haul flight would be around $168,000. Heavy jets, with their superior range, spaciousness, and luxurious amenities, are ideal for travelers seeking the ultimate in comfort and style for their long-distance travels.</p>

                                <h3 className='font-bold text-black pb-2'>Regional Private Jet Cost Comparison</h3>
                                <h3 className='font-bold text-black pb-2'>USA, UK & Europe, Canada, South America, Asia</h3>
                                <p className='mb-6 mt-8 '>Comparing the cost of chartering the same type of private jet across different regions highlights how geographic location can significantly influence pricing. For this comparison, let’s use a midsize jet, a popular choice for its balance of comfort, range, and cost, and examine how its rental rates vary across various global regions.</p>
                                <p className='mb-6 mt-8 '>North America: Chartering a midsize jet like the Hawker 800XP from New York to Miami might cost around $20,400 for a 3-hour flight, based on an average hourly rate of $6,800. North America, with its well-developed aviation infrastructure, offers competitive pricing due to the high availability of aircraft.</p>
                                <p className='mb-6 mt-8 '>Europe: The same midsize jet, for instance, a Citation XLS, flying from London to Rome, a journey of approximately 4 hours, could cost about $28,000, with an average hourly rate of €7,000. Europe’s dense airspace and varying operational costs across countries can make charter prices slightly higher.</p>
                                <p className='mb-6 mt-8 '>Asia: In Asia, chartering a similar jet, like a Bombardier Challenger 350, for a flight from Dubai to Singapore (approximately 7 hours), could cost upwards of $70,000, with hourly rates around $10,000. Higher operational costs and less availability of private jets in certain areas of Asia often result in higher charter rates.</p>
                                <p className='mb-6 mt-8 '>Middle East: A flight from Dubai to Beirut in a midsize jet, say a Gulfstream G200, lasting around 3 hours, might cost around $30,000, at an average hourly rate of $10,000. The Middle East’s strategic location and the luxurious preferences of travelers can influence the higher pricing.</p>
                                <p className='mb-6 mt-8 '>Australia: Flying from Sydney to Perth in a midsize jet like a Learjet 60, which takes around 5 hours, could cost approximately $35,000, considering an hourly rate of $7,000. The vast distances and lower density of airports can affect charter prices in this region.</p>
                                <p className='mb-6 mt-8 '>This comparison illustrates how the same type of aircraft can vary in cost depending on the region, influenced by factors like availability, demand, operational costs, and regional economic conditions.</p>

                                <Table
                                    border={false}
                                    column={[
                                        {
                                            heading: 'Region',
                                            accessor: 'region',
                                        },
                                        {
                                            heading: 'Aircraft Type',
                                            accessor: 'aircraftType',
                                        },
                                        {
                                            heading: 'Route',
                                            accessor: 'route',
                                        },
                                        {
                                            heading: 'Flight Time',
                                            accessor: 'time',
                                        },
                                        {
                                            heading: 'Hourly Rate	',
                                            accessor: 'hourlyRate',
                                        },
                                        {
                                            heading: 'Total Cost',
                                            accessor: 'cost',
                                        }
                                    ]} data={[
                                        {
                                            region: 'North America',
                                            aircraftType: 'Hawker 800XP	',
                                            route: 'New York to Miami',
                                            time: '3 hours		',
                                            hourlyRate: '$7,000	',
                                            cost: '$21,000'
                                        },
                                        {
                                            region: 'Europe',
                                            aircraftType: 'Citation XLS	',
                                            route: 'London to Rome',
                                            time: '4 hours		',
                                            hourlyRate: '€7,000	',
                                            cost: '€28,000'
                                        },
                                        {
                                            region: 'Asia',
                                            aircraftType: 'Challenger 350	',
                                            route: 'Dubai to Singapore',
                                            time: '7 hours		',
                                            hourlyRate: '$10,000	',
                                            cost: '$70,000'
                                        },
                                        {
                                            region: 'Middle East',
                                            aircraftType: 'Gulfstream G200	',
                                            route: 'Dubai to Beirut',
                                            time: '3 hours		',
                                            hourlyRate: '$10,000	',
                                            cost: '$30,000'
                                        },
                                        {
                                            region: 'Australia',
                                            aircraftType: 'Learjet 60	',
                                            route: 'Sydney to Perth',
                                            time: '5 hours	',
                                            hourlyRate: '$7,000	',
                                            cost: '$35,000'
                                        },
                                    ]}
                                    button={false}
                                />

                                <h3 className='font-bold text-black pb-2 pt-6'>Price Comparison with First-Class Commercial Flights</h3>
                                <p className='mb-6 mt-8 '>Comparing the cost of private jet charter with first-class commercial flights reveals distinct differences. While first-class seats on commercial flights are more affordable, private jet charter offer unparalleled privacy, convenience, and flexibility. For example, a first-class commercial ticket might cost between $5,000 to $10,000 for a transcontinental flight in the U.S., whereas a private jet charter for the same route could range from $20,000 to $35,000, depending on the aircraft type and amenities.</p>

                                <h3 className='font-bold text-black pb-2'>Membership or Subscription Models</h3>
                                <p className='mb-6 mt-8 '>Membership or subscription models in private jet chartering are innovative programs where clients pay a regular fee for access to a fleet of jets, often at preferential rates. These models can provide cost savings and added convenience for frequent flyers, offering a range of benefits like guaranteed availability, fixed hourly rates, and reduced overall travel costs. Currently, JetLevel Aviation is excited to explore the potential of introducing such a membership or subscription model. While we don’t offer this service yet, we’re working towards providing this option to our clients soon, enhancing the flexibility and benefits of flying with JetLevel Aviation. Stay tuned for updates on this forthcoming feature!</p>
                            </div>
                        }
                        iconStyle="caret"
                        iconPosition="end"
                        isOpen={faqSection === 'comparative-cost-analysis'}
                        onClick={() => toggleSection('comparative-cost-analysis')}
                    />

                    <Collapsible
                        key={5}
                        question={'Additional Considerations in Charter Pricing'}
                        answer={
                            <div id='additional-considerations-in-charter-pricing'>
                                <h3 className='font-bold text-black'>Customization Costs</h3>
                                <p className='mb-6 mt-8 '>Customization costs in private jet charters can vary widely, depending on the extent and nature of the customization requested. These could include specific catering requests, onboard amenities, or particular cabin configurations. Simple requests, like preferred meals or specific beverages, may have minimal additional costs, possibly ranging from a few hundred to a couple of thousand dollars. More elaborate customizations, such as specialized interior fittings or high-tech equipment installations, can significantly increase the cost.</p>

                                <h3 className='font-bold text-black'>Availability and Cost of Wi-Fi/High-Speed Internet</h3>
                                <p className='mb-6 mt-8'>Wi-Fi on private jets typically costs between $4 to $8 per megabyte, depending on the provider and data usage. Some aircraft include Wi-Fi in the charter fee, while others charge separately. Wi-Fi is standard in most newer models.</p>

                                <h3 className='font-bold text-black'>Accessibility Features for Passengers with Disabilities</h3>
                                <p className='mb-6 mt-8'>Chartering a private jet with accessibility features for passengers with disabilities may incur additional costs, depending on the specific modifications and services required. These modifications can include wheelchair lifts, specialized seating, and customized cabin arrangements. While standard private jet charters already offer spacious and comfortable settings, tailor-made accommodations for accessibility needs can increase the overall cost.</p>

                                <h3 className='font-bold text-black'>Environmental Impact Fees</h3>
                                <p className='mb-6 mt-8'>Environmental impact fees are charges associated with the environmental footprint of a private jet charter. These fees contribute to offsetting carbon emissions and supporting sustainability initiatives. The exact amount can vary based on the flight’s duration, aircraft type, and fuel consumption. For instance, a shorter domestic flight might incur a lower fee compared to a longer international journey. At JetLevel Aviation, while we strongly support environmental sustainability, the decision to contribute to environmental impact fees is left to the discretion of our clients.</p>


                                <h3 className='font-bold text-black'>Cancellation and Rescheduling Policies</h3>
                                <p className='mb-6 mt-8'>Cancellation and rescheduling policies for private jet charters can vary, but generally, these policies are designed to offer some flexibility while protecting the interests of the charter company. At JetLevel Aviation, cancellations made well in advance typically incur minimal or no fees. However, fees may increase as the flight date approaches, with significant charges or full payment required for last-minute cancellations. Rescheduling is usually accommodated based on aircraft availability and may incur additional costs depending on the timing and nature of the change. Our goal is to be as accommodating as possible while ensuring operational feasibility and fairness for all parties involved.</p>

                                <h3 className='font-bold text-black'>Seasonal Variations in Pricing</h3>
                                <p className='mb-6 mt-8'>Seasonal variations in private jet charter pricing can significantly impact costs. During peak seasons, such as summer or major holidays, prices can increase by approximately 20% to 30% compared to off-peak periods. For example, chartering a midsize jet that usually costs around $6,400 per hour might rise to about $7,600 to $8,300 per hour during peak times. Conversely, during quieter seasons like late fall or early spring, you might find prices slightly lower than the average</p>
                            </div>
                        }
                        iconStyle="caret"
                        iconPosition="end"
                        isOpen={faqSection === 'additional-considerations-in-charter-pricing'}
                        onClick={() => toggleSection('additional-considerations-in-charter-pricing')}
                    />

                    <Collapsible
                        key={6}
                        question={'Scenario-Based Cost Analysis'}
                        answer={
                            <div id='scenario-based-cost-analysis'>
                                <p className='mb-6 mt-8'>We’ll analyze the final cost in three different scenarios, each with its unique combination of elements such as duration, destination, type of jet, and additional services. These scenarios will help illustrate how various components like fuel surcharges, crew charges, landing fees, and in-flight amenities combine to form the final cost. Whether it’s a quick regional trip, a cross-country journey, or an international voyage, each scenario will provide a clearer picture of the financial aspects involved in private jet chartering.</p>

                                <h3 className='font-bold text-black mb-6'>Private Flight Scenario 1: Business Day Trip</h3>

                                <Image
                                    src='/images2/flight-route-from-Teterboro-Airport-to-Chicago-Executive-Airport.webp'
                                    alt='map'
                                    width={100}
                                    height={100}
                                    className='w-full h-[500px] mb-6 mt-6'
                                    unoptimized
                                />

                                <Table
                                    border={true}
                                    column={[
                                        {
                                            heading: 'Scenario 1',
                                            accessor: 'scenario',
                                        },
                                        {
                                            heading: '',
                                            accessor: 'business',
                                        }
                                    ]} data={[
                                        {
                                            scenario: 'Trip Type',
                                            business: 'Domestic Business',
                                        },
                                        {
                                            scenario: 'PAX',
                                            business: '4',
                                        },
                                        {
                                            scenario: 'Route',
                                            business: 'New York to Chicago',
                                        },
                                        {
                                            scenario: 'Duration of Trip',
                                            business: '1 day',
                                        },
                                        {
                                            scenario: 'Departure Airport',
                                            business: 'Teterboro Airport',
                                        },
                                        {
                                            scenario: 'Destination Airport',
                                            business: 'Chicago Executive Airport',
                                        },
                                        {
                                            scenario: 'Total Distance',
                                            business: 'Approximately 740 miles',
                                        },
                                        {
                                            scenario: 'Subtotal',
                                            business: '$24,020',
                                        },
                                        {
                                            scenario: 'Federal Excise Tax',
                                            business: '7.5%',
                                        },
                                        {
                                            scenario: 'Aircraft Size',
                                            business: 'Light Jet',
                                        },
                                        {
                                            scenario: 'Hourly Rate',
                                            business: '$5,600',
                                        },
                                        {
                                            scenario: 'Average Speed',
                                            business: '450 mph',
                                        },
                                        {
                                            scenario: 'Billable Flight Time',
                                            business: '4 hours 16 min (round trip)',
                                        },
                                        {
                                            scenario: 'Flight Cost',
                                            business: '$23,520',
                                        },
                                        {
                                            scenario: 'Crew Overnight Cost*',
                                            business: 'Not applicable',
                                        },
                                        {
                                            scenario: 'Landing Fees',
                                            business: '$500',
                                        },
                                        {
                                            scenario: 'Segment Fees',
                                            business: '$8 per passenger',
                                        },
                                        {
                                            scenario: 'Total Cost',
                                            business: 'Approximately $25,853',
                                        },
                                    ]}
                                    button={false}
                                />
                                <p className='mb-6 mt-8'>For the Business Day Trip from New York to Chicago and back, the total distance covered is 1,480 miles (740 miles each way). Calculating the flight time involves dividing this distance by the average speed of the light jet, which is approximately 450 mph. This gives us a total flight time of 3 hours, 16 minutes. Factoring in an additional 30 minutes for take-off and taxi times for each leg, the billable flight time becomes approximately 4 hours 16 minutes.</p>

                                <p className='mb-6 mt-8'>Multiplying this billable flight time of 4.2 hours by the hourly rate of $5,600 results in a flight cost of $23,520. As this is a same-day round trip, there are no overnight crew costs involved.</p>

                                <p className='mb-6 mt-8'>EThe flight cost of $23,520, when added to the landing fees of $500, brings the subtotal to $24,020. Segment fees are calculated as $8 per passenger, totalling $32 for 4 passengers.</p>
                                <p className='mb-6 mt-8'>Including the 7.5% Federal Excise Tax (FET) and the segment fees, the total all-inclusive rental price for this Business Day Trip scenario comes to approximately $25,853.</p>

                                <h3 className='font-bold text-black'>Private Flight Scenario 2: Family Vacation</h3>

                                <Image
                                    src='/images2/the-route-from-Los-Angeles-to-Cabo-San-Lucas-to-Van-Nuys-Airport-and-then-back-to-Los-Angeles-to-Cabo-San-Lucas.webp'
                                    alt='map'
                                    width={100}
                                    height={100}
                                    className='w-full h-[500px] mb-6 mt-6'
                                    unoptimized
                                />

                                <Table
                                    border={true}
                                    column={[
                                        {
                                            heading: 'Scenario 2',
                                            accessor: 'scenario',
                                        },
                                        {
                                            heading: '',
                                            accessor: 'business',
                                        }
                                    ]} data={[
                                        {
                                            scenario: 'Trip Type',
                                            business: 'International Leisure',
                                        },
                                        {
                                            scenario: 'PAX',
                                            business: '6',
                                        },
                                        {
                                            scenario: 'Route',
                                            business: 'Los Angeles to Cabo San Lucas',
                                        },
                                        {
                                            scenario: 'Duration of Trip',
                                            business: '1 week',
                                        },
                                        {
                                            scenario: 'Departure Airport',
                                            business: 'Van Nuys Airport',
                                        },
                                        {
                                            scenario: 'Destination Airport',
                                            business: 'Cabo San Lucas International Airport',
                                        },
                                        {
                                            scenario: 'Total Distance',
                                            business: 'About 950 miles',
                                        },
                                        {
                                            scenario: 'Subtotal',
                                            business: '$40,950',
                                        },
                                        {
                                            scenario: 'Federal Excise Tax',
                                            business: '7.5%',
                                        },
                                        {
                                            scenario: 'Aircraft Size',
                                            business: 'Midsize Jet',
                                        },
                                        {
                                            scenario: 'Hourly Rate',
                                            business: '$6,900',
                                        },
                                        {
                                            scenario: 'Average Speed',
                                            business: '450 mph',
                                        },
                                        {
                                            scenario: 'Billable Flight Time',
                                            business: '5.5 hours (round trip)',
                                        },
                                        {
                                            scenario: 'Flight Cost',
                                            business: '$37,950',
                                        },
                                        {
                                            scenario: 'Crew Overnight Cost*',
                                            business: '$2,000',
                                        },
                                        {
                                            scenario: 'Landing Fees',
                                            business: '$1,000',
                                        },
                                        {
                                            scenario: 'Segment Fees',
                                            business: '$8 per passenger',
                                        },
                                        {
                                            scenario: 'Total Cost',
                                            business: 'Approximately $44,069',
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8'>The round trip covers a total distance of 1,900 miles (950 miles each way). With the midsize jet’s average speed of 450 mph, the flight time is about 2 hours 15 min one way. Including 30 minutes for take-off and taxi for each leg, the total billable flight time is approximately 5 hours 30 minuntes.</p>
                                <p className='mb-6 mt-8'>Multiplying the billable flight time of 5.5 hours by the hourly rate of $6,900 gives a flight cost of $37,950. The crew overnight cost for the duration of a week is $2,000. Adding in landing fees of $1,000, we get a subtotal of $40,950.</p>
                                <p className='mb-6 mt-8'>For the segment fees, at $8 per passenger, this totals $48 for 6 passengers.</p>
                                <p className='mb-6 mt-8'>Adding the 7.5% Federal Excise Tax and the segment fees to the subtotal, the final all-inclusive rental price for the Family Vacation scenario amounts to approximately $44,069.</p>

                                <h3 className='font-bold text-black'>Private Flight Scenario 3: International Business Conference</h3>

                                <Image
                                    src='/images2/flight-route-from-Miami-International-Airport-to-London-Heathrow-Airport-using-the-Google-Maps.webp'
                                    alt='map'
                                    width={100}
                                    height={100}
                                    className='w-full h-[500px] mb-6 mt-6'
                                    unoptimized
                                />

                                <Table
                                    border={true}
                                    column={[
                                        {
                                            heading: 'Scenario 3',
                                            accessor: 'scenario',
                                        },
                                        {
                                            heading: '',
                                            accessor: 'business',
                                        }
                                    ]} data={[
                                        {
                                            scenario: 'Trip Type',
                                            business: 'Long-haul International Business',
                                        },
                                        {
                                            scenario: 'PAX',
                                            business: '10',
                                        },
                                        {
                                            scenario: 'Route',
                                            business: 'Miami to London',
                                        },
                                        {
                                            scenario: 'Duration of Trip',
                                            business: '3 days',
                                        },
                                        {
                                            scenario: 'Departure Airport',
                                            business: 'Miami International Airport',
                                        },
                                        {
                                            scenario: 'Destination Airport',
                                            business: 'London Heathrow Airport',
                                        },
                                        {
                                            scenario: 'Total Distance',
                                            business: 'Around 4,400 miles',
                                        },
                                        {
                                            scenario: 'Aircraft Size',
                                            business: 'Heavy Jet',
                                        },
                                        {
                                            scenario: 'Hourly Rate',
                                            business: '$10,000',
                                        },
                                        {
                                            scenario: 'Average Speed',
                                            business: '500 mph',
                                        },
                                        {
                                            scenario: 'Billable Flight Time',
                                            business: '18 hours 36 min (round trip)',
                                        },
                                        {
                                            scenario: 'Flight Cost',
                                            business: '$186,000',
                                        },
                                        {
                                            scenario: 'Crew Overnight Cost*',
                                            business: '$4,000',
                                        },
                                        {
                                            scenario: 'Landing Fees',
                                            business: '$4,000',
                                        },
                                        {
                                            scenario: 'Subtotal',
                                            business: '$195,000',
                                        },
                                        {
                                            scenario: 'Federal Excise Tax',
                                            business: '7.5%',
                                        },
                                        {
                                            scenario: 'Segment Fees',
                                            business: '$8 per passenger',
                                        },
                                        {
                                            scenario: 'Total Cost',
                                            business: 'Approximately $209,705',
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8'>The total round-trip distance for this journey is approximately 8,800 miles (4,400 miles each way). Flying at an average speed of 500 mph in a heavy jet, the one-way flight time is about 8.5 hours. Accounting for an additional 30 minutes for take-off and taxi on each leg, the total billable flight time comes to approximately 18 hours 36 min.</p>
                                <p className='mb-6 mt-8'>The flight cost, calculated by multiplying the billable flight time of 118.6 hours by the hourly rate of $10,000, amounts to $186,000. Adding crew overnight costs of $4,000 and landing fees of $5,000 results in a subtotal of $195,000.</p>
                                <p className='mb-6 mt-8'>For the segment fees, with 10 passengers at $8 per passenger, the total is $80.</p>
                                <p className='mb-6 mt-8'>Incorporating the 7.5% Federal Excise Tax and the segment fees into the subtotal, the complete all-inclusive rental price for the International Business Conference scenario is approximately $209,705.</p>

                                <h3 className='font-bold text-black'>Private Flight Scenario 3: International Business Conference</h3>

                                <Image
                                    src='/images2/flight-route-from-San-Francisco-to-Seattle-to-Denver-and-back-to-San-Francisco.webp'
                                    alt='map'
                                    width={100}
                                    height={100}
                                    className='w-full h-[500px] mb-6 mt-6'
                                    unoptimized
                                />

                                <Table
                                    border={true}
                                    column={[
                                        {
                                            heading: 'Scenario 4',
                                            accessor: 'scenario',
                                        },
                                        {
                                            heading: '',
                                            accessor: 'business',
                                        }
                                    ]} data={[
                                        {
                                            scenario: 'Trip Type',
                                            business: 'Multi-Leg Domestic Business',
                                        },
                                        {
                                            scenario: 'PAX',
                                            business: '8',
                                        },
                                        {
                                            scenario: 'Route',
                                            business: 'San Francisco → Seattle → Denver → San Francisco',
                                        },
                                        {
                                            scenario: 'Duration of Trip',
                                            business: '3 days',
                                        },
                                        {
                                            scenario: 'Departure Airport',
                                            business: 'San Francisco International Airport',
                                        },
                                        {
                                            scenario: 'Destination Airport',
                                            business: 'Seattle-Tacoma International Airport, Denver International Airport',
                                        },
                                        {
                                            scenario: 'Total Distance',
                                            business: 'Approximately 2,600 miles',
                                        },
                                        {
                                            scenario: 'Aircraft Size',
                                            business: 'Super Midsize Jet',
                                        },
                                        {
                                            scenario: 'Hourly Rate',
                                            business: '$8,900',
                                        },
                                        {
                                            scenario: 'Average Speed',
                                            business: '490 mph',
                                        },
                                        {
                                            scenario: 'Billable Flight Time',
                                            business: '6 hours 48 min (total for all legs)',
                                        },
                                        {
                                            scenario: 'Flight Cost',
                                            business: '$60,520',
                                        },
                                        {
                                            scenario: 'Crew Overnight Cost*',
                                            business: '$3,000 (two overnights)',
                                        },
                                        {
                                            scenario: 'Landing Fees',
                                            business: '$1,500 (total for all legs)',
                                        },
                                        {
                                            scenario: 'Subtotal',
                                            business: '$65,020',
                                        },
                                        {
                                            scenario: 'Federal Excise Tax',
                                            business: '7.5%',
                                        },
                                        {
                                            scenario: 'Segment Fees',
                                            business: '$8 per passenger per leg',
                                        },
                                        {
                                            scenario: 'Total Cost',
                                            business: 'Approximately $69,960',
                                        },
                                    ]}
                                    button={false}
                                />

                                <p className='mb-6 mt-8'>The total round-trip distance for this multi-leg journey is approximately 2,552 miles (1,276 miles each way). Given the super midsize jet’s average speed of 525 mph, the one-way flight time works out to about 2.4 hours. Including 30 minutes for take-off and taxi times per leg, the total billable flight time becomes 6.8 hours.</p>
                                <p className='mb-6 mt-8'>The flight cost is determined by multiplying this billable flight time of 6.8 hours by the hourly rate of $8,900, resulting in $60,520. The crew overnight cost, considering two overnights for a 2-person crew, is $3,000. Landing fees for all legs add up to $1,500, leading to a subtotal of $65,020.</p>
                                <p className='mb-6 mt-8'>Segment fees, calculated at $8.00 per passenger per leg for 8 passengers over three legs, come to $64.</p>
                                <p className='mb-6 mt-8'>Adding in the 7.5% Federal Excise Tax and the segment fees to the subtotal, the total all-inclusive rental price for the Multi-City Business Tour amounts to approximately $69,960.</p>
                            </div>
                        }
                        iconStyle="caret"
                        iconPosition="end"
                        isOpen={faqSection === 'scenario-based-cost-analysis'}
                        onClick={() => toggleSection('scenario-based-cost-analysis')}
                    />
                </div>

                <div className='w-[29%] max-[700px]:hidden sticky h-[500px] top-[100px] mt-[19px]'>
                    <h2 className='mb-8 border-b pb-4 '>On This Page</h2>
                    <p
                        onClick={() => scrollToSection('general-cost-breakdown')}
                        className='mb-8 ml-4 text-xl hover:text-[#0071BA] hover:border-l-2 hover:border-[#0071BA] cursor-pointer hover:pl-3'
                    >
                        General Cost Breakdown
                    </p>
                    <p onClick={() => scrollToSection('factors-affecting-charter-costs')} className='mb-8 ml-4 text-xl hover:text-[#0071BA] hover:border-l-2 hover:border-[#0071BA] cursor-pointer hover:pl-3'>Factors Affecting Charter Costs</p>
                    <p onClick={() => scrollToSection('additional-costs-and-fees')} className='mb-8 ml-4 text-xl hover:text-[#0071BA] hover:border-l-2 hover:border-[#0071BA] cursor-pointer hover:pl-3'>Additional Costs and Fees</p>
                    <p onClick={() => scrollToSection('comparative-cost-analysis')} className='mb-8 ml-4 text-xl hover:text-[#0071BA] hover:border-l-2 hover:border-[#0071BA] cursor-pointer hover:pl-3'>Comparative Cost Analysis</p>
                    <p onClick={() => scrollToSection('additional-considerations-in-charter-pricing')} className='mb-8 ml-4 text-xl hover:text-[#0071BA] hover:border-l-2 hover:border-[#0071BA] cursor-pointer hover:pl-3'>Additional Considerations in Charter Pricing</p>
                    <p onClick={() => scrollToSection('scenario-based-cost-analysis')} className='mb-8 ml-4 text-xl hover:text-[#0071BA] hover:border-l-2 hover:border-[#0071BA] cursor-pointer hover:pl-3'>Scenario-Based Cost Analysis</p>
                </div>
            </section>
            {children}

            <div className='mt-14 w-[90%] m-[30px_auto]'>
                <h2 className='text-center mb-10'>Frequently Asked Questions</h2>
                <div className='flex flex-col gap-y-[15px]'>
                    {
                        faqData.map((faq, index) => (
                            <Collapsible
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                iconStyle="caret"
                                isfaq={true}
                                iconPosition="end"
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))
                    }
                </div>

                {/* < /> */}
            </div>
        </>
    );
};

export default PricingContent;
