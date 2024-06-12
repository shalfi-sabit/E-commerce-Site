import FlashSale from "../../FlashSales";
import NewArrivals from "../../NewArrivals";
import TopRatedProducts from "../../TopRatedProducts";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <FlashSale />
      <TopRatedProducts />
      <NewArrivals />
    </main>
  );
};

export default Home;
