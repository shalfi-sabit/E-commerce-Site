/* eslint-disable react-hooks/rules-of-hooks */

import { Suspense } from "react";
import { Await, useNavigate, useRouteLoaderData } from "react-router-dom";
import ProductListSkeleton from "../Skeleton/ProductsListSkeleton";
import product from "../../models/product";
import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import FillButton from "../UI/Button/FillButton";
import ProductCard from "../ProductCard/index";
import Wrapper from "../UI/Wrapper";

const ProductSection = ({ products }: { products: product[] }) => {
  const navigate = useNavigate();
  const topRatedProducts = products.slice(0, 4);

  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex flex-col gap-3 sm:gap-5 mb-5 sm:mb-7">
      <SectionHeader sectionHeader="This Month" />
      <SectionTitle text="Top Rated Products">
        <FillButton
          onClick={() => {
            navigate("/products");
          }}
          text="View All"
        />
      </SectionTitle>

      <Wrapper className="pb-5 sm:pb-7 md:pb-9">
        <div className="flex items-stretch flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
          {topRatedProducts.map((item: product) => (
            <ProductCard
              key={item?.id}
              id={item?.id}
              imageSource={item?.image}
              productName={item?.title}
              price={item?.price}
              prevPrice={300}
              rating={item?.rating.rate}
              count={item?.rating.count}
              showAddToWishlistIcon
              showSeeDetailsIcon
              className="w-[48%] sm:w-[31%] lg:w-[23%]"
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

const Index = () => {
  const { products } = useRouteLoaderData("root") as any;

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <Await resolve={products}>
        {(products) => {
          return <ProductSection products={products} />;
        }}
      </Await>
    </Suspense>
  );
};

export default Index;
