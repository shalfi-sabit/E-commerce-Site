import Carousel from "../Carousel";
import Wrapper from "../UI/Wrapper";
import SideMenu from "./SideMenu";

const HeroSection = () => {
  return (
    <Wrapper className="flex flex-col-reverse md:flex-row justify-between">
      <SideMenu />
      <div className="w-full md:w-[75%] pt-4 sm:pt-6 md:pt-8 lg:pt-10">
        <Carousel />
      </div>
    </Wrapper>
  );
};

export default HeroSection;
