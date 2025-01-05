import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PopularPrivateJetChartersProps {
  hasSectionPadding?: boolean;
  hasInlinePadding?: boolean;
}

const PopularPrivateJetCharters: React.FC<PopularPrivateJetChartersProps> = ({ hasSectionPadding, hasInlinePadding= true })  => {
  const cardInfo = [
    {
      imageLink:
        "/images/Miami Hero Image.jpg",
      name: "Miami",
      altText: "Aerial view of Miami beach with skyscrapers and ocean",
      pageLink: '/private-jet-miami/'
    },
    {
      imageLink:
        "/images/Las Vegas Hero Image.jpg",
      name: "Las Vegas",
      altText: "Las Vegas welcome sign at night with bright lights",
      pageLink: '/private-jet-charter-flights-to-las-vegas-nv/'
    },
    {
      imageLink:
        "/images/Los Angeles Hero Image.jpg",
      name: "Los Angeles",
      altText: "Aerial view of Los Angeles with sunset",
      pageLink: '/private-jet-charter-flights-to-los-angeles-ca/'
    },
    {
      imageLink:
        "/images/New York Hero Image.jpg",
      name: "New York",
      altText: "Statue of Liberty with New York City skyline in the background",
      pageLink: '/private-jet-charter-flights-to-new-york-ny/'
    },
  ];
  return (
    <section className={`flex flex-col items-center max-w-[1800px] mx-auto ${hasInlinePadding ? "px-5 md:px-10 lg:px-20" : ""}    ${hasSectionPadding === false ? '!py-10' : ''}`}>
      <h2 className="mb-8">
        Popular Private Jet Charter Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 mb-8">
        {cardInfo.map((card, index) => (
          <Link href={card.pageLink} key={index} className="cursor-pointer rounded-2xl border-[3px]  overflow-hidden transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue  hover:shadow-card_shadow">
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
          </Link>
        ))}
      </div>
      <Link href="/us-canada-chartered-cities" className='text-white px-10 py-2 my-2 rounded-full text-lg bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow'>View All</Link>
    </section>
  );
};

export default PopularPrivateJetCharters;
