import React from 'react';

const Hero = () => {
    return (
        // <section className="relative  bg-hero-background bg-center">
        <section className="hero-section bg-hero-background bg-center bg-cover text-center text-white flex flex-col px-5 pt-20  pb-5 bg-no-repeat">
            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
            {/* <div className="text-white flex flex-col gap-5 justify-center items-center max-w-screen-xl mx-auto"> */}
            {/* <div id="logo" className='w-full'>
                <img className="mx-auto max-w-xl w-1/2 min-w-80" src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/logo-1-e1710877312297-qlgf0c3jj2c1ku6jq6hdej8sx2inzrzlqvtpb6j0i4.png" title="logo" alt="site logo" />
            </div> */}


            {/* <h1 className='text-[50px] leading-[55px] pt-6 text-center'>
                    Fly with <span className='border-b-[3px] h-2 border-transparent border-b-[#0071ba]'>Confidence!</span>
                </h1>
                <h2 className='text-3xl leading-[30px] pt-6 text-center'>
                    Charter Your Private Jet Today and Experience Seamless, Personalized Travel
                </h2> */}
            <h2 className=' mb-2'>Fly with Confidence!</h2>
            <h1 className='mb-5'>Get Instant Quote and Charter Your Private Jet Today</h1>
            <h3 className=' max-w-xl mx-auto'>Fly in 2-4 hours. No hidden fees.</h3>
            {/* Iframe */}
            <div id="iframe" className='mx-auto my-6 w-11/12 bg-white h-40'></div>
            {/* </div> */}
        </section>
    );
};

export default Hero;
