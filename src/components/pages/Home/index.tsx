import FlashSale from "../../FlashSales";
import TopRatedProducts from "../../TopRatedProducts";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <FlashSale />
      <TopRatedProducts />
    </main>
  );
};

export default Home;
