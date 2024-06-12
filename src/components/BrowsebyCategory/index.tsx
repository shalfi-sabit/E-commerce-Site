import Wrapper from "../UI/Wrapper";
import { CiMobile4 } from "react-icons/ci";
import { RiComputerLine, RiHeadphoneLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { TbDeviceGamepad } from "react-icons/tb";
import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import CategoryItem from "./CategoryItem";

const index = () => {
  return (
    <section className="mt-8 sm:mt-10 md:mt-16 lg:mt-20 flex flex-col gap-3 sm:gap-5 mb-5 sm:mb-7">
      <SectionHeader sectionHeader="Categories" />
      <SectionTitle text="Browse by Category" />

      <Wrapper className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2 xs:gap-3 sm:gap-0">
        <CategoryItem text="Phones">
          <CiMobile4 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4" />
        </CategoryItem>

        <CategoryItem text="Computers">
          <RiComputerLine className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4" />
        </CategoryItem>

        <CategoryItem text="Camera">
          <IoCameraOutline className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4" />
        </CategoryItem>

        <CategoryItem text="Smartwatch">
          <BsSmartwatch className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4" />
        </CategoryItem>

        <CategoryItem text="Headphones">
          <RiHeadphoneLine className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4" />
        </CategoryItem>

        <CategoryItem text="Gaming">
          <TbDeviceGamepad className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4" />
        </CategoryItem>
      </Wrapper>
    </section>
  );
};

export default index;
