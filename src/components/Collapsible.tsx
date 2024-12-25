"use client";

import React, { ReactNode } from "react";

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
}

const FAQDropdown: React.FC<FAQDropdownProps> = ({
  question,
  answer,
  iconStyle = "caret",
  iconPosition = "end",
  isOpen,
  onClick,
  backgroundColor,
  classNames,
  answerClassName,
  questionClassName,
  iconColor,
}) => {
  const renderIcon = () => {
    if (iconStyle === "caret") {
      return isOpen ? "▼" : "▶";
    }
    return isOpen ? "↓" : "→";
  };

  return (
    <div>
      <div
        onClick={onClick}
        className={`${classNames || ""} flex items-center cursor-pointer ${
          iconPosition === "end" ? "justify-between" : "justify-start"
        } bg-[${backgroundColor}] pl-6 pt-4 pr-5 pb-4 text-white font-bold text-lg`}
      >
        {iconPosition === "start" && <span className="mr-2">{renderIcon()}</span>}
        <span className={`flex-grow ${questionClassName || ""}`}>{question}</span>
        {iconPosition === "end" && <span className={`ml-2 ${iconColor}`}>{renderIcon()}</span>}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] p-[30px_35px_31px_32px]" : "max-h-0 p-0"
        } ${answerClassName || ""} text-[#555] details`}
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        {typeof answer === "string" ? (
          <p className="text-md details">{answer}</p>
        ) : (
          answer
        )}
      </div>
    </div>
  );
};

export default FAQDropdown;
