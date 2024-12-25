import React from 'react';

interface CharterCityProps {
  img?: string;
  heading?: string;
  link?: string;
}

const CharterCity: React.FC<CharterCityProps> = ({ img, heading, link }) => {
  return (
    <div
      className="bg-[#0071BA] w-[24%] max-[700px]:w-full shadow-[3px_2px_6px_3px_lightgray] cursor-pointer"
    >
      <div
        className="w-full h-[218px] bg-cover bg-center"
        style={{ backgroundImage: img ? `url(${img})` : 'none' }}
      >
      </div>
      <h4 className="text-white p-3 pt-6 font-bold">{heading}</h4>
    </div>
  );
};

export default CharterCity;
