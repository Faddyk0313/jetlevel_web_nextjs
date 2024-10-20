import React from 'react';

const BookYourPrivateJet = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-white">
            <img src='/images/blue-background.png' alt='Background' className='w-full h-full object-cover absolute z-0' />
            <div className='max-w-[1800px] mx-auto z-10 px-5 py-20'>
                <h3 className="text-center text-lg font-bold mb-2">BOOK YOUR PRIVATE JET</h3>
                <h2 className="text-center mb-6 ">Aviation agents standing by 24/7 to assist</h2>
                <div className="flex flex-col md:flex-row justify-center gap-5 ">
                    <div className="bg-white flex flex-col items-center gap-5  text-center md:flex-1 p-4 rounded-lg shadow-lg text-gray-800">
                        <img src="/images/phoneGif.gif" className='w-20 mx-auto' alt="Phone Gif" />
                        <h4 className="font-bold">Give us a call</h4>
                        <button className="text-white px-3 py-2 md:py-3 min-w-fit w-2/5  md:w-[35%] rounded-full md:rounded-lg bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1">(855) 538-5383</button>
                    </div>
                    <div className="bg-white flex flex-col items-center gap-5 text-center md:flex-1 p-4 rounded-lg shadow-lg text-gray-800">
                        <img src="/images/emailGif.gif" className='w-20 mx-auto' alt="Email Gif" />
                        <h4 className="font-bold">Send us a message</h4>
                        <button className="text-white px-3 py-2 md:py-3 min-w-fit w-2/5 md:w-[35%] rounded-full md:rounded-lg bg-gradient-to-r from-[#a94442] via-[#d9534f] to-[#c9302c] transition-all ease-linear hover:-translate-y-1">Search Flight</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookYourPrivateJet;
