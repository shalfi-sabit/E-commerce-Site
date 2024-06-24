/* eslint-disable react-hooks/rules-of-hooks */
import { Outlet } from "react-router-dom";

import BreadCrumb from "../../shared/BreadCrumb";
import getUserFullName from "../../../utils/getUserFullName";
import AccountSidebar from "./AccountSidebar";
import MobileAccountSidebar from "./MobileAccountSidebar";
import Wrapper from "../../UI/Wrapper";
import MenuIcon from "../../../assets/icons/menu.png";
import useMobileSidebar from "../../../hooks/useMobileSidebar";

const index = () => {
  const userFullName = getUserFullName();

  const {
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    handleBackdropClick,
    handleMobileSidebarClick,
  } = useMobileSidebar();

  return (
    <>
      <BreadCrumb>
        <p className="text-xs md:text-sm font-medium ">
          Welcome! <span className="text-red-900">{userFullName}</span>
        </p>
      </BreadCrumb>

      <Wrapper className="flex justify-between gap-2 sm:gap-4 lg:gap-10 mb-5 md:mb-8 lg:mb-10">
        <div className="lg:hidden shadow-md p-1 sm:p-2 rounded">
          <img
            src={MenuIcon}
            alt="menu icon"
            className="w-7 h-7"
            onClick={() => setIsMobileSidebarOpen(true)}
          />
        </div>

        <AccountSidebar />

        <div className="px-8 sm:px-10  md:px-16 py-3 md:py-6 shadow-md rounded w-[100%] lg:w-[80%]">
          <Outlet></Outlet>
        </div>
      </Wrapper>

      {isMobileSidebarOpen && (
        <MobileAccountSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          handleBackdropClick={handleBackdropClick}
          handleMobileSidebarClick={handleMobileSidebarClick}
        />
      )}
    </>
  );
};

export default index;
