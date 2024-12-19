import React from 'react';

type CharterAdvantagesProps = {
  icon:any; 
  heading?: string;
  description?: string | JSX.Element;
};

const CharterAdvantages: React.FC<CharterAdvantagesProps> = ({ icon, heading, description }) => {
  return (
    <div className="flex items-center flex-col space-x-4 p-4 rounded-lg">
      <div className="flex justify-center items-center mb-4">
        {icon}
      </div>
      <div>
        {heading && <h3 className="text-xl text-center font-bold mb-2">{heading}</h3>}
        {description && (
          <p className="text-sm text-center text-gray-600">
            {typeof description === 'string' ? description : description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CharterAdvantages;
