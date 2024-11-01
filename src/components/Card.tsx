import React from "react";

type CardProps = {
    icon: any;
    title: string;
    description: string;
    bgcolor: string;
};  

const Card: React.FC<CardProps> = ({ icon, title, description, bgcolor }) => {
    return (
        <div
            className={`flex flex-col items-start text-left border-[3px]  text-white rounded-2xl px-4 py-4 hover:shadow-card-shadow box-border cursor-pointer transition-all ease-in duration-100 hover:-translate-y-2 hover:border-[#0071ba] h-full
                ${
                    bgcolor == "white"
                    ? "bg-blue-background bg-cover" 
                    : "bg-[#0E21384D]  border-white bg-opacity-10 backdrop-blur-lg"
                }
            `}
        >
            <div className="flex justify-center items-center mb-4 bg-[#0071ba] w-20 h-20 rounded-full">
                {icon}
            </div>
            <h3 className="mb-2">{title}</h3>
            <p className="max-[950px]:text-sm text-gray-300">{description}</p>
        </div>
    );
};

export default Card;
