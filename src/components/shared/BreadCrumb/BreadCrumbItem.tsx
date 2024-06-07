import React from "react";
import { NavLink } from "react-router-dom";

interface BreadcrumbItemProps {
  link: string;
  crumb: string;
  isLast: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  link,
  crumb,
  isLast,
}) => {
  return (
    <div className="flex items-center">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "text-black-900" : "text-gray-500"
        }
      >
        {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
      </NavLink>
      {!isLast && <span className="mx-2 text-gray-500">/</span>}
    </div>
  );
};

export default BreadcrumbItem;
