import React, { useState } from "react";
import Wrapper from "../../UI/Wrapper";
import BillingSummary from "./BillingSummary";
import CartItemsTable from "./CartItemsTable";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";
import EmptyCart from "../../EmptyListContainer";

export interface CartItem {
  title: string;
  price: number;
  count: number;
  imageSource: string;
}

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [quantities, setQuantities] = useState<number[]>(
    cartItems.map((item) => item.quantity)
  );

  const handleQuantityChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const newQuantities = [...quantities];
    newQuantities[index] = value === "" ? 0 : parseInt(value, 10);
    setQuantities(newQuantities);
  };

  if (cartItems.length === 0) {
    return (
      <EmptyCart
        title="Your cart is empty!"
        subTitle="You've no items in your shopping cart."
        secondarySubTitle="Let's go buy something"
      />
    );
  }

  return (
    <Wrapper>
      <CartItemsTable
        onHandleQuantityChange={handleQuantityChange}
        cartItems={cartItems}
      />
      <BillingSummary />
    </Wrapper>
  );
};

export default Cart;
