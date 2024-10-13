import React from 'react';

type CardProps = {
    icon: any;
    title: string;
    description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left bg-black text-white rounded-lg px-4 py-4 shadow-lg box-border">
            <div className="flex justify-center items-center mb-4 bg-blue-500 w-20 h-20 rounded-full ">
                {icon}
            </div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>{description}</p>
        </div>

    );
};

export default Card;