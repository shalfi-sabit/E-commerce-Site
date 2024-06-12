import FlashSale from "../../FlashSales";
import BrowseByCategory from "../../BrowseByCategory";
import TopRatedProducts from "../../TopRatedProducts";
import OurProducts from "../../OurProducts";
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <FlashSale />
      <BrowseByCategory />
      <TopRatedProducts />
      <OurProducts />
    </main>
  );
};

export default Home;
