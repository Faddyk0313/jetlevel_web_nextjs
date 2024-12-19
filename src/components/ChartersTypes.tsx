import Link from 'next/link';
import React from 'react';

type Charter = {
  image: string;
  url: string;
  name: string;
};

type ChartersTypesProps = {
  charterType?: Charter[];
};

const ChartersTypes: React.FC<ChartersTypesProps> = ({ charterType }) => {
  return (
    <div>
      <div className="flex justify-between mt-8 flex-wrap gap-y-7">
        {
          charterType?.map((charter, index,array) => (
          <div
            key={index}
            className={`${array?.length === 6 ? 'w-[32%]': 'w-[14%]'} h-[270px] cursor-pointer group border-2 border-[#0071BA] bg-cover rounded-lg relative hover:border-black`}
            style={{ backgroundImage: `url(${charter.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg group-hover:opacity-60"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Link href={`/industory-charter/${charter.url}`}>
                <h4 className="font-bold text-white text-xl text-center group-hover:underline">
                  {charter.name}
                </h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartersTypes;
