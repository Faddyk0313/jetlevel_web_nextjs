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
            <div className='xl:hidden'>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className='details leading-relaxed'>
                        Fly across the US, Canada, and beyond with our diverse network of aircraft and convenient departure points. Choose JetLevel Aviation for a seamless, worry-free journey every time—elevating your travel experiences to new heights. <br />
                        <span className="my-2 text-blue font-bold italic">
                            Fly with <span className='border-b-2 border-blue text-inherit'>
                                Confidence!
                            </span>
                            <br />
                        </span>
                    </p>

                </div>

                <button
                    className="flex text-xl items-center gap-1 mt-3 cursor-pointer text-blue"
                    onClick={handleShowMore}
                >
                    {showMore ? 'Show Less' : 'Show More'}
                    {showMore ? <FaCaretUp /> : <FaCaretDown />}
                </button>
            </div>
        </>
    );
};

export default TextCompanyOverview;
