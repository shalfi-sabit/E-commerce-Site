import React from "react";
import BreadCrumb from "../../shared/BreadCrumb";
import getUserFullName from "../../../utils/getUserFullName";
import AccountSidebar from "./AccountSidebar";
import Wrapper from "../../UI/Wrapper";
import { Outlet } from "react-router-dom";

const index = () => {
  const userFullName = getUserFullName();

  return (
    <>
      <BreadCrumb>
        <p className="text-xs md:text-sm font-medium ">
          Welcome! <span className="text-red-900">{userFullName}</span>
        </p>
      </BreadCrumb>
      <Wrapper className="flex">
        <AccountSidebar />
        <Outlet></Outlet>
      </Wrapper>
    </>
  );
};

export default index;
