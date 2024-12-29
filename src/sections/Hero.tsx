import React, { Suspense } from 'react';
// import IframeEmbed from './Iframe';
import Markdown from 'markdown-to-jsx';
import LeadForm from '@/components/LeadForm';
import FlightTracker from '@/components/FlightTracker';
import DistanceCalculator from '@/components/DistanceCalculator';

type HeroProps = {
    image: string;
    title: string;
    subtitle?: string;
    tagline?: string;
    description?: string;
    hasOverlay?: boolean;
    hasCalculator?: boolean;
    showCalculator?:string
};

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, tagline, description, hasOverlay, hasCalculator, showCalculator = true }) => {
    return (
        <section className={`flex flex-col min-h-[65vh] md:min-h-[75vh]  ${hasCalculator ? "justify-end xl:pb-5 pt-5" : "justify-end pb-5 sm:pb-10"}  ${hasOverlay ? "overlay" : ""} bg-center bg-cover text-center text-white bg-no-repeat `}
            style={{ backgroundImage: `url('${image}')` }}>
            <div className='w-full max-w-[1800px] mx-auto px-5 md:px-10 xl:px-20'>
                <p className='mb-1 subtitle'>{subtitle}</p>
                <h1 className='mb-5'>{title}</h1>
                <p className={`${tagline ? 'TitleTtagline mb-5 ' : 'hidden'}`}>{tagline}</p>
                <div className={`${description ? 'mb-5 ' : 'hidden'}`}>
                    <Markdown
                        options={{
                            forceBlock: true,
                            overrides: {
                                p: {
                                    props: {
                                        className: 'TitleTtagline'
                                    }
                                },
                                a: {
                                    props: {
                                        className: `TitleTtagline text-white`,
                                    },
                                },
                            },
                        }}
                    >
                        {description as string}
                    </Markdown>
                </div>
                {
                showCalculator == 'LeadForm' ?
                <div className='w-full outline-none h-auto' id="my-iframe">
                <Suspense fallback={<div className="search-form__loader"></div>}>

                    <LeadForm/>
                </Suspense>
                </div>
                : showCalculator == 'FlightTracker' ?
                <div className='w-full outline-none h-auto' id="my-iframe">
                <Suspense fallback={<div className="search-form__loader"></div>}>

                    <FlightTracker/>
                </Suspense>
                </div>
                : showCalculator == 'DistanceCalculator' ?
                <div className='w-full outline-none h-auto' id="my-iframe">
                <Suspense fallback={<div className="search-form__loader"></div>}>

                    <DistanceCalculator />
                </Suspense>
                </div>  : null
                }
            </div>
        </section>
    );
};

export default Hero;
