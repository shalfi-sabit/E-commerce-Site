import React from "react";
import { NavLink } from "react-router-dom";

interface BreadcrumbItemProps {
  link: string;
  crumb: string;
  isLast: boolean;
}

const transformCrumb = (crumb: string) => {
  return crumb
    .split("-") // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join them back with spaces
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  link,
  crumb,
  isLast,
}) => {
  const transformedCrumb = transformCrumb(crumb);

  return (
    <div className="flex items-center">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "text-black-900" : "text-gray-500"
        }
      >
        {transformedCrumb}
      </NavLink>
      {!isLast && <span className="mx-2 text-gray-500">/</span>}
    </div>
  );
};

export default BreadcrumbItem;
