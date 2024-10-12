import React from 'react';

const CompanyOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 p-10  max-w-screen-xl mx-auto">
            <div className="text-left lg:w-1/2 w-full">
                <h1 className="text-2xl font-bold mb-4">Our Story, Mission, and Values at Jetlevel Aviation.</h1>
                <p className="mb-4">
                    At Jetlevel Aviation, we're redefining the private jet charter experience by prioritizing safety, reliability, and transparency. Founded in 2019, we've established ourselves as a trusted global advisor in the aviation industry. Our mission is to provide high-quality aircraft and competitive pricing, backed by leading customer service to deliver the best value. We are committed to core values of reliability, safety, and transparency, ensuring client satisfaction for both frequent travels and special occasions. Fly across the US, Canada, and beyond with our diverse network of aircraft and convenient departure points. Choose Jetlevel Aviation for a seamless, worry-free journey every time—elevating your travel experiences to new heights.
                </p>
                <p className="text-blue-600 font-bold">Fly with Confidence!</p>
            </div>
            <div className="md:w-1/2 w-full">
                <img src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/of-experience-under-the-hud-1-1-qmfcszjfjpfop9nwox08fyw6iclg6chjd2lfs6hieo.jpg" alt="60 years of experience under one roof with an airplane flying through the number 60" className="w-full" />
            </div>
        </div>
    );
};

export default CompanyOverview;
