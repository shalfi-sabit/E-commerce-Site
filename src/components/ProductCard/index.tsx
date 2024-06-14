/* eslint-disable react-hooks/rules-of-hooks */

import React, { Suspense } from "react";

import { useMouseOver } from "../../hooks/useMouseOver";
import productCardProps from "../../models/productCardProps";

import { Rating } from "@mui/material";
import SeeDetailsIcon from "../../assets/icons/SeeDetailsIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import CartIconWhite from "../../assets/icons/CartIconWhite";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux-store/slices/cartSlice";
import { snackbarActions } from "../../redux-store/slices/snackbarSlice";
import { wishlistActions } from "../../redux-store/slices/wishlistSlice";
import AddToWishlistIconContainer from "../UI/AddToWishlistIconContainer";
import { Await, useNavigate, useRouteLoaderData } from "react-router-dom";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";

const index: React.FC<productCardProps> = ({
  id,
  imageSource,
  className,
  productName,
  price,
  prevPrice,
  rating,
  count,
  showDeleteIcon,
  showAddToWishlistIcon,
  showSeeDetailsIcon,
  discount,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useRouteLoaderData("root") as any;
  const { isHovered, handleMouseOver, handleMouseOut } = useMouseOver();
  const routeLoaderData = useRouteLoaderData("root") as any;

  const addItemHandler = () => {
    const curProduct = {
      id,
      title: productName,
      price,
      description: products[id - 1]?.description || "",
      category: products[id - 1]?.category || "",
      image: imageSource,
      rating: {
        rate: rating,
        count: count,
      },
    };
    dispatch(
      cartActions.handleProductAdd({ product: curProduct, quantity: 1 })
    );
    dispatch(
      snackbarActions.handleSnackbarOpen({
        severity: "success",
        message: "Product added to cart",
      })
    );
  };

  const addToWishlistHandler = (id: number) => {
    const curProduct = {
      id,
      title: productName,
      price,
      description: products[id - 1]?.description || "",
      category: products[id - 1]?.category,
      image: imageSource,
      rating: {
        rate: rating,
        count: count,
      },
    };
    dispatch(wishlistActions.handleProductAdd(curProduct));
    dispatch(
      snackbarActions.handleSnackbarOpen({
        severity: "success",
        message: "Product added to wishlist",
      })
    );
  };

  const removeFromWishlistHandler = (id: number) => {
    dispatch(wishlistActions.handleProductRemove({ id: id }));
    dispatch(
      snackbarActions.handleSnackbarOpen({
        severity: "success",
        message: "Product remove from wishlist",
      })
    );
  };

  return (
    <Await resolve={products}>
      <div
        className={`flex justify-center flex-col rounded sm:gap-1 text-[12px] sm:text-sm md:text-[16px] transition-all duration-1000 shadow px-1 py-3 relative ${className}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Suspense fallback={<ProductCardSkeleton />}>
          <Await resolve={routeLoaderData.products}>
            <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 flex justify-center items-center mb-2 sm:mb-3 relative rounded overflow-hidden">
              <div className="w-24 sm:w-28 md:w-32 ">
                <img src={imageSource} alt="product card" />
              </div>

              {isHovered && (
                <div
                  className="flex items-center justify-center gap-1 md:gap-2 bg-black-900 text-white-900 absolute bottom-0 py-1 w-full text-center text-[10px] md:text-[12px] cursor-pointer"
                  onClick={addItemHandler}
                >
                  <CartIconWhite />
                  <p>Add To Cart</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1 px-2">
              <p className="font-semibold">{productName}</p>
              <p className="font-semibold flex items-end gap-1 sm:gap-2 md:gap-3">
                <span className="text-red-900">${price}</span>
                {prevPrice && (
                  <span className="text-gray-900 line-through">
                    ${prevPrice}
                  </span>
                )}
              </p>

              <div className="flex items-end gap-1 sm:gap-2 md:gap-3">
                <Rating
                  name="rating-component"
                  defaultValue={rating}
                  precision={0.1}
                  readOnly
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1.3rem",
                      md: "1.5rem",
                    },
                  }}
                />
                <span className="text-gray-900 font-semibold text-[10px] md:text-sm">
                  ({count})
                </span>
              </div>
            </div>

            {discount && (
              <p className="absolute left-2 top-2 md:top-3 md:left-3 bg-red-900 text-white-900 text-[8px] md:text-[10px] lg:text-[12px] rounded px-2 lg:px-3 lg:py-[2px]">
                -{discount}%
              </p>
            )}

            <div className="absolute flex flex-col gap-1 md:gap-2 top-2 right-2 md:top-3 md:right-3 ">
              {showDeleteIcon && (
                <span
                  title="Delete"
                  onClick={() => removeFromWishlistHandler(id)}
                >
                  <DeleteIcon />
                </span>
              )}

              {showAddToWishlistIcon && (
                <AddToWishlistIconContainer
                  onClick={() => addToWishlistHandler(id)}
                />
              )}

              {showSeeDetailsIcon && (
                <span
                  title="See details"
                  onClick={() => navigate(`/product/${id}`)}
                >
                  <SeeDetailsIcon />
                </span>
              )}
            </div>
          </Await>
        </Suspense>
      </div>
    </Await>
  );
};

export default index;
