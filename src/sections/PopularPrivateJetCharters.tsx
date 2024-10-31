import Image from "next/image";
import React from "react";

const PopularPrivateJetCharters = () => {
  const cardInfo = [
    {
      imageLink:
        "https://jetlevel.com/wp-content/uploads/elementor/thumbs/Beach-cover-photo-qm2ppfokm5zh5tctslkcozex8mxqdlj0u7c21fslac.jpg",
      name: "Miami",
      altText: "Aerial view of Miami beach with skyscrapers and ocean",
    },
    {
      imageLink:
        "https://jetlevel.com/wp-content/uploads/elementor/thumbs/lasvegas-1-qloz91rmigljb3esjs83kckntorydm876gxpvylrr8.jpg",
      name: "Las Vegas",
      altText: "Las Vegas welcome sign at night with bright lights",
    },
    {
      imageLink:
        "https://jetlevel.com/wp-content/uploads/elementor/thumbs/Los-Angeles-jpg-1-qm2ripl37zcbeyjgmtbnuifabx7cwwnz5a9xt70d6s.jpg",
      name: "Los Angeles",
      altText: "Aerial view of Los Angeles with sunset",
    },
    {
      imageLink:
        "https://jetlevel.com/wp-content/uploads/elementor/thumbs/newyork-scaled-1-qloz9dzizb29i0x1kfi8yrhnjp3q5okpk5f14k3nic.jpg",
      name: "New York",
      altText: "Statue of Liberty with New York City skyline in the background",
    },
  ];
  return (
    <section className="flex flex-col items-center max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20">
      <h2 className="mb-8">
        Popular Private Jet Charter Destinations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 mb-8">
        {cardInfo.map((card, index) => (
          <div key={index} className="cursor-pointer rounded-lg shadow-[0_0_4px_3px_rgba(0,0,0,0.2)] overflow-hidden">
            <Image
              src={card.imageLink}
              width={280}
              height={175} 
              alt={card.altText}
              className="w-full object-cover"
            />
            <div className="p-4 text-white text-center bg-blue-background bg-cover">
              <h3 className="">{card.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="text-white font-bold px-7 py-2 md:py-3 rounded-full md:rounded-xl bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1">View All</button>
    </section>
  );
};

export default PopularPrivateJetCharters;
