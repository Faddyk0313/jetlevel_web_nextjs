import React from 'react';

type CharterDescriptionProps = {
  heading: string;
  paragraph: string | JSX.Element; 
};

const CharterDescription: React.FC<CharterDescriptionProps> = ({ heading, paragraph }) => {
  return (
    <div className="bg-[#E9E9E9] pt-[60px] pb-[60px]">
      <div className="w-[60%] m-[0_auto]">
        <h2 className="mb-4 text-center">{heading}</h2>
        {typeof paragraph === 'string' ? (
          <div
            className="text-base text-center"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ) : (
          <div className="text-base">{paragraph}</div>
        )}
      </div>
    </div>
  );
};

export default CharterDescription;
