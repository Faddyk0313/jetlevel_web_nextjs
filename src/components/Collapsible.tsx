"use client";

import React, { ReactNode } from 'react';

interface FAQDropdownProps {
  question: string;
  answer: string | ReactNode;
  iconStyle?: 'caret' | 'arrow';
  iconPosition?: 'start' | 'end';
  isOpen?: boolean;
  onClick: () => void;
  backgroundColor?: string;
  classNames?: string;
  answerClassName?: string;
  questionClassName?: string;
  iconColor?: string;
}

const FAQDropdown: React.FC<FAQDropdownProps> = ({
  question,
  answer,
  iconStyle = 'caret',
  iconPosition = 'end',
  isOpen,
  onClick,
  backgroundColor,
  classNames,
  answerClassName,
  questionClassName,
  iconColor
}) => {
  const renderIcon = () => {
    if (iconStyle === 'caret') {
      return isOpen ? '▼' : '▶';
    }
    return isOpen ? '↓' : '→';
  };

  return (
    <div className="max-w-[1350px] w-full m-[0_auto]">
      <div
        onClick={onClick}
        className={`${classNames || ''} flex items-center cursor-pointer ${iconPosition === 'end' ? 'justify-between' : 'justify-start'} bg-[${backgroundColor}] pl-6 pt-4 pr-5 pb-4 text-white font-bold text-sm`}
      >
        {iconPosition === 'start' && <span className="mr-2">{renderIcon()}</span>}
        <span className={`flex-grow ${questionClassName || ''}`}>{question}</span>
        {iconPosition === 'end' && <span className={`ml-2 ${iconColor}`}>{renderIcon()}</span>}
      </div>
      {isOpen && (
        <div className={`${answerClassName || ''} p-[30px_35px_31px_32px] text-[#555]`}>
          {typeof answer === 'string' ? <p className="text-md">{answer}</p> : answer}
        </div>
      )}
    </div>
  );
};

export default FAQDropdown;
