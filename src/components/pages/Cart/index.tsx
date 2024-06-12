import React, { useState } from "react";
import Wrapper from "../../UI/Wrapper";
import cartItems from "../../../data/dummyCartItems";
import OutlinedButton from "../../UI/Button/OutlinedButton";
import BillingSummary from "./BillingSummary";
import CartItemsTable from "./CartItemsTable";

export interface CartItem {
  title: string;
  price: number;
  count: number;
  imageSource: string;
}

const Cart: React.FC = () => {
  const [quantities, setQuantities] = useState<number[]>(
    cartItems.map((item) => item.count)
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
