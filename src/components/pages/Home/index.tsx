import FlashSale from "../../FlashSales";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FlashSale />
      <TopRatedProducts />
    </main>
  );
};

export default Home;
