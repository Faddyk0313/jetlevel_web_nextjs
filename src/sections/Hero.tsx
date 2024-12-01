import React from 'react';
import IframeEmbed from './Iframe';
import Markdown from 'markdown-to-jsx';

type HeroProps = {
    image: string;
    title: string;
    subtitle?: string;
    tagline?: string;
    description?: string;
    hasOverlay?: boolean;
    hasCalculator?: boolean;
};

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, tagline, description, hasOverlay, hasCalculator }) => {
    return (
        <section className={`flex flex-col min-h-[65vh] md:min-h-[75vh]  ${hasCalculator ? "justify-end pb-10 pt-5" : "justify-end pb-5 sm:pb-10"}  ${hasOverlay ? "overlay" : ""} bg-center bg-cover text-center text-white bg-no-repeat `}
            style={{ backgroundImage: `url(${image})` }}>
            <div className='w-full max-w-[1800px] mx-auto px-5 md:px-10 xl:px-20'>
                <p className='mb-1 subtitle'>{subtitle}</p>
                <h1 className='mb-5'>{title}</h1>
                <p className={`${tagline ? 'TitleTtagline mb-5 ' : 'hidden'}`}>{tagline}</p>
                <div className={`${description ? 'mb-5 ' : 'hidden'}`}>
                    {/* {description} */}
                    <Markdown
                        options={{
                            overrides: {
                                p: {
                                    props: {
                                        className: 'TitleTtagline'
                                    }
                                },
                                a: {
                                    props: {
                                        className: 'TitleTtagline text-blue',
                                    },
                                },
                            },
                        }}
                    >
                        {description as string}
                    </Markdown>
                </div>
                {/* Iframe */}
                <div className={` ${hasCalculator ? '' : 'hidden'} w-full outline-none h-auto`}>
                    <IframeEmbed />
                </div>
            </div>
        </section>
    );
};

export default Hero;
