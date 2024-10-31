import React from 'react';
import IframeEmbed from './Iframe';

const Hero = () => {
    return (
        <section className="flex flex-col md:min-h-[75vh] md:justify-center lg:justify-end bg-hero-background bg-center bg-cover text-center text-white bg-no-repeat px-5 md:px-10 lg:px-20 py-10 md:py-5 ">
            <div className='w-full max-w-[1800px] mx-auto'>
                <p className='mb-1 subtitle'>Fly with Confidence!</p>
                <h1 className='mb-5'>Get Instant Quote and Charter Your Private Jet Today</h1>
                <p className='TitleTtagline mb-5'>Fly in 2-4 hours. No hidden fees.</p>
                {/* Iframe */}
                <div className='w-full outline-none h-auto'>
                    <IframeEmbed />
                </div>
            </div>
        </section>
    );
};

export default Hero;
