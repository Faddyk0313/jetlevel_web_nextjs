import Image from 'next/image';
import React from 'react';

const BookYourPrivateJet = () => {
    return (
        <section className="flex flex-col items-center bg-blue-background bg-cover justify-center sectionHeight text-white">
            <div className='max-w-[1800px] mx-auto px-8'>
                <h3 className="text-center text-lg font-bold mb-2">BOOK YOUR PRIVATE JET</h3>
                <h2 className="text-center mb-6 text-white">Aviation agents standing by 24/7 to assist</h2>
                <div className="flex flex-col md:flex-row justify-center gap-5 ">
                    <div className="bg-white flex flex-col items-center gap-5 text-center sm:mx-[20%] md:mx-0 md:min-w-[310px] md:px-10 pt-4 pb-2 md:py-7 rounded-2xl shadow-lg text-gray-800">
                        <Image src="/images/phoneGif.gif" width={100} height={100} alt="Phone Gif" />
                        <p className="text-xl md:text-2xl">Give us a call</p>
                        <button className="text-white px-10 py-3 md:py-3 rounded-full bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow">(855) 538-5383</button>
                    </div>
                    <div className="bg-white flex flex-col items-center gap-5 text-center sm:mx-[20%] md:mx-0 md:min-w-[310px] md:px-10 pt-4 pb-2 md:py-7 rounded-2xl shadow-lg text-gray-800">
                        <Image src="/images/emailGif.gif" width={100} height={100} alt="Email Gif" />
                        <p className="text-xl md:text-2xl">Send us a message</p>
                        <button className="text-white px-10 py-3 md:py-3 rounded-full bg-gradient-to-r from-[#a94442] via-[#d9534f] to-[#c9302c] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow">Search Flight</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookYourPrivateJet;
