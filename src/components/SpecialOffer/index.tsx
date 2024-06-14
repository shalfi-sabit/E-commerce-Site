import React, { Suspense } from "react";
import offerImage from "../../assets/images/jacketblack.png";
import Wrapper from "../UI/Wrapper";
import { Await, useNavigate, useRouteLoaderData } from "react-router-dom";
import Timer from "./Timer";
import CarouselSkeleton from "../Skeleton/CarouselSkeleton";

const SpecialOffer = () => {
  const navigate = useNavigate();
  const { products } = useRouteLoaderData("root") as any;

  return (
    <Suspense
      fallback={
        <Wrapper>
          <CarouselSkeleton />
        </Wrapper>
      }
    >
      <Await resolve={products}>
        <Wrapper>
          <div className="relative pb-4 mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-5 sm:mb-7">
            <img src={offerImage} alt="special offer" />
            <div className="absolute top-[50%] translate-y-[-50%] left-[6%] w-[45%] text-wrap flex flex-col gap-2 xs:gap-4 sm:gap-5 md:gap-6">
              <h2 className="text-[#00FF66] font-semibold text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                Categories
              </h2>
              <h1 className="text-[8px] xs:text-[14px] sm:text-[18px] md:text-[22px]  lg:text-[32px]  font-semibold text-white-900 leading-tight sm:leading-5 md:leading-6 lg:leading-8">
                Experience the Perfect Blend of Style and Comfort
              </h1>
              <Timer />
              <button
                onClick={() => navigate("/product/16")}
                className="bg-[#00FF66] font-medium w-fit text-white-900 text-[8px] xs:text-[12px] sm:text-[14px] rounded-sm px-3 py-1 sm:px-4 sm:py-2 md:px-7 md:py-3 lg:px-10 lg:py-3  hover:text-black-900 duration-500"
              >
                Buy Now!
              </button>
            </div>
          </div>
        </Wrapper>
      </Await>
    </Suspense>
  );
};

export default SpecialOffer;
