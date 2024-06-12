import React from "react";

type removeButtonProps = {
  className: string;
};

const RemoveButtonIcon: React.FC<removeButtonProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <circle cx="12" cy="12" r="9" fill="#DB4444" />
      <path
        d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RemoveButtonIcon;
