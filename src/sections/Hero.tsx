import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <>
            <section className="hero-section bg-hero-background bg-center bg-cover text-center text-white flex flex-col px-5 py-12 md:pt-48  pb-5 bg-no-repeat">
                <p className='mb-1 subtitle text-lg md:text-3xl'>Fly with Confidence!</p>
                <h1 className='mb-5 text-[45px] md:text-[58px]'>Get Instant Quote and Charter Your Private Jet Today</h1>
                <p className=' TitleTtagline font-playfair text-lg lg:text-xl'>Fly in 2-4 hours. No hidden fees.</p>
                {/* Iframe */}
                <div id="iframe" className='mx-auto my-6 max-w-screen-2xl w-full bg-white h-40'></div>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-center pt-7 pb-2 px-3 md:py-2 md:px-2">
                <div className="text-center w-full md:w-min">   
                    <h5 className='text-xs tracking-[1px] text-[rgba(26,65,89,0.84)] whitespace-nowrap md:mx-3 lg:mx-6'>AS SEEN ON</h5>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-1 items-center">
                    <Image className="opacity-80" width={150} height={70} src='https://fly.jetlevel.com/assets/logo%20asset/Yahoo!.png' alt='Yahoo Logo'/>
                    <Image className="opacity-80" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/USA%20Today.png" alt="USA Today Logo" />
                    <Image className="opacity-80" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/The%20Mercury%20News.png" alt="The Mercury News Logo" />
                    <Image className="opacity-80" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/GO%20BankingRates.png" alt="GO BankingRates Logo" />
                    <Image className="opacity-80" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/Techopedia.png" alt="Techopedia Logo" />
                    <Image className="opacity-80" width={150} height={70} src="https://fly.jetlevel.com/assets/logo%20asset/NewsBreak.png" alt="NewsBreak Logo" />
                </div>
            </section>
        </>
    );
};

export default Hero;
