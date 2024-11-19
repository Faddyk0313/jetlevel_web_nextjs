import React from 'react';

const FourMetrics = () => {
    return (
        <section className="bg-fourMetrics-OurCommitment-background overlay bg-[center_top] md:bg-[center_-80px] bg-no-repeat bg-cover flex items-center justify-center px-10 py-14 md:p-[100px]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full text-white max-w-[1800px] mx-auto">
                    <div className="text-center">
                        <p className='mb-2 text-4xl sm:text-5xl  font-bold text-white'>5000+</p>
                        <p className=''>World's Safest Jets</p>
                    </div>
                    <div className="text-center">
                        <p className='mb-2 text-4xl sm:text-5xl font-bold text-white'>5+</p>
                        <p className=''>Years in Business</p>
                    </div>
                    <div className="text-center">
                        <p className='mb-2 text-4xl sm:text-5xl font-bold text-white'>100+</p>
                        <p className=''>BBB Rating</p>
                    </div>
                    <div className="text-center">
                        <p className='mb-2 text-4xl sm:text-5xl font-bold text-white'>1000+</p>
                        <p className=''>Annual Charters</p>
                    </div>
                </div>
        </section>
    );
};

export default FourMetrics;
