import Link from "next/link";
import React from "react";

type CardProps = {
    icon: any;
    title: string;
    description: string;
    link: string;
    bgcolor: string;
    className?: string
};
const Card: React.FC<CardProps> = ({ icon, title, description, link, bgcolor, className }) => {
    const parentTagStyles = `${className} flex flex-col items-start text-left border-[3px] text-white rounded-2xl px-4 py-4 box-border cursor-pointer transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue
                ${bgcolor == "white"
            ? "bg-blue-background hover:shadow-card_shadow bg-cover"
            : "bg-[#0E21384D]  border-white bg-opacity-10 backdrop-blur-lg"
        }
            `;
    const content = (
        <>
            <div className="flex justify-center items-center mb-4 card bg-blue w-20 h-20 rounded-full">
                {icon}
            </div>
            <h3 className="mb-2">{title}</h3>
            <p className="max-[950px]:text-sm text-gray-300">{description}</p>
            </>
    );

    return link !== '' ? <Link href={link} className={parentTagStyles}>{content}</Link> : <div className={parentTagStyles}>{content}</div>;
};

export default Card;
