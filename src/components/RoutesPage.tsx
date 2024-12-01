import BrandNames from "@/sections/BrandNames";
import Hero from "@/sections/Hero";
import React from "react";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import CollapsibleSection from "./CollapsibleSection";
import TopCharteredCities from "./TopCharteredCities";
import CollapsibleRouteTableSection from "./CollapsibleRouteTableSection";
import CollapsibleRouteWeatherSection from "./CollapsibleRouteWeatherSection";

const RoutesPage = () => {
    const faqContent = [
        {
            question: "Quick and Convenient",
            answer: "For business executives, this route offers unparalleled speed, turning a lengthy commercial flight into a quick jump. You can attend your morning meeting in New York and be in Buffalo well before lunch."
        },
        {
            question: "Lavish Comfort",
            answer: "High-Net-Worth families and individual travelers will find the luxurious amenities of our private jets, including gourmet meals and high-speed Wi-Fi, exceed every expectation."
        },
        {
            question: "Safety Above All",
            answer: "JetLevel Aviation is accredited with the BBB and partners only with NBAA and IS-BAO-registered operators. Your safety is our highest priority."
        },
        {
            question: "Personalization at Its Best",
            answer: "Our services offer secure, private cabins and customization down to the smallest detail for those who value their privacy."
        }
    ];

    const tableContent = [
        "Midsize Jet/$11,850/7-9/1.3 hrs/0",
        "Super Midsize Jet/$13,500/8-10/1.3 hrs/0",
        "Heavy Jet/$16,500/10-16/1.3 hrs/0"
    ];

    const weatherContent = [
        {
            heading: "Teterboro Weather",
            widgetHtml: `<a className="weatherwidget-io" href="https://forecast7.com/en/40d86n74d06/teterboro/?unit=us" data-label_1="TETERBORO" data-label_2="WEATHER" data-theme="marine" >TETERBORO WEATHER</a>`
        },
        {
            heading: "Buffalo Weather",
            widgetHtml: `<a className="weatherwidget-io" href="https://forecast7.com/en/42d89n78d88/buffalo/?unit=us" data-label_1="BUFFALO" data-label_2="WEATHER" data-theme="marine" >BUFFALO WEATHER</a>`
        }
    ];
    const googleMapsContent = [
        {
            heading: "Teterboro Airports",
            airports: "1,2,3,4,5",
            widgetHtml: `<a className="weatherwidget-io" href="https://forecast7.com/en/40d86n74d06/teterboro/?unit=us" data-label_1="TETERBORO" data-label_2="WEATHER" data-theme="marine" >TETERBORO WEATHER</a>`
        },
        {
            heading: "Buffalo Airports",
            airports: "1,2,3,4,5",
            widgetHtml: `<a className="weatherwidget-io" href="https://forecast7.com/en/42d89n78d88/buffalo/?unit=us" data-label_1="BUFFALO" data-label_2="WEATHER" data-theme="marine" >BUFFALO WEATHER</a>`
        }
    ];
    return (
        <>
            <Hero
                image="https://jetlevel.com/wp-content/uploads/2023/11/blue-clouds-new-jpg.webp"
                title="Teterboro to Buffalo"
                tagline="– Elevate Your Journey –"
                description="Looking to travel from Teterboro to Buffalo in unparalleled luxury and convenience? JetLevel Aviation is your go-to choice for this highly-demanded northeast corridor route. The distance between these two cities is around 300 miles, making it a popular choice for business executives and families alike, who appreciate efficiency alongside exclusivity."
                hasCalculator={true}
            />
            <BrandNames />
            <section className="flex flex-col lg:flex-row gap-5 px-5 md:px-10 xl:px-20 py-7 max-w-[1800px] mx-auto">
                <div className="min-w-[75%] md:w-full">
                    <Breadcrumb />
                    <CollapsibleSection
                        title="Private Jet from Teterboro to Buffalo"
                        content="Traveling by private jet from Teterboro to Buffalo typically takes about 1 hour. Costs vary, generally ranging from $4,000 to $7,000 one-way, depending on the aircraft and services. Common choices for this route include efficient jets like the HondaJet or Cessna Citation Mustang. Flights depart from Teterboro Airport, offering direct and quick access to Buffalo, ideal for business or leisure, providing flexibility, privacy, and a streamlined travel experience."
                        isDefaultOpen={true}
                    />
                    <CollapsibleRouteWeatherSection title="Best Airports for Private Jet Charter" items={googleMapsContent} />
                    <CollapsibleSection title="Why Choose a Private Jet?" content={faqContent} />
                    <CollapsibleRouteTableSection title="Cost Estimates" item={tableContent} />
                    <CollapsibleRouteWeatherSection title="Weather Insights" items={weatherContent} />
                    <CollapsibleSection title="For Business and Personal Private Jet Travel – Call JetLevel Aviation" content="JetLevel Aviation is your trusted partner for all your private jet needs. With nearly 20 years of experience, we bring safety, comfort, and luxury together to redefine your air travel experience. Discover more about us through our About Us page or find answers to frequently asked questions on our FAQs page. Don’t forget to check out our blog for latest news, tips, and insights into the world of private aviation.<br/>For both business and personal private jet travel, JetLevel Aviation has set the standard in personalized aviation services. Reach out today to experience a new echelon of air travel, backed by the trust and authority of Ricky Gomulka’s nearly 20 years in the industry. Contact us now!" />
                </div>
                <div className="min-w-[25%] md:w-fit">
                    <TopCharteredCities
                        title="Empty Leg"
                        cities={[
                            { name: "New York, NY", link: "#" },
                            { name: "Aspen, CO", link: "#" },
                            { name: "Los Angeles, CA", link: "#" },
                            { name: "San Francisco, CA", link: "#" },
                            { name: "Miami, FL", link: "#" },
                            { name: "Chicago, IL", link: "#" },
                            { name: "Houston, TX", link: "#" },
                            { name: "Dallas, TX", link: "#" },
                            { name: "Las Vegas, NV", link: "#" },
                            { name: "Denver, CO", link: "#" },
                        ]}
                        buttonLink="#"
                    />
                </div>
            </section>
        </>
    );
};

export default RoutesPage;
