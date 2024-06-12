import React from "react";

type categoryItemProps = {
  children: React.ReactNode;
  text: string;
};

const CategoryItem: React.FC<categoryItemProps> = ({ children, text }) => {
  return (
    <div
      className="w-[31%] sm:w-[15%] flex flex-col justify-center items-center border rounded border-gray-200 hover:text-white-900 hover:bg-red-500 cursor-pointer 
        p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 duration-500"
    >
      {children}
      <p className="text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default CategoryItem;
