import React from 'react';

const FourMetrics = () => {
    return (
        <section className="bg-fourMetrics-OurCommitment-background bg-[center_top] md:bg-[center_-80px] bg-no-repeat bg-cover">
            <div className="w-full h-full flex items-center bg-[rgba(0,0,0,0.5)] justify-center px-[60px] py-3 md:p-[100px]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full text-white max-w-[1800px] mx-auto">
                    <div className="text-center">
                        <h2 className='text-5xl mb-2'>5000+</h2>
                        <p className=''>World's Safest Jets</p>
                    </div>
                    <div className="text-center">
                        <h2 className='text-5xl mb-2'>5+</h2>
                        <p className=''>Years in Business</p>
                    </div>
                    <div className="text-center">
                        <h2 className='text-5xl mb-2'>100+</h2>
                        <p className=''>BBB Rating</p>
                    </div>
                    <div className="text-center">
                        <h2 className='text-5xl mb-2'>1000+</h2>
                        <p className=''>Annual Charters</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourMetrics;
