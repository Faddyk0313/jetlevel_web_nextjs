import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type navClickedContentProps = {
  subOptions: { name: string; link: string; image: string; }[];
  closeDropdown: () => void;  // Add this prop type
};

const NavClickedContent: React.FC<navClickedContentProps> = ({ subOptions, closeDropdown }) => {
  return (
    <div className="lg:absolute top-[4.5rem] left-[-30px] w-screen bg-black z-50">  {/* Full width black background */}
      <div className='bg-black w-full absolute right-full h-full'></div>
      <div className="max-w-[1170px] mr-auto">  {/* Center the content with max width */}
        <ul className="flex lg:w-full lg:justify-evenly items-center py-5 pr-2 lg:py-10 flex-wrap">
          {subOptions.map((option, index) => (
            <li key={index} className="flex w-1/2 md:w-1/4 lg:w-max items-center gap-2 pr-1 pb-5">
              <Image
                src={option.image}
                alt="Image"
                width={60}
                height={60}
                className="rounded-full object-cover w-[60px] h-[60px] lg:w-20 lg:h-20"
              />
              <Link href={option.link} className="text-white text-md md:text-lg lg:text-nowrap hover:text-blue transition-all duration-100"  onClick={closeDropdown}>
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default NavClickedContent;