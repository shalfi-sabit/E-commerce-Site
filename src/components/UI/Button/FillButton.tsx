import React, { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  type?: "submit" | "button";
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isCouponButtonDisabled?: boolean;
  isPlaceOrderButtonDisabled?: boolean;
  isSubmitting?: boolean;
}

const FillButton: React.FC<ButtonProps> = ({
  text,
  type,
  className,
  onClick,
  isCouponButtonDisabled,
  isPlaceOrderButtonDisabled,
  isSubmitting,
}) => {
  return (
    <>
      {onClick && (
        <button
          type={type}
          className={`  rounded text-white-900 
    font-medium text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 duration-200 text-nowrap ${className} ${
            isCouponButtonDisabled || isPlaceOrderButtonDisabled || isSubmitting
              ? "bg-red-200"
              : "bg-red-900 hover:bg-red-400 hover:shadow-md"
          }`}
          onClick={onClick}
          disabled={
            isCouponButtonDisabled || isPlaceOrderButtonDisabled || isSubmitting
          }
        >
          {text}
        </button>
      )}
      {!onClick && (
        <button
          type={type}
          className={` hover:bg-red-400 rounded text-white-900 
    font-medium text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 duration-200 text-nowrap ${className} ${
            isCouponButtonDisabled || isPlaceOrderButtonDisabled || isSubmitting
              ? "bg-red-200"
              : "bg-red-900 hover:bg-red-400 hover:shadow-md"
          }`}
          disabled={
            isCouponButtonDisabled || isPlaceOrderButtonDisabled || isSubmitting
          }
        >
          {text}
        </button>
      )}
    </>
  );
};

export default FillButton;
