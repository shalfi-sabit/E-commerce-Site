import React from "react";
import { useNavigate } from "react-router-dom";

type dropdownRowProps = {
  image: React.ReactNode;
  title: string;
  to: string;
  className?: string;
};

const DropdownRow: React.FC<dropdownRowProps> = ({
  image,
  title,
  to,
  className,
}) => {
  const navigate = useNavigate();

  const handleDropdownRowClick = () => {
    navigate(to);
  };

  return (
    <div
      className={`w-full font-light text-nowrap flex items-center justify-start gap-3 cursor-pointer ${className}`}
      onClick={handleDropdownRowClick}
    >
      {image}
      {title}
    </div>
  );
};

export default DropdownRow;
