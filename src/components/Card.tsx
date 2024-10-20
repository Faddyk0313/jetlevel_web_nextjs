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
            className={`flex flex-col items-start text-left ${bgcolor == "white"
                ? "bg-black" : bgcolor === 'gray' ? "bg-black" 
                : "bg-[#0E21384D] border border-white bg-opacity-10 backdrop-blur-lg"
                }  text-white rounded-lg px-4 py-4 shadow-lg box-border cursor-pointer transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue-500`}
        >
            <div className="flex justify-center items-center mb-4 bg-blue-600 w-20 h-20 rounded-full">
                {icon}
            </div>
            <h3 className="mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
