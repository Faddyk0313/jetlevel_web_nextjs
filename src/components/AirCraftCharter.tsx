import Image from 'next/image';
import React from 'react';

type IconItem = {
  title: string;
  icon?: string;
  description: string;
};

type AircraftItem = {
  backgroundImage: string;
  title: string;
};

type AirCraftCharterProps = {
  header: string;
  description: string;
  iconsArray: IconItem[];
  aircraftArray: AircraftItem[];
  backgroundImage:string,
  contentColor:string
};

const AirCraftCharter: React.FC<AirCraftCharterProps> = ({ contentColor,header, description, iconsArray, aircraftArray, backgroundImage }) => {
  return (
    <div style={{ backgroundImage:`url(${backgroundImage})` }} className={`p-[60px] pb-0`}>
      <div className='w-[65%] m-[0_auto]'>
        <h2 className={`${contentColor} text-center`}>{header}</h2>
        <p className={`text-lg text-center mt-4 w-[65%] m-[0_auto] ${contentColor}`}>{description}</p>

        <div className='flex items-center justify-between mt-[40px]'>
          {
            iconsArray.map((icon, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center w-[25%] ${
                index !== iconsArray.length - 1 ? 'border-r-2 border-dotted border-black pr-10 mr-10' : ''
              }`}
            >
              <img
                src={icon?.icon}
                alt={icon.title}
                width={100}
                height={100}
              />
              <h3 className={`uppercase text-xl ${contentColor}`}>{icon.title}</h3>
              <p className={`font-bold mt-3 ${contentColor}`}>{icon.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex mt-[70px] justify-between w-[75%] m-[0_auto]'>
        {aircraftArray.map((aircraft, index) => (
          <div
            key={index}
            className='relative bg-white p-[8px] pb-3 w-[19%]'
          >
             <div 
              className='relative h-[130px] group after:content-"" after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-gradient-to-t after:from-white after:via-white/0 after:to-transparent
                hover:scale-105 transition-transform duration-300 ease-in-out'
              style={{
                backgroundImage: `url(${aircraft.backgroundImage})`,
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirCraftCharter;
