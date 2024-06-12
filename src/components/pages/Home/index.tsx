import FlashSale from "../../FlashSales";
import NewArrivals from "../../NewArrivals";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FlashSale />
      <TopRatedProducts />
      <NewArrivals />
    </main>
  );
};

export default Home;
