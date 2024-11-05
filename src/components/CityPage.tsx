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

const CityPage = async ({ fields }: any) => {
    const faqContent = fields.faq.blocks[0].fields.answers.list.map((item: { text: string }, index: number) => ({
        question: fields.faq.blocks[0].fields.questions.list[index].text,
        answer: item.text
    })); 
    let fields2 = [
        {
            title: fields.must_see_attractions?.blocks[0]?.fields?.title?.text,
        paragraph: fields.must_see_attractions?.blocks[0]?.fields?.paragraph?.text,
        },
        {
            title: fields.top_luxury_hotels?.blocks[0]?.fields?.title?.text,
            paragraph: fields.top_luxury_hotels?.blocks[0]?.fields?.paragraph?.text,
        },
        {
            title: fields.high_end_restaurants?.blocks[0]?.fields?.title?.text,
            paragraph: fields.high_end_restaurants?.blocks[0]?.fields?.paragraph?.text,
        },
        {
            title: fields.top_business_venues?.blocks[0]?.fields?.title?.text,
            paragraph: fields.top_business_venues?.blocks[0]?.fields?.paragraph?.text,
        },
        {
            title: fields.concerts_and_shows?.blocks[0]?.fields?.title?.text,
            paragraph: fields.concerts_and_shows?.blocks[0]?.fields?.paragraph?.text,
        },
        {
            title: fields.arts_and_culture?.blocks[0]?.fields?.title?.text,
            paragraph: fields.arts_and_culture?.blocks[0]?.fields?.paragraph?.text,
        },
        {
            title: fields.golf_courses?.blocks[0]?.fields?.title?.text,
            paragraph: fields.golf_courses?.blocks[0]?.fields?.paragraph?.text,
        }
    ];
    fields2 = fields2.filter(item => item.title && item.paragraph);

    const weatherFields = {
        title: fields.weather.blocks[0].fields.title.text,
        paragraph: fields.weather.blocks[0].fields.paragraph.text,
        widgetHtml: fields.weather.blocks[0].fields.weather_widget.text
    }

    const otherFields = [
        {
            title: fields.travel_concierge_services.blocks[0].fields.title.text,
            paragraph: fields.travel_concierge_services.blocks[0].fields.paragraph.text
        },
        {
            title: fields.emergency_services.blocks[0].fields.title.text,
            paragraph: fields.emergency_services.blocks[0].fields.paragraph.text
        }
    ];

    return (
        <>
            {/* Hero link will come inn props */}
            <Hero
                image={fields.hero_image.assets[0].asset.url}
                title={fields.title.text}
            />
            <BrandNames />
            <section className="flex flex-col lg:flex-row gap-5 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
                <div className="min-w-[75%] md:w-full">
                    <Breadcrumb />

                    <CollapsibleSection
                        title={fields.intoduction.blocks[0].fields.title.text}
                        content={fields.intoduction.blocks[0].fields.paragraph.text}
                        isDefaultOpen={true}
                    />
                    <CollapsibleInfoSection
                        title={fields.overview.blocks[0].fields.title.text}
                        intro={fields.overview.blocks[0].fields.paragraph.text}
                        sections={[
                            {
                                heading: fields.alt_airport.blocks[0].fields.title.text,
                                content: fields.alt_airport.blocks[0].fields.paragraph.text
                            },
                            {
                                heading: fields.popular_routes.blocks[0].fields.title.text,
                                content: fields.popular_routes.blocks[0].fields.paragraph.text
                            }
                        ]}
                    />
                    <CollapsibleTableSection
                        title="Private Jet Charter Estimates"
                        item={{
                            heading: fields.benefits.blocks[0].fields.title.text,
                            content: fields.benefits.blocks[0].fields.paragraph.text,
                            tableData: {
                                rows2: fields.cost_table.blocks[0].fields.rows.list
                            }
                        }}
                    />
                    <CollapsibleAircraftSection
                        title={fields.aircraft_available.blocks[0].fields.title.text}
                        description={fields.aircraft_available.blocks[0].fields.paragraph.text}
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

                    <CollapsibleTravelGuideSection title={fields.main_heading.text} data1={fields2} data2={otherFields} weatherData={weatherFields} isDefaultOpen={true} />
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
