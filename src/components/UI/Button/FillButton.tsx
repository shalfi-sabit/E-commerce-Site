import React from "react";

interface ButtonProps {
  text: string;
  type?: "submit";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type, className }) => {
  return (
    <div>
      <button
        type={type}
        className={`bg-red-900 hover:bg-red-400 rounded text-white-900 
    font-medium text-[10px] sm:text-[12px] md:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-[8px] sm:py-[10px] lg:py-3 hover:shadow-md duration-200 ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
