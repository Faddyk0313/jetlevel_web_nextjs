import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <>
            <section className="flex flex-col  bg-hero-background bg-center bg-cover text-center text-white py-12 md:pt-48 pb-5 bg-no-repeat">
                <div className='w-full max-w-[1800px] mx-auto p-5'>
                    <p className='mb-1 subtitle'>Fly with Confidence!</p>
                    <h1 className='mb-5'>Get Instant Quote and Charter Your Private Jet Today</h1>
                    <p className='TitleTtagline'>Fly in 2-4 hours. No hidden fees.</p>
                    {/* Iframe */}
                    <div id="iframe" className='my-6 bg-white h-40'></div>
                </div>
                
            </section>
            <section className="flex flex-col md:flex-row justify-center items-center max-w-[1800px] mx-auto pt-7 pb-2 px-3 md:py-2 md:px-2">
                <div className="text-center w-full md:w-min">   
                    <h4 className='text-xs tracking-[1px] text-[rgba(26,65,89,0.84)] whitespace-nowrap md:mx-3 lg:mx-6'>AS SEEN ON</h4>
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
