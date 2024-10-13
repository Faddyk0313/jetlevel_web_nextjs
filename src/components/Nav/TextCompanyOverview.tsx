"use client";

import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const TextCompanyOverview = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <div className='lg:hidden'>
                <p className='inline leading-normal'>
                    At JetLevel Aviation, we’re redefining the private jet charter experience by prioritizing safety, reliability, and transparency. Founded in 2019, we’ve established ourselves as a trusted global advisor in the aviation industry. Our mission is to provide high-quality aircraft and competitive pricing, backed by leading customer service to deliver the best value. We are committed to core values of reliability, safety, and transparency, ensuring client satisfaction for both frequent travels and special occasions.&nbsp;
                </p>

                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="inline leading-normal">
                        <p>
                            Fly across the US, Canada, and beyond with our diverse network of aircraft and convenient departure points. Choose JetLevel Aviation for a seamless, worry-free journey every time—elevating your travel experiences to new heights.
                        </p>
                        <p className="my-2 text-blue-600 font-bold italic leading-normal">
                            Fly with <span className='border-b-2 border-blue-600 leading-normal'>
                                Confidence!
                            </span>
                        </p>
                    </div>
                </div>

                <button
                    className="flex items-center gap-1 mt-3 cursor-pointer text-white py-1 px-4 rounded-lg bg-gradient-to-br from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8]"
                    onClick={handleShowMore}
                >
                    {showMore ? 'Show Less' : 'Show More'}
                    {showMore ? <FaCaretUp /> : <FaCaretDown />}
                </button>
            </div>
            <p className='hidden lg:block leading-8'>
                At JetLevel Aviation, we're redefining the private jet charter experience by prioritizing safety, reliability, and transparency. Founded in 2019, we've established ourselves as a trusted global advisor in the aviation industry. Our mission is to provide high-quality aircraft and competitive pricing, backed by leading customer service to deliver the best value. We are committed to core values of reliability, safety, and transparency, ensuring client satisfaction for both frequent travels and special occasions. Fly across the US, Canada, and beyond with our diverse network of aircraft and convenient departure points. Choose JetLevel Aviation for a seamless, worry-free journey every time—elevating your travel experiences to new heights.
                <div className="my-2 text-blue-600 font-bold italic leading-normal">
                    Fly with <span className='border-b-2 border-blue-600 leading-normal'>
                        Confidence!
                    </span>
                </div>
            </p>
        </>
    );
};

export default TextCompanyOverview;
