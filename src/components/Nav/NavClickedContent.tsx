import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type navClickedContentProps = {
  subOptions: { name: string; link: string; image: string; }[];
  closeDropdown: () => void;  // Add this prop type
};

const NavClickedContent: React.FC<navClickedContentProps> = ({ subOptions, closeDropdown }) => {
  return (
    <div className="lg:absolute top-[4.5rem] left-0 w-full bg-black z-50">  {/* Full width black background */}
      <div className='hidden lg:block bg-black w-full absolute right-full h-full'></div>
      <div className='hidden lg:block bg-black w-full absolute left-full h-full'></div>
      <div className="lg:max-w-[1800px] overflow-hidden lg:overflow-visible mx-auto">  {/* Center the content with max width */}
        <ul className="flex lg:w-full items-center justify-between  py-2 lg:py-6 flex-wrap">
          {subOptions.map((option, index) => (
            <li key={index} className="flex w-1/2 md:w-1/4 lg:w-max items-center py-3 gap-2 pr-3">
              <Image
                src={option.image}
                alt={`Image ${index}`}
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