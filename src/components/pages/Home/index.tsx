import FlashSale from "../../FlashSales";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";
import BrowseByCategory from "../../BrowseByCategory/index";
import OurProducts from "../../OurProducts";
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FlashSale />
      <BrowseByCategory />
      <TopRatedProducts />
      <OurProducts />
    </main>
  );
};

export default Home;
