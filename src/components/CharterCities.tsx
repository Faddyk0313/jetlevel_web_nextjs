import React from 'react';

interface CharterCityProps {
  img?: string;
  heading?: string;
  link?: string;
}

const CharterCity: React.FC<CharterCityProps> = ({ img, heading, link }) => {
  return (
    <div
      className="bg-blue-background rounded-2xl border-[3px] box-border hover:shadow-card_shadow bg-cover transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue w-[24%] max-[700px]:w-full cursor-pointer"
    >
      <div
        className="w-full h-[218px] bg-cover bg-center rounded-[13px_13px_0px_0px]"
        style={{ backgroundImage: img ? `url(${img})` : 'none' }}
      >
      </div>
      <h4 className="text-white p-3 pt-6 font-bold">{heading}</h4>
    </div>
  );
};

export default CharterCity;
