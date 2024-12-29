"use client";

import React, { ReactNode } from "react";
import { FiPlus } from "react-icons/fi";

interface FAQDropdownProps {
  question: string;
  answer: string | ReactNode;
  iconStyle?: "caret" | "arrow";
  iconPosition?: "start" | "end";
  isOpen?: boolean;
  onClick?: () => void;
  backgroundColor?: string;
  classNames?: string;
  answerClassName?: string;
  questionClassName?: string;
  iconColor?: string;
  isfaq?: boolean;
}

const FAQDropdown: React.FC<FAQDropdownProps> = ({
  question,
  answer,
  iconPosition = "end",
  isOpen,
  onClick,
  backgroundColor,
  classNames,
  answerClassName,
  questionClassName,
  iconColor,
  isfaq = false
}) => {
  return (
    <div className='border-b py-5'>
      <div
        onClick={onClick}
        className={`${classNames || ""} flex items-center cursor-pointer ${
          iconPosition === "end" ? "justify-between" : "justify-start"
        } bg-[${backgroundColor}] ${isfaq ? '':"py-4"} pr-5 text-white font-bold`}
      >
        {
          isfaq ? <h3 className={`transition-colors duration-200 m-0 ${isOpen ? 'text-blue' : 'text-darkBlue group-hover:text-blue'} ${questionClassName}`}>{question}</h3> : <h2 className={`transition-colors duration-200 leading-[46px] ${isOpen ? 'text-blue' : 'text-darkBlue group-hover:text-blue'} ${questionClassName}`}>{question}</h2>
        }
        
          <span className={`transition-all duration-200 border-2 rounded-full ${isOpen ? 'rotate-45 text-blue border-blue' : 'text-darkBlue border-darkBlue group-hover:text-blue group-hover:border-blue'}`}>
            <FiPlus className={`w-7 h-7 ${iconColor}`} />
          </span>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ease-in-out ${
          isOpen ? "p-[6px_20px_31px_0px]" : "max-h-0 p-0"
        } ${answerClassName || ""} text-[#555] `}
      >
        {typeof answer === "string" ? (
          <p className="text-md ">{answer}</p>
        ) : (
          answer
        )}
      </div>
    </div>
  );
};

export default FAQDropdown;
