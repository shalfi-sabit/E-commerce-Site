import React, { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  type?: "submit" | "button";
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isCouponButtonDisabled?: boolean;
  isPlaceOrderButtonDisabled?: boolean;
}

const FillButton: React.FC<ButtonProps> = ({
  text,
  type,
  className,
  onClick,
  isCouponButtonDisabled,
  isPlaceOrderButtonDisabled,
}) => {
  return (
    <>
      {onClick && (
        <button
          type={type}
          className={`bg-red-900 hover:bg-red-400 rounded text-white-900 
    font-medium text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 hover:shadow-md duration-200 text-nowrap ${className}`}
          onClick={onClick}
          disabled={isCouponButtonDisabled || isPlaceOrderButtonDisabled}
        >
          {text}
        </button>
      )}
      {!onClick && (
        <button
          type={type}
          className={`bg-red-900 hover:bg-red-400 rounded text-white-900 
    font-medium text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 hover:shadow-md duration-200 text-nowrap ${className}`}
          disabled={isCouponButtonDisabled || isPlaceOrderButtonDisabled}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default FillButton;
