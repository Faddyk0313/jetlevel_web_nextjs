import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import CollapsibleSection from "./CollapsibleSection";
import TopCharteredCities from './TopCharteredCities';
import { Suspense } from "react";
import LeadForm from '@/components/LeadForm';
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import CollapsibleAvinodeCalculatorSection from "./CollapsibleAvinodeCalculatorSection";
import Widgets_30Percent_Section from "./Widgets_30Percent_Section";

// import { EmptyLegFlightResponse, fetcher } from '@/lib/fetcher';
// type EmptyLegProps = {
//     title: string;
// }

const EmptyLegPage = async ({ fields }: any) => {
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
        <>
            <Hero
                image="/images/Empty-Legs Hero Image.avif"
                title={fields.title.text}
                subtitle={fields.subtitle.text}
                hasOverlay={true}
                hasCalculator={false}
                showCalculator=""
            />
            <BrandNames />
            <section className="flex flex-col lg:flex-row gap-10 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
                <div className="min-w-full md:min-w-[72%]">
                    <Breadcrumb />

                    <CollapsibleAvinodeCalculatorSection title="Browse The Upcoming Featured list of Empty Leg Flights" isDefaultOpen={true} />
                    <CollapsibleSection title={fields.intoduction.blocks[0].fields.title.text} content={fields.intoduction.blocks[0].fields.paragraph.text}  />
                    <CollapsibleSection title={fields.overview.blocks[0].fields.title.text} content={fields.overview.blocks[0].fields.paragraph.text} />
                    <CollapsibleSection title={fields.benefits.blocks[0].fields.title.text} content={fields.benefits.blocks[0].fields.paragraph.text} />
                    <CollapsibleSection title={fields.finding_and_booking.blocks[0].fields.title.text} content={fields.finding_and_booking.blocks[0].fields.paragraph.text} />
                    <CollapsibleSection title={fields.airports.blocks[0].fields.title.text} content={fields.airports.blocks[0].fields.paragraph.text} />
                    <CollapsibleSection title={fields.flights_details.blocks[0].fields.title.text} content={fields.flights_details.blocks[0].fields.paragraph.text} />
                    <CollapsibleSection title="Listing of Region-Specific Empty Leg Flights" content={links} />
                    <CollapsibleSection title="Frequently Asked Questions" content={faqContent} />
                </div>
                <Widgets_30Percent_Section widgetTitle="Popular Empty Legs Flights" widgetContent={[
                                {
                                    name: 'Aspen, CO',
                                    link: '/empty-leg-flights-aspen'
                                },
                                {
                                    name: 'Las Vegas, NV',
                                    link: '/empty-leg-flights-las-vegas-nv'
                                },
                                {
                                    name: 'Miami, FL',
                                    link: '/empty-leg-flights-miami-fl'
                                },
                                {
                                    name: 'Los Angeles, CA',
                                    link: '/empty-leg-flights-los-angeles-ca'
                                },
                                {
                                    name: 'New York, NY',
                                    link: '/empty-leg-flights-new-york-ny'
                                },
                                {
                                    name: 'Chicago, IL',
                                    link: '/empty-leg-flights-chicago-il'
                                },
                                {
                                    name: 'Dallas, TX',
                                    link: '/empty-leg-flights-dallas-tx'
                                },
                                {
                                    name: 'Denver, CO',
                                    link: '/empty-leg-flights-denver-co'
                                },
                                {
                                    name: 'Houston, TX',
                                    link: '/empty-leg-flights-houston-tx'
                                },
                                {
                                    name: 'Orlando, FL',
                                    link: '/empty-leg-flights-orlando'
                                },
                            ]} widgetButtonLink="/empty-leg-flights#listing" />
            </section>
            {/* <BookYourPrivateJet /> */}
        </>
    );
};

export default EmptyLegPage;
