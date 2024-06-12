import FlashSale from "../../FlashSales";
import NewArrivals from "../../NewArrivals";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";
import CustomerBenefits from "../../shared/CustomerBenefits";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FlashSale />
      <TopRatedProducts />
      <NewArrivals />
      <CustomerBenefits />
    </main>
  );
};

export default Home;
