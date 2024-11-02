import React from 'react';
import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import CollapsibleSection from "./CollapsibleSection";
import TopCharteredCities from "./TopCharteredCities";
import BookYourPrivateJet from "@/sections/BookYourPrivateJet";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import CollapsibleInfoSection from './CollapsibleInfoSection';
import CollapsibleTableSection from './CollapsibleTableSection';

type CityProps = {
    title: string;
};

const CityPage: React.FC<CityProps> = ({ title }) => {
    // const links = [
    //     'Empty Leg Flights to Aspen', 'Empty Leg Flights to Atlanta, GA', 'Empty Leg Flights to Austin, TX', 'Empty Leg Flights to Beverly Hills', 'Empty Leg Flights to Boston, MA', 'Empty Leg Flights to Cancun', 'Empty Leg Flights to Charleston', 'Empty Leg Flights to Chicago, IL', 'Empty Leg Flights to Dallas, TX', 'Empty Leg Flights to Denver, CO', 'Empty Leg Flights to Detroit', 'Empty Leg Flights to Florida', 'Empty Leg Flights to Fort Lauderdale', 'Empty Leg Flights to Hawaii', 'Empty Leg Flights to Honolulu​', 'Empty Leg Flights to Houston, TX', 'Empty Leg Flights to Indianapolis', 'Empty Leg Flights to Jacksonville', 'Empty Leg Flights to Kansas City', 'Empty Leg Flights to Las Vegas, NV', 'Empty Leg Flights to Los Angeles, CA', 'Empty Leg Flights to Miami, FL', 'Empty Leg Flights to Naples', 'Empty Leg Flights to Nashville', 'Empty Leg Flights to New Orleans', 'Empty Leg Flights to New York, NY', 'Empty Leg Flights to Ocala, FL', 'Empty Leg Flights to Orlando, FL', 'Empty Leg Flights to Palm Beach​', 'Empty Leg Flights to Philadelphia​', 'Empty Leg Flights to Phoenix', 'Empty Leg Flights to Raleigh', 'Empty Leg Flights to Sacramento', 'Empty Leg Flights to Salt Lake City', 'Empty Leg Flights to San Diego, CA', 'Empty Leg Flights to San Francisco, CA', 'Empty Leg Flights to San Jose', 'Empty Leg Flights to Santa Barbara', 'Empty Leg Flights to Santa Fe', 'Empty Leg Flights to Scottsdale', 'Empty Leg Flights to Seattle, WA', 'Empty Leg Flights to Vail', 'Empty Leg Flights to Washington, D.C.'
    // ];
    // const faqContent = [
    //     {
    //         question: "What is an Empty Leg Flight?",
    //         answer: "An empty leg flight, also known as a ‘ferry flight’ or ‘deadhead flight’, occurs when a private jet flies without passengers. This can happen when a jet is returning to base after dropping off passengers or flying to another location to pick up passengers."
    //     },
    //     {
    //         question: "How Can I Book an Empty Leg Flight?",
    //         answer: "You can easily book an empty leg flight through our platform, JetLevel. We provide an intuitive interface for browsing available flights, and you can book directly through our platform."
    //     },
    //     {
    //         question: "How Much Does an Empty Leg Flight Cost?",
    //         answer: "The cost of an empty leg flight varies based on several factors, including the route, aircraft type, and other specifics. Prices can be evaluated based on the hourly rate of the aircraft and the duration of the flight."
    //     }
    // ];
    return (
        <>
            {/* Hero link will come inn props */}
            <Hero
                image="https://jetlevel.com/wp-content/uploads/2024/04/Empty-Legs-1.jpg"
                title={`${title} Private Jet Charters`}
            />
            <BrandNames />
            <section className="flex flex-col lg:flex-row gap-5 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
                <div className="min-w-[75%] md:w-full">
                    <Breadcrumb />

                    <CollapsibleSection title={`Private jet to ${title}`} content="Traveling to Addison, TX, via private jet provides convenient access to Addison Airport, right in the heart of the Dallas area, offering privacy and speed. Golfers can enjoy the nearby Bent Tree Country Club. Addison's vibrant dining scene and numerous events, like the Kaboom Town! fireworks show, make it a lively destination. For business or leisure, dining at Chamberlain’s Steak and Chop House offers a top-tier culinary experience. Luxury accommodations are available at the InterContinental Dallas. Must-visit spots include the Cavanaugh Flight Museum and the Addison Circle Park. Private jet travel to Addison ensures efficiency and personalized service, enhancing the journey with comfort and exclusivity." />
                    <CollapsibleInfoSection
                        title={`${title} Airports & Charter Routes`}
                        intro={`
                        Fly directly to Addison, TX, the ‘Air Capital of Texas’, and avoid the hassle of airline connections, delays, and crowded terminals.
                        Turn your flight into a part of the experience with a private jet to Addison coordinated by JetLevel Aviation – your top-tier provider of on-demand aircraft charter!
                        `}
                        sections={[
                            {
                                heading: "Alternative Airports in and Around Addison, TX",
                                items: [
                                    { title: "Addison Airport (KADS / ADS)", description: "Located within the city limits, it’s just 9 miles north of the downtown Dallas area. This airport is specifically designed to accommodate business aircraft and is the 3rd largest general aviation airport in the country in terms of operations. It is served by three fixed-base operators (FBOs): Million Air Dallas, Atlantic Aviation, and Landmark Aviation." },
                                ],
                                requestItenararyMsg: true
                            },
                            {
                                heading: "Popular Private Jet Charter Routes to Addison",
                                items: [
                                    { title: "Charter Flights from New York to Addison", description: " Our popular route, contact JetLevel Aviation now to charter a private jet from New York to Addison." },
                                    { title: "Private Jet from Los Angeles to Addison", description: "Book a charter flight from Los Angeles to Addison and arrive in style and convenience free of the bustling major airport." },
                                    { title: "Charter Jet from San Francisco to Addison", description: "In just a few hours, you can fly in luxury from the Bay Area to Addison." },
                                    { title: "Private Jet from Las Vegas to Addison", description: "Charter flights from Las Vegas to Addison take off almost daily with JetLevel Aviation " },
                                ],
                                requestItenararyMsg: true
                            }
                        ]}
                    />
                    <CollapsibleTableSection
                        title="Private Jet Charter Estimates"
                        items={[
                            {
                                heading: "How much does it cost to charter a flight to or from Addison?",
                                content: "The cost to charter a private jet can range significantly, based on flight time and the type of aircraft. A private jet rental from New York to Addison might cost $29,500 or more in a Light Jet, for instance.",
                                tableData: {
                                    headers: ["To/From Location", "Aircraft Type", "Passengers", "Avg. Flight Time (hrs)", "Targeted Price (One-way)"],
                                    rows: [
                                        ["New York", "Light Jet", "6-8", "3.5", "$24,150"],
                                        ["San Francisco", "Midsize Jet", "7-9", "4.0", "$26,800"],
                                        ["Los Angeles", "Light Jet", "6-8", "3.5", "$20,700"],
                                        ["Las Vegas", "Light Jet", "6-8", "3.0", "$20,700"],
                                        ["Chicago", "Turboprop", "4-8", "2.0", "$9,800"]
                                    ]
                                }
                            },
                            {
                                heading: "Private Jet Prices – Ballpark Hourly Rates",
                                content: "Private jet prices can vary widely based on the size of the aircraft, the distance of the flight, and other factors. Here are some ballpark hourly rates:",
                                tableData: {
                                    headers: ["Aircraft Type", "Aircraft", "Passengers", "Ballpark Hourly Rate"],
                                    rows: [
                                        ["Turboprop", "Pilatus PC12", "6-8", "$1,800–$2,300"],
                                        ["Very Light Jet", "Phenom 100", "4-6", "$3,000–$3,500"],
                                        ["Light Jet", "Hawker 400XP", "6-8", "$4,000–$4,500"],
                                        ["Midsize Jet", "Learjet 60", "7-9", "$5,000–$5,500"],
                                        ["Super Midsize Jet", "Citation Sovereign", "8-10", "$6,500–$7,000"],
                                        ["Heavy Jet", "Gulfstream G-IV", "10-16", "$10,000–$14,000"]
                                    ]
                                }
                            }
                        ]}
                        isDefaultOpen={true}
                    />



                    {/* <CollapsibleSection title={`Listing of Region-Specific Empty Leg Flights`} content={links} />
                    <CollapsibleSection title={`Frequently Asked Questions`} content={faqContent} /> */}
                </div>
                <div className="min-w-[25%] md:w-fit">
                    <TopCharteredCities
                        title="US"
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
            <BookYourPrivateJet />
        </>
    );
};

export default CityPage;
