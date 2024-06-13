import React from "react";
import aboutImage from "../../../assets/images/aboutImage.png";
import Wrapper from "../../UI/Wrapper";
import CustomerBenefits from "../../shared/CustomerBenefits";
import Founders from "./Founders";
import PageStats from "./PageStats";
import BreadCrumb from "../../shared/BreadCrumb";

const About = () => {
  return (
    <>
      <BreadCrumb />
      <Wrapper className="flex flex-col gap-10 md:gap-16 lg:gap-24 mb-[5%]">
        <div className="flex flex-col-reverse md:flex-row justify-between md:gap-6 items-center">
          <div className="flex-1 justify-center w-[85%] md:w-[60%] lg:p-20 lg:pl-0 text-start">
            <h1 className="text-[35px] xs:text-[40px] sm:text-[44px] md:text-[40px]  lg:text-[50px] font-semibold mb-4 sm:mb-6 lg:mb-9">
              Our Story
            </h1>
            <div className="flex flex-col gap-3  lg:gap-6  text-wrap text-[10px] xs:text-[12px] md:text-[12px] lg:text-[14px]">
              <p>
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and
                service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 million customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast pace. Exclusive offers a diverse assortment in
                categories ranging from consumer goods.
              </p>
            </div>
          </div>

          <img
            src={aboutImage}
            className="flex-1 object-cover rounded-md w-60 xs:w-96 my-10"
            alt="about placeholder"
          />
        </div>

        <PageStats />
        <Founders />
        <CustomerBenefits />
      </Wrapper>
    </>
  );
};

export default About;
