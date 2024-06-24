import React from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../../UI/Wrapper";
import BreadcrumbItem from "./BreadCrumbItem";

type breadCrumbProps = {
  children?: React.ReactNode;
};

const BreadCrumb: React.FC<breadCrumbProps> = ({ children }) => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = [
    <BreadcrumbItem
      key="home"
      link="/"
      crumb="Home"
      isLast={location.pathname === "/"}
    />,
  ];

  if (location.pathname !== "/") {
    const pathCrumbs = location.pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb, index, array) => {
        currentLink += `/${crumb}`;
        return (
          <BreadcrumbItem
            key={index}
            link={currentLink}
            crumb={crumb}
            isLast={index === array.length - 1}
          />
        );
      });
    crumbs.push(...pathCrumbs);
  }

  return (
    <Wrapper
      className={`${children && "flex justify-between items-center gap-3"}`}
    >
      <div>
        <div
          className="max-w-7xl mx-auto my-4 
        md:my-8 lg:my-12 flex flex-wrap 
        text-xs md:text-sm font-medium text-gray-500"
        >
          {crumbs}
        </div>
      </div>
      {children}
    </Wrapper>
  );
};

export default BreadCrumb;
