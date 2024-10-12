import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type navClickedContentProps = {
  subOptions: { name: string; link: string; image: string }[];
};

const NavClickedContent: React.FC<navClickedContentProps> = ({ subOptions}) => {
  return (
    <div className={`block lg:absolute lg:w-full left-0 top-20 shadow-lg z-50 max-w-[1500px] bg-black `}>
      <ul className="flex lg:w-full lg:justify-evenly items-center py-5 pr-2 lg:py-10 flex-wrap">
        {subOptions.map((option, index) => (
          <li key={index} className="flex w-1/2 md:w-1/4 lg:w-max items-center gap-2 pr-1 pb-5">
            {/* Apply Tailwind classes here */}
            <Image
              src={option.image}
              alt="Image"
              width={60}
              height={60}
              className="rounded-full object-cover w-[60px] h-[60px] lg:w-20 lg:h-20"
            />
            <Link href={option.link} className={`text-white text-md md:text-lg lg:text-nowrap hover:text-gray-300`}>
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavClickedContent;