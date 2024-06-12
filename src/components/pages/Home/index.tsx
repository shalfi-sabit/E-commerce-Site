import FlashSale from "../../FlashSales";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";
import OurProducts from "../../OurProducts";
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FlashSale />
      <TopRatedProducts />
      <OurProducts />
    </main>
  );
};

export default Home;
