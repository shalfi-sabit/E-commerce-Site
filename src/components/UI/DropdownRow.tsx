import React, { MouseEvent } from "react";

type dropdownRowProps = {
  image: React.ReactNode;
  title: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

const DropdownRow: React.FC<dropdownRowProps> = ({
  image,
  title,
  className,
  onClick,
}) => {
  return (
    <div
      className={`w-full font-light text-nowrap flex items-center justify-start gap-3 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {image}
      {title}
    </div>
  );
};

export default DropdownRow;
