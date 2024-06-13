import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type searchResultsRowProps = {
  id: number;
  image: string;
  title: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  category: string;
};

const DropdownRow: React.FC<searchResultsRowProps> = ({
  id,
  image,
  title,
  className,
  category,
}) => {
  const navigate = useNavigate();
  const currentCategory = category[0].toUpperCase() + category.slice(1);

  return (
    <div
      className={`w-full text-nowrap flex items-center justify-start gap-3 cursor-pointer shadow hover:bg-slate-100 duration-300 p-2 ${className}`}
      onClick={() => navigate(`/product/${id}`)}
    >
      <img
        src={image}
        alt="search result item"
        className="w-[10%] md:w-[12%] lg:w-[15%]"
      />
      <div>
        <p className="font-semibold ">{title}</p>
        <p className="text-[10px]"> {currentCategory}</p>
      </div>
    </div>
  );
};

export default DropdownRow;
