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
      <div className="flex mt-8 flex-wrap gap-x-[8px] gap-y-[10px]">
        {
          charterType?.map((charter, index,array) => (
          <div
            key={index}
            className={`${array?.length === 6 ? 'w-[32%] max-[700px]:w-full max-[900px]:w-[48%] max-[700px]:w-full': 'w-[14%] max-[900px]:w-[24%] max-[700px]:w-full'} hover:rounded-[19px] h-[270px] border-[3px] transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue cursor-pointer group bg-cover rounded-2xl relative box-border`}
            style={{ backgroundImage: `url(${charter.image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',  backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl group-hover:opacity-60"></div>

            <div className="absolute inset-0 flex items-center justify-center p-2">
              <Link href={`/industry-specific-charter/${charter.url}`}>
                <h4 className="font-bold text-white text-[19px] leading-6 text-center">
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
