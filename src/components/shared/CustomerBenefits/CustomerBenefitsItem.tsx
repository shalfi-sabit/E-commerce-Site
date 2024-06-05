import React from "react";

interface IconWithTextProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CustomerBenefitsItem: React.FC<IconWithTextProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={`flex flex-col items-center gap-3 md:gap-5`}>
      {icon}
      <div className="flex flex-col items-center gap-1 md:gap-2 md:leading-3">
        <p className="font-bold text-sm md:text-lg  lg:text-xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CustomerBenefitsItem;
