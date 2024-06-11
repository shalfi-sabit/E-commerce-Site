import FlashSale from "../../FlashSales";
import TopRatedProducts from "../../TopRatedProducts";
import OurProducts from "../../OurProducts";
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <FlashSale />
      <TopRatedProducts />
      <OurProducts />
    </main>
  );
};

export default Home;
