import React from 'react';
import CollapsibleEmptyLegDirectory from './CollapsibleEmptyLegDirectory';
import CollapsibleAvinodeCalculatorSection from './CollapsibleAvinodeCalculatorSection';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import TopCharteredCities from './TopCharteredCities';

const EmptyLegDirectory = () => {
  const links = [
    'Empty Leg Flights to Aspen', 'Empty Leg Flights to Atlanta, GA', 'Empty Leg Flights to Austin, TX', 'Empty Leg Flights to Beverly Hills', 'Empty Leg Flights to Boston, MA', 'Empty Leg Flights to Cancun', 'Empty Leg Flights to Charleston', 'Empty Leg Flights to Chicago, IL', 'Empty Leg Flights to Dallas, TX', 'Empty Leg Flights to Denver, CO', 'Empty Leg Flights to Detroit', 'Empty Leg Flights to Florida', 'Empty Leg Flights to Fort Lauderdale', 'Empty Leg Flights to Hawaii', 'Empty Leg Flights to Honolulu​', 'Empty Leg Flights to Houston, TX', 'Empty Leg Flights to Indianapolis', 'Empty Leg Flights to Jacksonville', 'Empty Leg Flights to Kansas City', 'Empty Leg Flights to Las Vegas, NV', 'Empty Leg Flights to Los Angeles, CA', 'Empty Leg Flights to Miami, FL', 'Empty Leg Flights to Naples', 'Empty Leg Flights to Nashville', 'Empty Leg Flights to New Orleans', 'Empty Leg Flights to New York, NY', 'Empty Leg Flights to Ocala, FL', 'Empty Leg Flights to Orlando, FL', 'Empty Leg Flights to Palm Beach​', 'Empty Leg Flights to Philadelphia​', 'Empty Leg Flights to Phoenix', 'Empty Leg Flights to Raleigh', 'Empty Leg Flights to Sacramento', 'Empty Leg Flights to Salt Lake City', 'Empty Leg Flights to San Diego, CA', 'Empty Leg Flights to San Francisco, CA', 'Empty Leg Flights to San Jose', 'Empty Leg Flights to Santa Barbara', 'Empty Leg Flights to Santa Fe', 'Empty Leg Flights to Scottsdale', 'Empty Leg Flights to Seattle, WA', 'Empty Leg Flights to Vail', 'Empty Leg Flights to Washington, D.C.'
];
const faqContent = [
    {
        question: "What is an Empty Leg Flight?",
        answer: "An empty leg flight, also known as a ‘ferry flight’ or ‘deadhead flight’, occurs when a private jet flies without passengers. This can happen when a jet is returning to base after dropping off passengers or flying to another location to pick up passengers."
    },
    {
        question: "How Can I Book an Empty Leg Flight?",
        answer: "You can easily book an empty leg flight through our platform, JetLevel. We provide an intuitive interface for browsing available flights, and you can book directly through our platform."
    },
    {
        question: "How Much Does an Empty Leg Flight Cost?",
        answer: "The cost of an empty leg flight varies based on several factors, including the route, aircraft type, and other specifics. Prices can be evaluated based on the hourly rate of the aircraft and the duration of the flight."
    }
];
  return (
    <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
      <div className="min-w-full md:min-w-[72%]">
        <Breadcrumb />

        <CollapsibleEmptyLegDirectory title='Empty Leg Flights' content="<p>An empty leg flight, also known as a deadhead flight, occurs when a private jet flies one way without passengers. This can happen when a jet returns to its base after a charter, needs to relocate for service, or is positioning to pick up passengers following a one-way booking. Empty leg flights offer a cost-effective option for luxury travel, allowing passengers to experience private jet travel at a reduced price due to the aircraft needing to fly the route regardless.</p>" isDefaultOpen={true} />
        <CollapsibleAvinodeCalculatorSection title="Browse The Upcoming Featured list of Empty Leg Flights" />
        <CollapsibleEmptyLegDirectory title='Understanding Empty Leg Flights' content={`
Often referred to as ‘ferry flights’ or ‘deadhead flights’, empty leg flights come into play when an aircraft is scheduled to fly from Point A to Point B with no passengers onboard. These flights typically occur when a private jet is returning to its base after dropping off passengers or is going to another location to pick up passengers.

Empty leg flights are a unique opportunity for savvy travelers to experience the luxury and convenience of private jet travel at a fraction of the cost. Both jet card members and on-demand charter clients often take advantage of these flights, offering optimal pricing and flexibility.
`} image='/images/girl sitting in private jet.webp'/>
                    <CollapsibleEmptyLegDirectory title='The Art of Finding and Booking Empty Leg Flights' content={`
<p>Our platform, JetLevel, provides a user-friendly and intuitive interface to effortlessly browse and book empty leg flights. Not only does JetLevel give you direct access to these flights, but it also provides the flexibility of booking “near-match” flights that have similar routings, subject to additional positioning fees.

For instance, if there’s an empty leg flight listed from New York to Miami, you could utilize this for a trip from New York to Orlando or DC to Palm Beach. It may cost slightly more than a direct match but it’s still a more economical choice compared to booking a round trip.</p>
`} />
                    <CollapsibleEmptyLegDirectory title='Pricing Guide: How Much Do Empty Leg Flights Cost? ' content={"<div className='mb-8'>      <p className='leading-7 text-[16px] text-[#727982] mb-8'>        Empty leg prices depend on a variety of factors including the route, type of aircraft,        and other specifics. Here’s what you need to know about evaluating empty leg flight pricing:      </p>      <p className='leading-7 text-[16px] text-[#727982] mb-8'>        <span>Aircraft Hourly Rate &amp; Empty Leg Pricing –</span> When evaluating the cost        of an empty leg flight, consider the aircraft’s hourly rate and the flight duration.        An excellent price point is one that comes close to the point-to-point value of the        aircraft’s hourly rate.      </p>      <p className='leading-7 text-[16px] text-[#727982] mb-8'>        <span>Positioning Fees and Empty Leg Flights –</span> In an ideal situation, the cost        of an empty leg flight should equal the product of the aircraft’s hourly rate and flight        duration, plus applicable taxes and fees. However, direct matches are relatively rare,        especially outside of high-traffic routes. Therefore, “near-matches” are more common,        which may require additional fees for positioning the aircraft to your desired location.      </p>      <p className='leading-7 text-[16px] text-[#727982] mb-8'>        <span>The Influence of Supply &amp; Demand on Empty Leg Flight Pricing –</span> Like        any other market, the pricing of empty leg flights is influenced by supply and demand.        High-demand routes during peak seasons will have higher prices due to increased confidence        in finding buyers. On the other hand, less popular routes might offer better deals.      </p>    </div>"} />
<CollapsibleEmptyLegDirectory title='Are Empty Leg Flights Cheaper Than Commercial Flights? ' content={`
While the term ’empty leg’ often conveys a sense of discounted pricing, the reality can be a bit more complex. Every flight, regardless of whether it’s full or empty, incurs costs for the aircraft owner, such as crew, handling, fuel, and maintenance. When advertising an empty leg flight, owners aim to recover these costs plus earn additional revenue.

As the departure time nears, prices for genuine empty leg flights may drop. However, discounted bookings remain a rarity, particularly for popular routes during peak seasons.
`} image='/images/girl sitting in private jet.webp'/>
                    <CollapsibleEmptyLegDirectory title='Experience the Difference with JetLevel’s Empty Leg Flights' content={`
                    <p>
<span>Why Choose JetLevel for Your Empty Leg Flights?</span>
<br>
JetLevel, with 20+ years of experience in the aviation industry, simplifies the often complex process of navigating the fast-paced and volatile empty leg charter market, often making it difficult for travelers to secure the best deals.
<br>
At JetLevel, we have been partnering with the world’s leading aircraft operators since 2006, serving satisfied clients and bringing the best of private jet travel right at your fingertips. We take pride in our reputation and extensive experience in the private jet charter industry.
<br>

Empty leg flights are a key part of our business model. Our dedicated Account Executives analyze every aspect of your booking when sourcing options, maintaining relationships with all reputable operators, and working relentlessly to secure you the best deal on the most suitable aircraft for your trip. Let us redefine your travel experience.
<p>
                      `} />
                    <CollapsibleEmptyLegDirectory title="Listing of Region-Specific Empty Leg Flights" content={links} />
                    <CollapsibleEmptyLegDirectory title="Frequently Asked Questions" content={faqContent} />
      </div>
      <div className="min-w-[24%] md:w-fit">
        <TopCharteredCities
          title="Empty Leg"
          cities={[
            { name: 'New York, NY', link: '#' },
            { name: 'Aspen, CO', link: '#' },
            { name: 'Los Angeles, CA', link: '#' },
            { name: 'San Francisco, CA', link: '#' },
            { name: 'Miami, FL', link: '#' },
            { name: 'Chicago, IL', link: '#' },
            { name: 'Houston, TX', link: '#' },
            { name: 'Dallas, TX', link: '#' },
            { name: 'Las Vegas, NV', link: '#' },
            { name: 'Denver, CO', link: '#' },
          ]}
          buttonLink="#"
        />
      </div>
    </section>
  );
};

export default EmptyLegDirectory;
CollapsibleEmptyLegDirectory;