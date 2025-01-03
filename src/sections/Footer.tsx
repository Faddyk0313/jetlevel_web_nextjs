import React from 'react';
import Image from "next/image"; // Next.js optimized image component
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

type Section = {
    title: string;
    links: { title: string, link: string; }[];
};

const Footer = () => {
    // Store section information in an array of objects
    const sections: Section[] = [
        {
            title: "Featured Routes",
            links: [
                {
                    title: "Van Nuys to Las Vegas – Private Jet Charter",
                    link: "/private-jet-charter-los-angeles-to-las-vegas"
                },
                {
                    title: "Los Angeles to San Francisco – Private Jet Charter",
                    link: "/private-jet-charter-los-angeles-to-san-francisco"
                },
                {
                    title: "Dallas to Houston – Private Jet Charter",
                    link: "/private-jet-charter-dallas-to-houston"
                },
                {
                    title: "Atlanta to Miami – Private Jet Charter",
                    link: "/private-jet-charter-atlanta-to-miami"
                },
                {
                    title: "Aspen to Dallas – Private Jet Charter",
                    link: "/private-jet-charter-aspen-to-dallas"
                },
                {
                    title: "Chicago to Fort Lauderdale – Private Jet Charter",
                    link: "/private-jet-charter-chicago-to-fort-lauderdale"
                },
                {
                    title: "Teterboro to Miami – Private Jet Charter",
                    link: "/private-jet-charter-teterboro-to-miami"
                }

            ]
        },
        {
            title: "Featured Cities",
            links: [
                {
                    title: "Van Nuys to Las Vegas – Private Jet Charter",
                    link: "/private-jet-charter-los-angeles-to-las-vegas"
                },
                {
                    title: "Los Angeles to San Francisco – Private Jet Charter",
                    link: "/private-jet-charter-los-angeles-to-san-francisco"
                },
                {
                    title: "Dallas to Houston – Private Jet Charter",
                    link: "/private-jet-charter-dallas-to-houston"
                },
                {
                    title: "Atlanta to Miami – Private Jet Charter",
                    link: "/private-jet-charter-atlanta-to-miami"
                },
                {
                    title: "Aspen to Dallas – Private Jet Charter",
                    link: "/private-jet-charter-aspen-to-dallas"
                },
                {
                    title: "Chicago to Fort Lauderdale – Private Jet Charter",
                    link: "/private-jet-charter-chicago-to-fort-lauderdale"
                },
                {
                    title: "Teterboro to Miami – Private Jet Charter",
                    link: "/private-jet-charter-teterboro-to-miami"
                }

            ]
        },
        {
            title: "Featured Airports",
            links: [
                {
                    title: "Boston Logan International Airport",
                    link: "/boston-logan-international-airport-kbos"
                },
                {
                    title: "Orlando International Airport",
                    link: "/orlando-international-airport-kmco"
                },
                {
                    title: "Naples Airport",
                    link: "/naples-airport-kapf"
                },
                {
                    title: "Addison Airport",
                    link: "/addison-airport-kads"
                },
                {
                    title: "Chicago Executive Airport",
                    link: "/chicago-executive-airport-kpwk"
                },
                {
                    title: "Miami-Opa Locka Executive Airport",
                    link: "/miami-opa-locka-executive-airport-kopf"
                },
                {
                    title: "Westchester County Airport",
                    link: "/westchester-county-airport-khpn"
                },

            ]
        },
        {
            title: "Services",
            links: [
                {
                    title: "On-Demand Charter",
                    link: "/private-jet-charter"
                },
                {
                    title: "Sports Team Charter",
                    link: "/industry-specific-charter/sports-team-charter"
                },
                {
                    title: "Oil and Gas Industry Charter",
                    link: "/industry-specific-charter/oil-and-gas-industry-charter"
                },
                {
                    title: "Music Industry Charter",
                    link: "/industry-specific-charter/music-industry-charter"
                },
                {
                    title: "Empty Leg Flights",
                    link: "/empty-leg-flights"
                },
                {
                    title: "Corporate Jet Charter",
                    link: "/industry-specific-charter/corporate-jet-charter"
                },
                {
                    title: "Government Air Charter",
                    link: "/industry-specific-charter/government-air-charter"
                }

            ]
        },
        {
            title: "Resources",
            links: [
                {
                    title: "Private Jet Airports",
                    link: "/usa-airport-directory"
                },
                {
                    title: "Private Jet Types",
                    link: "/aircraft-charters"
                },
                {
                    title: "Pricing Guide",
                    link: "/cost-of-chartering-a-private-jet"
                },
                {
                    title: "Intant Cost Estimator",
                    link: "/charter-flights-cost-calculator"
                },
                {
                    title: "Flight Tracker",
                    link: "/flight-tracker"
                },
                {
                    title: "Distance Calculator",
                    link: "/distance-calculator"
                },

            ]
        }
    ];

    return (
        (<section className='bg-black pt-5 px-5 md:px-10 lg:px-20 pb-0'>
            <div className=" max-w-[1800px] mx-auto pt-10 text-[#f0f1f2]">
                <div className="pb-4 flex flex-col justify-between w-fit mx-auto min-[1180px]:w-full min-[1180px]:m-0  min-[1180px]:flex-row gap-5">
                    <div className='mb-4 min-[1180px]:mb-8 '>
                        <Image
                            src="/images/Logo.png"
                            alt="Jet Level Aviation Logo"
                            width={790}
                            height={142}
                            className='md:w-72 max-w-72 mx-auto h-auto'
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-7 '>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:h-[54px]">
                            <h4 className="text-lg flex-1 min-w-36 lg:max-w-36 text-center">Get the Latest Updates</h4>
                            <form action="mailto:kingshahbaz0313@gmail.com" method="post" className='flex max-w-72 h-14 p-2 border-[#858585] border rounded-2xl'>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full text-sm placeholder-[#858585] bg-black outline-none"
                                    required
                                />
                                <button type='submit' className='cursor-pointer text-xl pr-4 text-[#858585] hover:text-white transition-all duration-150'>→</button>
                            </form>
                        </div>
                        <div className='flex flex-col lg:flex-row lg:items-center lg:h-[54px] gap-4 pb-0 lg:pb-0 '>
                            <h4 className="text-lg min-w-24 lg:max-w-24 text-center">Connect with us</h4>
                            <div className="flex gap-6 items-center mx-auto">
                                {/* Add proper href values for each social media link */}
                                <a className='border border-[#858585] rounded-full p-2 text-[#858585]' href="#" aria-label="Facebook" >
                                    <FaFacebookF />
                                </a>
                                <a className='border border-[#858585] rounded-full p-2 text-[#858585]' href="#" aria-label="Twitter" >
                                    <FaXTwitter />
                                </a>
                                <a className='border border-[#858585] rounded-full p-2 text-[#858585]' href="#" aria-label="Instagram" >
                                    <FaInstagram />
                                </a>
                                <a className='border border-[#858585] rounded-full p-2 text-[#858585]' href="#" aria-label="LinkedIn" >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loop through the sections array and generate each section */}
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`bg-[#202020] py-8 border-b border-black lg:flex items-baseline ${
                        index === 0 ? "rounded-[20px_20px_0px_0px]" : ""
                        } ${
                        index === sections.length - 1 ? "rounded-[0px_0px_20px_20px]" : ""
                        }`}
                    >
                        <div className="lg:w-1/4 pb-4">
                        <h4 className="font-playfair tracking-widest text-[15px] lg:w-fit px-8 lg:pl-[25%] lg:pr-0">
                            {section.title}
                        </h4>
                        </div>
                        <ul className='list-none lg:w-3/4 pl-8 pr-4  lg:pr-12 lg:pl-0  text-sm'>
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className='inline'>
                                    <Link
                                        href={link.link}
                                        // Will cause weird wrapping of li if not inline flex
                                        className={`text-[#858585] leading-7 hover:text-blue mr-2  inline-flex`}
                                    >
                                        {link.title}
                                    </Link>
                                    {linkIndex !== section.links.length - 1 && (
                                        <span className="text-[#858585] mr-2 hidden sm:inline">|</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}


            </div>
            <div className="relative">
                <hr className='-ml-5 md:-ml-20 border-[#858585] absolute w-[calc(100%_+40px)] md:w-[calc(100%_+120px)] lg:w-[calc(100%_+160px)]' />
                <div className='max-w-[1800px] mx-auto flex flex-col lg:flex-row text-[#f0f1f2] gap-5 mt-8 py-4'>
                    <div className='flex gap-5 flex-col md:flex-row lg:flex-col text-[11px]'>
                        <div>&copy; 2024 Jetlevel Aviation LLC All rights reserved</div>
                        <div className='flex flex-row gap-3 md:mx-auto lg:mx-0'>
                            <Link href="/privacy-policy" className='hover:text-blue'>Privacy</Link>
                            <Link href="/jetlevel-aviation-standard-terms-and-conditions" className='hover:text-blue'>Terms of Use</Link>
                        </div>
                    </div>
                    <p className='flex-1 text-[#858585] text-[9px] '>
                        All Aircraft and Air Carriers selected by JetLevel Aviation, LLC are fully certified by The Federal Aviation Administration and The U.S Department of Transportation under Part 135 regulations. Carriers are solely responsible for the air transportation arranged on behalf of JetLevel Aviation, LLC. JetLevel Aviation, LLC does not own or operate any aircraft. JetLevel Aviation, LLC is not a direct or indirect air carrier. All flights chartered through JetLevel Aviation, LLC are operated by Part 135 Air Carriers or Foreign Civil Aviation Authority (CAA) equivalent that operate and exercise full operational control over those flights at all times.
                    </p>
                </div>
            </div>
        </section>)
    );
};

export default Footer;