import FlashSale from "../../FlashSales";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";
import OurProducts from "../../OurProducts";
import BrowseByCategory from "../../BrowsebyCategory";
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
