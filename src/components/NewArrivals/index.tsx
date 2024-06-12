import React from "react";
import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import Wrapper from "../UI/Wrapper";
import newArrivalImageOne from "../../assets/images/newArrivals/squareBracelet.png";
import newArrivalImageTwo from "../../assets/images/newArrivals/squareRing.png";
import newArrivalImageThree from "../../assets/images/newArrivals/rectanglePurple.png";
import newArrivalImageFour from "../../assets/images/newArrivals/squareDiamond.png";
import { NavLink } from "react-router-dom";

const NewArrivals = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <SectionHeader sectionHeader="Featured" />
        <SectionTitle text="New Arrival" />
      </div>
      <Wrapper className="flex justify-between ">
        <div className="w-[49%] relative">
          <img src={newArrivalImageFour} alt="" className="w-full" />

          <div className="absolute bottom-0 left-0 w-[80%] pl-2 pb-2 xs:p-4 sm:p-6 lg:p-8 text-white-900 flex flex-col xs:gap-1 lg:gap-3">
            <h2 className="font-medium xs:font-semibold text-[8px] xs:text-[11px] sm:text-sm lg:text-[22px] lg:text-nowrap">
              White Gold Plated Princess
            </h2>
            <p className="text-[6px] xs:text-[8px] sm:text-[10px]  md:text-[12px] lg:text-[16px] ">
              Classic Created Wedding Engagement Solitaire Diamond Promise Ring
              for Her.
            </p>
            <NavLink
              to={"/product/7"}
              className="underline xs:underline-offset-4  lg:underline-offset-8 font-medium xs:font-medium text-[8px] xs:text-[8px] sm:text-[12px] lg:text-base"
            >
              Shop Now
            </NavLink>
          </div>
        </div>

        <div className="w-[48%] flex flex-col justify-between ">
          <div className="w-full relative">
            <img src={newArrivalImageThree} alt="" className="w-full" />
            <div className="absolute bottom-0 left-0 w-[80%] pl-2 pb-2 xs:p-4 sm:p-6 lg:p-8 text-white-900 flex flex-col xs:gap-1 lg:gap-3">
              <h2 className="font-medium xs:font-semibold text-[8px] xs:text-[11px] sm:text-sm lg:text-[22px] lg:text-nowrap">
                Women's Collection
              </h2>
              <p className="text-[6px] xs:text-[8px] sm:text-[10px]  md:text-[12px] lg:text-[16px] ">
                Featured women's collection that give you another vibe.
              </p>
              <NavLink
                to={"/product/15"}
                className="underline xs:underline-offset-4  lg:underline-offset-8 font-medium xs:font-medium text-[8px] xs:text-[8px] sm:text-[12px] lg:text-base"
              >
                Shop Now
              </NavLink>
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="w-[48%] relative">
              <img src={newArrivalImageOne} alt="" className="w-full" />
              <div className="absolute bottom-0 left-0 w-[80%] pl-2 pb-2 xs:p-4 sm:p-6 lg:p-8 text-white-900 flex flex-col xs:gap-1 lg:gap-3">
                <NavLink
                  to={"/product/5"}
                  className="underline xs:underline-offset-4  lg:underline-offset-8 font-medium xs:font-medium text-[8px] xs:text-[8px] sm:text-[12px] lg:text-base"
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
            <div className="w-[48%] relative">
              <img src={newArrivalImageTwo} alt="" className="w-full" />
              <div className="absolute bottom-0 left-0 w-[80%] pl-2 pb-2 xs:p-4 sm:p-6 lg:p-8 text-white-900 flex flex-col xs:gap-1 lg:gap-3">
                <NavLink
                  to={"/product/6"}
                  className="underline xs:underline-offset-4  lg:underline-offset-8 font-medium xs:font-medium text-[8px] xs:text-[8px] sm:text-[12px] lg:text-base"
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewArrivals;
