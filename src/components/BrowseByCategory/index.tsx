import React from "react";
import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import PhoneCategoryIcon from "../../assets/icons/PhoneCategoryIcon";

const index = () => {
  return (
    <section className="m-8 sm:m-10 md:m-16 lg:m-20 flex flex-col gap-3 sm:gap-5 mb-5 sm:mb-7">
      <SectionHeader sectionHeader="Categories" />
      <SectionTitle text="Browse By Category" />
      <div>
        <PhoneCategoryIcon />
      </div>
    </section>
  );
};

export default index;
