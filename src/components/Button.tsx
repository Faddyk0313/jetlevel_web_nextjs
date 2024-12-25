import React from "react";
import { cn } from "@/lib/utils"; 

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | number; 
  onClick?: () => void; 
  variant?: "primary" | "default"; 
}

const Button: React.FC<GradientButtonProps> = ({
  text,
  onClick,
  variant = "default",
  className,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 my-2 rounded-full text-lg transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow";

  const variants = {
    primary: "text-white bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8]",
    default: "bg-gray-200 text-gray-800",
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
