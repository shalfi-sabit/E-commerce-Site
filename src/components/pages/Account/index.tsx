import React from "react";
import BreadCrumb from "../../shared/BreadCrumb";
import getUserFullName from "../../../utils/getUserFullName";

const index = () => {
  const userFullName = getUserFullName();

  return (
    <>
      <BreadCrumb>
        <p className="text-xs md:text-sm font-medium ">
          Welcome! <span className="text-red-900">{userFullName}</span>
        </p>
      </BreadCrumb>
    </>
  );
};

export default index;
