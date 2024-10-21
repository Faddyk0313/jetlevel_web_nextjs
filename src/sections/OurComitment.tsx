import React from 'react';
import { SafetyFirst, TailoredLuxury } from '@/svg';

const OurComitment = () => {
    return (
        <div className="bg-fourMetrics-OurCommitment-background bg-[center_center] md:bg-[center_-80px] bg-no-repeat bg-cover">
            <div className='bg-black bg-opacity-50 '>
                <div className="max-w-[1800px] mx-auto flex flex-col text-white px-7 justify-center py-20 md:py-32 ">
                    <h2 className="mb-4">Our Commitment </h2>
                    <div className='flex flex-col items-center md:flex-row gap-10 md:gap-14'>
                        <div className='lg:w-1/2'>
                            <div className="flex justify-center items-center mb-4 bg-blue-600 w-20 lg:w-28 h-20 lg:h-28 rounded-full">
                                <SafetyFirst />
                            </div>
                            <h3 className="font-bold">Safety First </h3>
                            <p className="mt-3">
                            At JetLevel Aviation, your safety isn't just a priority; it's our cornerstone. With six decades of expertise, we exclusively collaborate with operators who meet the gold standards of the National Business Aviation Association (NBAA) and the International Standard for Business Aircraft Operations (IS-BAO). Rest assured, every flight you embark on is underpinned by rigorous checks and uncompromising safety protocols. We don’t just meet industry standards; we set them.
                            </p>
                        </div>
                        <div className='lg:w-1/2'>
                            <div className="flex justify-center items-center mb-4 bg-blue-600 w-20 lg:w-28 h-20 lg:h-28 rounded-full">
                                <TailoredLuxury />
                            </div>
                            <h3 className="font-bold">Tailored Luxury </h3>
                            <p className="mt-3">
                            Understanding that luxury is personal, we've crafted an experience that adapts to your unique preferences. Whether it's a last-minute business trip or a leisurely getaway, our boutique approach ensures every detail is tailored to your taste. From gourmet cuisine to your preferred in-flight amenities, our commitment is to transform your journey into an unparalleled experience of comfort and sophistication. Fly with JetLevel Aviation, where every journey is an exclusive story of elegance and convenience, crafted just for you. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurComitment;
