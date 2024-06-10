import React from "react";
import getUserFullName from "../../utils/getUserFullName";
import Wrapper from "./Wrapper";

const AlreadyLoggedInMessage = () => {
  const userFullName = getUserFullName();

  return (
    <div className="py-[80px] sm:py-[100px] md:py-[150px] lg:py-[200px] flex justify-center items-center  text-center text-green-700 bg-green-100 rounded-lg text-base sm:text-lg lg:text-xl ">
      <Wrapper>
        <div className="flex flex-col gap-1 md:gap-2">
          <strong>
            Welcome back, <span className="text-red-900">{userFullName}!</span>
          </strong>
          <p>
            You are already logged in. Feel free to continue browsing our site.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default AlreadyLoggedInMessage;
