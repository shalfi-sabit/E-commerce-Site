import React from "react";
import { NavLink } from "react-router-dom";

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
  return (
    <NavLink
      to={to}
      className={`w-full font-light text-nowrap flex items-center justify-start gap-3 ${className}`}
    >
      {image}
      {title}
    </NavLink>
  );
};

export default DropdownRow;
