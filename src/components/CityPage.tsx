import React from 'react';
import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import CollapsibleSection from "./CollapsibleSection";
import TopCharteredCities from "./TopCharteredCities";
import BookYourPrivateJet from "@/sections/BookYourPrivateJet";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import CollapsibleInfoSection from './CollapsibleInfoSection';
import CollapsibleTableSection from './CollapsibleTableSection';
import CollapsibleAircraftSection from './CollapsibleAircraftSection';
import CollapsibleTravelGuideSection from './CollapsibleTravelGuideSection';


const CityPage = () => {
    const faqContent = [
        {
            question: "What type of aircraft should I use for my charter flight to Addison?",
            answer: "Addison airport can support all types and sizes of private jets. The aircraft you choose should be tailored to the distance you are flying, the number of passengers and amount of baggage you’re bringing along, as well as your budget and preferences."
        },
        {
            question: "What is the price to charter a plane to Addison?",
            answer: "The cost to charter a private jet can range widely, and is based largely on flight time and aircraft type. We’ve provided average pricing above to give you an idea, but the best way to get precise pricing is to contact JetLevel Aviation directly for a quote."
        },
        {
            question: "How long does a private jet flight take from New York to Addison?",
            answer: "The average private jet flight time between New York and Addison is about 3.5 hours, but this can vary depending on the type of aircraft and weather conditions."
        },
        {
            question: "What's the closest airport to Addison?",
            answer: "The closest airport is Addison Airport (KADS / ADS), which is located within the city limits. It’s specifically designed to accommodate business aircraft and is served by three fixed-base operators (FBOs): Million Air Dallas, Atlantic Aviation, and Landmark Aviation."
        },
        {
            question: " What type of aircraft does JetLevel Aviation charter?",
            answer: "JetLevel Aviation charters all types of aircraft, from turboprops to light jets, midsize jets, heavy jets, and even VIP airliners. Contact us for recommendations based on your specific requirements."
        },
    ];
    const travelGuideData = {
        conciergeServices: {
            description: "Experience a hassle-free travel experience with our personalized concierge services that include in-flight meals, ground transportation, hotel bookings, and local event recommendations.",
            imageUrl: "/images/TravelConcierge.webp",
        },
        sections: [
            {
                title: "Must-see Attractions & Experiences in Addison",
                key: "attractions",
                items: [
                    {
                        name: "Dallas/Addison Marriott Quorum by the Galleria",
                        description: "An upscale hotel near the Galleria, offering modern amenities and convenient location.",
                        link: "#",
                    },
                ],
            },
            {
                title: "Top Luxury Hotels in Addison",
                key: "hotels",
                items: [
                    {
                        name: "Dallas/Addison Marriott Quorum by the Galleria",
                        description: "An upscale hotel near the Galleria, offering modern amenities and convenient location.",
                        link: "#",
                    },
                ],
            },
            {
                title: "High-end Restaurants in Addison",
                key: "restaurants",
                items: [
                    {
                        name: "Chamberlain's Steak and Chop House",
                        description: "A high-end dining spot in Addison, known for exquisite steaks and fine wines.",
                        link: "#",
                    },
                    {
                        name: "Kenny's Wood Fired Grill",
                        description: "Renowned Addison restaurant featuring American classics cooked over a wood-fired grill.",
                        link: "#",
                    },
                ],
            },
            {
                title: "Top Business Venues in Addison",
                key: "businessVenues",
                items: [
                    {
                        name: "Addison Conference and Theatre Centre",
                        description: "A versatile venue in Addison, hosting diverse conferences, performances, and events.",
                        link: "#",
                    },
                    {
                        name: "The Addison Event Center",
                        description: "A stylish venue in Addison, perfect for hosting a range of social and corporate events.",
                        link: "#",
                    },
                ],
            },
            {
                title: "Concerts and Shows in Addison",
                key: "concerts",
                items: [
                    {
                        name: "Addison Circle Park",
                        description: "Frequently hosts concerts and outdoor events.",
                        link: "#",
                    },
                    {
                        name: "Addison Theatre Centre",
                        description: "A top spot for watching live performances.",
                        link: "#",
                    },
                ],
            },
            {
                title: "Arts and Culture Sights of Addison",
                key: "artsAndCulture",
                items: [
                    {
                        name: "Mary Kay Museum",
                        description: "A fascinating glimpse into the life and business triumphs of cosmetics mogul, Mary Kay Ash.",
                        link: "#",
                    },
                    {
                        name: "Cavanaugh Flight Museum",
                        description: "An engaging museum in Addison, showcasing historic aircraft and aviation artifacts.",
                        link: "#",
                    },
                ],
            },
            {
                title: "Golf Courses in Addison",
                key: "golfCourses",
                items: [
                    {
                        name: "Bent Tree Country Club",
                        description: "An award-winning course offering a challenging and enjoyable golfing experience.",
                        link: "#",
                    },
                ],
            },
        ],
        emergencyContacts: [
            {
                name: "Police Department",
                phone: "972-450-7100",
            },
            {
                name: "Fire Department",
                phone: "972-450-7201",
            },
            {
                name: "Medical Center",
                phone: "972-888-7200",
            },
        ],
    };
    

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
                title={`Addison, TX Private Jet Charters`}
            />
            <BrandNames />
            <section className="flex flex-col lg:flex-row gap-5 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
                <div className="min-w-[75%] md:w-full">
                    <Breadcrumb />

                    <CollapsibleSection
                        title={`Private jet to Addison, TX`}
                        content="Traveling to Addison, TX, via private jet provides convenient access to Addison Airport, right in the heart of the Dallas area, offering privacy and speed. Golfers can enjoy the nearby Bent Tree Country Club. Addison's vibrant dining scene and numerous events, like the Kaboom Town! fireworks show, make it a lively destination. For business or leisure, dining at Chamberlain’s Steak and Chop House offers a top-tier culinary experience. Luxury accommodations are available at the InterContinental Dallas. Must-visit spots include the Cavanaugh Flight Museum and the Addison Circle Park. Private jet travel to Addison ensures efficiency and personalized service, enhancing the journey with comfort and exclusivity."
                    />
                    <CollapsibleInfoSection
                        title={`Addison, TX Airports & Charter Routes`}
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
                        item={{
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
                        }}
                    />
                    <CollapsibleAircraftSection
                        title="Aircraft Available for Addison Charter"
                        description="Here are some of the aircraft available for charter flights to and from Addison, TX:"
                        aircrafts={[
                            {
                                type: "Turbo Prop",
                                imageUrl: "/images/Turboprop.jpg",
                                capacity: "5-11",
                                model: "King Air 250",
                                priceRange: "$1,700–$6,600",
                            },
                            {
                                type: "Very Light Jets",
                                imageUrl: "/images/Very-Light-Jet.jpg",
                                capacity: "4-7",
                                model: "Citation M2",
                                priceRange: "$4,200–$6,900",
                            },
                            {
                                type: "Light Jets",
                                imageUrl: "/images/Light-Jet.jpg",
                                capacity: "6-9",
                                model: "Citation Encore+",
                                priceRange: "$5,400–$8,400",
                            },
                            {
                                type: "Midsize Jets",
                                imageUrl: "/images/Mid-Size-Jet.jpg",
                                capacity: "6-9",
                                model: "Hawker 800XP",
                                priceRange: "$6,400–$9,400",
                            },
                            {
                                type: "Super Midsize Jets",
                                imageUrl: "/images/Super-Mid-Size-Jet.jpg",
                                capacity: "8-10",
                                model: "Citation X",
                                priceRange: "$7,900–$12,900",
                            },
                            {
                                type: "Heavy Jets",
                                imageUrl: "/images/Heavy-Jet.jpg",
                                capacity: "8-16",
                                model: "Gulfstream GIVSP",
                                priceRange: "$8,000–$16,000",
                            },
                        ]}
                    />
                    <CollapsibleSection title="Frequently Asked Questions" content={faqContent} />

                    <CollapsibleTravelGuideSection
                        title="Addison, TX Travel Guide"
                        data={travelGuideData}
                        isDefaultOpen={true}
                    />






                    {/* 
                    
                    */}

                    {/* <CollapsibleSection title={`Listing of Region-Specific Empty Leg Flights`} content={links} />
                    <CollapsibleSection title={`Frequently Asked Questions`} content={faqContent} /> */}
                </div>
                <div className="min-w-[25%] md:w-fit">
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
            <BookYourPrivateJet />
        </>
    );
};

export default CityPage;
