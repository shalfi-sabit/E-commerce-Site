import React, { Suspense } from "react";
import OutlinedButton from "../../UI/Button/OutlinedButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";
import ProductCard from "../../ProductCard";
import { Await, useRouteLoaderData } from "react-router-dom";
import product from "../../../models/product";
const FEATURED_INDEX = [2, 8, 14, 20];

const JustForYou = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const featuredItems: product[] = [];
  if (products) {
    products?.filter((product) => FEATURED_INDEX.includes(product.id));
  }

  const routerLoaderData = useRouteLoaderData("root") as any;
  return (
    <Suspense fallback={<p>Loading Just for you...</p>}>
      <Await resolve={routerLoaderData.products}>
        <section>
          <div className="mt-20 mb-5 flex items-center justify-between">
            <div className="flex">
              <span
                className={`bg-red-900 rounded mr-2 sm:mr-4 py-[5px] sm:py-[7px] px-[7px] sm:px-[9px]`}
              />
              <h1 className="text-[14px] sm:text-[16px] md:text-[20px]">
                Just for you
              </h1>
            </div>
            <OutlinedButton text="See All" />
          </div>

          <div className="flex items-stretch lg:justify-around flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
            {featuredItems.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                imageSource={item.image}
                productName={item.title}
                price={item.price}
                prevPrice={1160}
                rating={item.rating.rate}
                count={item.rating.count}
                discount={40}
                showSeeDetailsIcon
                className="w-[48%] sm:w-[31%] lg:w-[23%]"
              />
            ))}
          </div>
        </section>
      </Await>
    </Suspense>
  );
};

export default JustForYou;
