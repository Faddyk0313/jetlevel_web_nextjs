import React from 'react';
import IframeEmbed from './Iframe';

type HeroProps = {
    image: string;
    title: string;
    subtitle: string;
    tagline?: string;
};  

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, tagline }) => {
    return (
        <section className={`flex flex-col md:min-h-[75vh] md:justify-center lg:justify-end ${subtitle === "Fly with Confidence!" ? "" : "overlay" } bg-center bg-cover text-center text-white bg-no-repeat px-5 md:px-10 lg:px-20 py-10 md:py-5 `} 
        style={{backgroundImage :  `url(${image})` }}>
            <div className='w-full max-w-[1800px] mx-auto'>
                <p className='mb-1 subtitle'>{subtitle}</p>
                <h1 className='mb-5'>{title}</h1>
                <p className={`${tagline ? '' : 'hidden'} TitleTtagline mb-5 `}>{tagline}</p>
                {/* Iframe */}
                <div className='w-full outline-none h-auto'>
                    <IframeEmbed />
                </div>
            </div> 
        </section>
    );
};

export default Hero;
