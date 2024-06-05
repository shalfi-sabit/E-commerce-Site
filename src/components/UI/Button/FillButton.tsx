import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <div>
      <button
        className={`bg-red-900 hover:bg-red-400 rounded text-white-900 
    font-semibold text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 hover:shadow-md duration-200 ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
