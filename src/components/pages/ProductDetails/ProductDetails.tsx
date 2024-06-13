import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";
import ProductDescription from "./ProductDescription";
import ChooseColors from "./ChooseColors";
import ChooseSize from "./ChooseSize";
import BuyNowCTA from "./BuyNowCTA";
import DeliveryCard from "./DeliveryCard";
import { snackbarActions } from "../../../redux-store/slices/snackbarSlice";
import { wishlistActions } from "../../../redux-store/slices/wishlistSlice";
import { cartActions } from "../../../redux-store/slices/cartSlice";

const ProductDetails: React.FC<{ id: number }> = ({ id }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const curProduct = products.filter((product) => product.id === id)[0];
  const currentCartProduct = cartItems.filter((item) => item.id === id)[0];
  const [buyNowQuantity, setBuyNowQuantity] = useState(1);
  const quantity = currentCartProduct?.quantity;

  const addToWishlistHandler = (id: number) => {
    if (id > 0 && id <= products.length) {
      dispatch(wishlistActions.handleProductAdd(curProduct));
      dispatch(
        snackbarActions.handleSnackbarOpen({
          severity: "success",
          message: "Product added to wishlist",
        })
      );
    }
  };

  const addItemHandler = () => {
    if (id > 0 && id <= products.length) {
      dispatch(
        cartActions.handleProductAdd({
          product: curProduct,
          quantity: buyNowQuantity,
        })
      );
      dispatch(
        snackbarActions.handleSnackbarOpen({
          severity: "success",
          message: "Product added to cart",
        })
      );
    }
  };

  return (
    <>
      {curProduct ? (
        <>
          <div className="w-full h-full lg:w-[35%] flex flex-col justify-between gap-3 sm:gap-4">
            <ProductDescription product={curProduct} />
            <div className="w-full h-[2px] bg-slate-300"></div>
            <ChooseColors />
            <ChooseSize />
            <BuyNowCTA
              quantity={quantity}
              addToWishlistOnClick={() => addToWishlistHandler(id)}
              addToCartOnClick={addItemHandler}
              buyNowQuantity={buyNowQuantity}
              setBuyNowQuantity={setBuyNowQuantity}
            />
            <DeliveryCard />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetails;
