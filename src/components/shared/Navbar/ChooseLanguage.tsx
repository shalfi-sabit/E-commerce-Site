import React from "react";
import { NavLink } from "react-router-dom";

import Wrapper from "../../UI/Wrapper";

const ChooseLanguage: React.FC = () => {
  return (
    <div className="bg-black-900 py-3 text-lg">
      <Wrapper className="flex justify-between items-center text-[10px] sm:text-[12px] md:text-[13px] gap-1 sm:gap-3 leading-3">
        <p className=" text-white-900 font-light w-full text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <NavLink
            to="/"
            className="underline underline-offset-2 font-medium ml-3"
          >
            ShopNow
          </NavLink>
        </p>

        <select
          name="languages"
          id="languages"
          className="text-white-900 bg-black-900"
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="korean">Korean</option>
          <option value="italian">Italian</option>
          <option value="russian">Russian</option>
          <option value="arabic">Arabic</option>
          <option value="dutch">Dutch</option>
          <option value="turkish">Turkish</option>
          <option value="hindi">Hindi</option>
          <option value="bengali">Bengali</option>
          <option value="swedish">Swedish</option>
          <option value="danish">Danish</option>
          <option value="finnish">Finnish</option>
        </select>
      </Wrapper>
    </div>
  );
};

export default ChooseLanguage;
