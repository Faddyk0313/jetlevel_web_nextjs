import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type IconItem = {
  title: string;
  icon?: string;
  description: string;
};

type AircraftItem = {
  backgroundImage: string;
  title: string;
  url: string;
};

type AirCraftCharterProps = {
  header: string;
  description: string;
  iconsArray: IconItem[];
  aircraftArray: AircraftItem[];
  backgroundImage: string,
  contentColor: string;
};

const AirCraftCharter: React.FC<AirCraftCharterProps> = ({ contentColor, header, description, iconsArray, aircraftArray, backgroundImage }) => {
  // console.log('contentColor',contentColor);
  return (
    <div className='max-w-[1800px] mx-auto'>
      <div className='w-[65%] max-[700px]:w-full m-[0_auto]'>
        <h2 className={`${contentColor} text-center`}>{header}</h2>
        <p className={`text-lg text-center mt-4 w-[65%] max-[700px]:w-full m-[0_auto] ${contentColor}`}>{description}</p>

        <div className='flex flex-wrap items-center justify-between mt-[50px] max-[700px]:gap-y-8'>
          {
            iconsArray.map((icon, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center w-[23%] max-[700px]:w-[40%] ${index !== iconsArray.length - 1 ? `max-[700px]:border-0 border-r-2 border-dotted border-${contentColor === 'text-white' ? 'white' : 'black'} max-[700px]:pr-0 pr-10 mr-10` : ''
                  }`}
              >
                <img
                  src={icon?.icon}
                  alt={icon.title}
                  width={100}
                  height={100}
                  className={`${contentColor == 'text-white' ? 'invert' : ''} `}
                />
                <h3 className={`uppercase text-xl ${contentColor}`}>{icon.title}</h3>
                <p className={`font-bold mt-3 ${contentColor}`}>{icon.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className='flex mt-[70px] justify-between max-[700px]:gap-y-4 max-[700px]:gap-x-2 max-[700px]:justify-start max-[700px]:w-full w-[75%] m-[0_auto] flex-wrap'>
        {aircraftArray.map((aircraft, index) => (
          <div
            key={index}
            className='relative bg-white p-[8px] pb-3 w-[19%] max-[700px]:w-[31%]'
          >
            <Link href={`${aircraft.url}`}>
              <div
                className='relative h-[130px] group
                hover:scale-105 transition-transform duration-300 ease-in-out'
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 35%, white), url(${aircraft.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className='absolute uppercase bottom-[10px] left-[10px] text-[#333333]'
                >
                  {aircraft.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirCraftCharter;
