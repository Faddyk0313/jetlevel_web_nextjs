import React from 'react';
import Image from 'next/image'; // Next.js optimized image component
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

type Section = {
    title: string;
    links: string[];
};

const Footer = () => {
    // Store section information in an array of objects
    const sections: Section[] = [
        {
            title: "Featured Routes",
            links: [
                "Miami to Las Vegas: Private Jet Rental",
                "Los Angeles to Cabo San Lucas: Private Jet Rental",
                "New York to London: Private Jet Rental",
                "New York to/from Los Angeles: Private Jet Rental",
                "New York to Miami: Private Jet Rental",
                "Toronto to New York: Private Jet Rental"
            ]
        },
        {
            title: "Featured Cities",
            links: [
                "New York", "Los Angeles", "Dallas", "Chicago", "Houston", "London", "Dubai", "Toronto", "Montreal", "Nice"
            ]
        },
        {
            title: "Featured Airports",
            links: [
                "Teterboro Airport", "Palm Beach International Airport", "Love Field Airport", "Westchester County Airport", "Van Nuys Airport", "McCarran International Airport"
            ]
        },
        {
            title: "Services",
            links: [
                "Jet Card Membership", "Private Jet Charter", "Business Jet Charter", "Group Charter", "Helicopter Rental", "Traveling With Pets", "VIP Airliner", "Medical Flight", "Empty Leg Flights", "Private Flights"
            ]
        },
        {
            title: "Resources",
            links: [
                "Company", "Private Jets", "Destinations", "Private Jet Comparison", "Blog", "Safety", "Pricing", "Clean Air Initiative"
            ]
        }
    ];

    return (
        <section className='bg-black pt-0 pb-0'>
            <div className="max-w-[1800px] mx-auto px-5 md:px-16 lg:px-24 py-10 text-[#f0f1f2]">
                <div className="pb-6 lg:pb-1 flex flex-col lg:flex-row gap-5">
                    <div className='mb-4 lg:mb-8 mt-4'>
                        <Image
                            src="https://jetlevel.com/wp-content/uploads/2023/07/jetLeval-logo-1.png"
                            alt="Paramount Business Jets Logo"
                            width={300}
                            height={60}
                            className='w-56 md:w-72 lg:w-80 h-auto'
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 lg:w-full '>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-3 md:w-1/2 lg:h-[54px]">
                            <h4 className="text-lg flex-1 max-w-fit">Get the Latest Updates</h4>
                            <div className='relative flex-1'>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="py-4 w-full px-3 h-14 text-sm border placeholder-[#858585] border-[#858585] bg-black outline-none rounded-sm "
                                />
                                <button className='absolute right-3 top-3 text-2xl text-[#858585] hover:text-white'>→</button>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row lg:items-center lg:h-[54px] gap-4 pb-4 lg:pb-0 md:w-1/2'>
                            <h4 className="text-lg">Connect with us</h4>
                            <div className="flex gap-6 items-center">
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
                    <div key={index} className="bg-[#202020] py-5 border-b border-black lg:flex">
                        <div className='lg:w-1/4 pb-4'>
                            <h4 className="text-lg lg:w-fit px-8 lg:pl-[25%] lg:pr-0">{section.title}</h4>
                        </div>
                        <ul className='list-none lg:w-3/4 px-8  lg:pr-12 lg:pl-0  text-sm'>
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className='inline'>
                                    <Link
                                        href="#"
                                        // Will cause weird wrapping of li if not inline flex
                                        className={`text-[#858585] leading-7 hover:underline hover:text-blue-600 mr-4 ${index !== 0 ? "inline-flex" : ""}`}
                                    >
                                        {link}
                                    </Link>
                                    {linkIndex !== section.links.length - 1 && (
                                        <span className="text-[#858585] mr-2">•</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
            <div className="border-t border-[#858585]">
                <div className='max-w-[1800px] mx-auto p-5   flex flex-col lg:flex-row text-[#f0f1f2] text-sm gap-5 mt-8 pt-4 '>
                    <div className='flex gap-5 flex-col md:flex-row lg:flex-col'>
                        <div>&copy; 2024 Jetlevel Aviation LLC All rights reserved</div>
                        <div className='flex flex-row gap-3 md:mx-auto lg:mx-0'>
                            <Link href="#" className='hover:underline hover:text-blue-600'>Privacy</Link>
                            <Link href="#" className='hover:underline hover:text-blue-600'>Legal</Link>
                        </div>
                    </div>
                    <div className='flex-1 text-[#858585] text-xs '>
                        All Aircraft and Air Carriers selected by JetLevel Aviation, LLC are fully certified by The Federal Aviation Administration and The U.S Department of Transportation under Part 135 regulations. Carriers are solely responsible for the air transportation arranged on behalf of JetLevel Aviation, LLC. JetLevel Aviation, LLC does not own or operate any aircraft. JetLevel Aviation, LLC is not a direct or indirect air carrier. All flights chartered through JetLevel Aviation, LLC are operated by Part 135 Air Carriers or Foreign Civil Aviation Authority (CAA) equivalent that operate and exercise full operational control over those flights at all times.
                        <span className='text-[#0071b2]'>&nbsp; Full Disclaimer.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
