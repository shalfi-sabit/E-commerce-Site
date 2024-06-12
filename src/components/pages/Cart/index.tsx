import React, { useState } from "react";
import Wrapper from "../../UI/Wrapper";
import BillingSummary from "./BillingSummary";
import CartItemsTable from "./CartItemsTable";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";

export interface CartItem {
  title: string;
  price: number;
  count: number;
  imageSource: string;
}

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [quantities, setQuantities] = useState<number[]>(
    cartItems.map((item) => item.rating.count)
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

  return (
    <Wrapper>
      <CartItemsTable
        quantities={quantities}
        onHandleQuantityChange={handleQuantityChange}
      />
      <BillingSummary />
    </Wrapper>
  );
};

export default Cart;
