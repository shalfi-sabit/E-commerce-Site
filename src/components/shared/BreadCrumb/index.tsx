import React from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../../UI/Wrapper";
import BreadcrumbItem from "./BreadCrumbItem";

const BreadCrumb: React.FC = () => {
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
    location.pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .forEach((crumb, index) => {
        currentLink += `/${crumb}`;
        crumbs.push(
          <BreadcrumbItem
            key={index}
            link={currentLink}
            crumb={crumb}
            isLast={index === crumbs.length - 1}
          />
        );
      });
  }

  return (
    <Wrapper>
      <div
        className="max-w-7xl mx-auto my-4 
        md:my-8 lg:my-12 flex flex-wrap 
        text-xs md:text-sm font-medium text-gray-500"
      >
        {crumbs}
      </div>
    </Wrapper>
  );
};

export default BreadCrumb;
