import React from 'react';

const PopularPrivateJetCharters = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <h2 className="text-3xl font-bold mb-8">Popular Private Jet Charter Destinations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="cursor-pointer bg-white rounded-lg shadow-[0_0_4px_3px_rgba(0,0,0,0.2)] overflow-hidden">
                    <img src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/Beach-cover-photo-qm2ppfokm5zh5tctslkcozex8mxqdlj0u7c21fslac.jpg" alt="Aerial view of Miami beach with skyscrapers and ocean" className="w-full  object-cover" />
                    <div className="p-4 text-center">
                        <p className="font-bold">Miami</p>
                    </div>
                </div>
                <div className="cursor-pointer bg-white rounded-lg shadow-[0_0_4px_3px_rgba(0,0,0,0.2)] overflow-hidden">
                    <img src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/lasvegas-1-qloz91rmigljb3esjs83kckntorydm876gxpvylrr8.jpg" alt="Las Vegas welcome sign at night with bright lights" className="w-full object-cover" />
                    <div className="p-4 text-center">
                        <p className="font-bold">Las Vegas</p>
                    </div>
                </div>
                <div className="cursor-pointer bg-white rounded-lg shadow-[0_0_4px_3px_rgba(0,0,0,0.2)] overflow-hidden">
                    <img src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/Los-Angeles-jpg-1-qm2ripl37zcbeyjgmtbnuifabx7cwwnz5a9xt70d6s.jpg" alt="Aerial view of Los Angeles with sunset" className="w-full object-cover" />
                    <div className="p-4 text-center">
                        <p className="font-bold">Los Angeles</p>
                    </div>
                </div>
                <div className="cursor-pointer bg-white rounded-lg shadow-[0_0_4px_3px_rgba(0,0,0,0.2)] overflow-hidden">
                    <img src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/newyork-scaled-1-qloz9dzizb29i0x1kfi8yrhnjp3q5okpk5f14k3nic.jpg" alt="Statue of Liberty with New York City skyline in the background" className="w-full object-cover" />
                    <div className="p-4 text-center">
                        <p className="font-bold">New York</p>
                    </div>
                </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 border border-black rounded hover:bg-blue-700">View All</button>
        </div>
    );
};

export default PopularPrivateJetCharters;
