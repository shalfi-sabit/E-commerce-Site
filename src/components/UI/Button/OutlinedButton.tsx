import React, { MouseEvent } from "react";

interface Props {
  text: string;
  type?: "submit" | "button";
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const OutlinedButton: React.FC<Props> = ({
  text,
  type,
  className,
  onClick,
}) => {
  return (
    <div>
      <button
        className={`border-solid border-[1px] rounded border-gray-400 text-black-900 
        font-semibold hover:text-gray-300 text-nowrap text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 hover:shadow-md duration-200 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default OutlinedButton;
