import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CharterCityProps {
  img: string;
  heading?: string;
  link: string;
}

const CharterCity: React.FC<CharterCityProps> = ({ img, heading, link }) => {
  return (
    <Link href={link}
      className="bg-blue-background rounded-2xl border-[3px] box-border hover:shadow-card_shadow bg-cover transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue max-[1280px]:w-[23%] w-[24%] max-[1000px]:w-[48%] max-[700px]:w-full  cursor-pointer"
    >
      <div className="relative w-full h-[218px] overflow-hidden rounded-[13px_13px_0px_0px]">
        <Image
          src={img} 
          alt="City Image"
          fill          // fill the container
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h4 className="text-white p-3 pt-6 font-bold">{heading}</h4>
    </Link>

  );
};

export default CharterCity;
