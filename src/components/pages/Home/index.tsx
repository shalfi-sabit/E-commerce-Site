import FlashSale from "../../FlashSales";
import NewArrivals from "../../NewArrivals";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";
import CustomerBenefits from "../../shared/CustomerBenefits";
import SpecialOffer from "../../SpecialOffer";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FlashSale />
      <TopRatedProducts />
      <SpecialOffer />
      <NewArrivals />
      <CustomerBenefits />
    </main>
  );
};

export default Home;
