import React, { Suspense } from "react";
import OutlinedButton from "../../UI/Button/OutlinedButton";
import ProductCard from "../../ProductCard";
import { Await, useNavigate, useRouteLoaderData } from "react-router-dom";
import ProductListSkeleton from "../../Skeleton/ProductsListSkeleton";
import Wrapper from "../../UI/Wrapper";

const FEATURED_INDEX = [2, 8, 14, 20];

const JustForYou = () => {
  const navigate = useNavigate();
  const { products } = useRouteLoaderData("root") as any;

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <Await resolve={products}>
        {(products) => (
          <Wrapper>
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
                <OutlinedButton
                  text="See All"
                  onClick={() => navigate("/products")}
                />
              </div>

              <div className="flex items-stretch lg:justify-around flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
                {products
                  .filter((product: any) => FEATURED_INDEX.includes(product.id))
                  .map((item: any) => (
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
          </Wrapper>
        )}
      </Await>
    </Suspense>
  );
};

export default JustForYou;
