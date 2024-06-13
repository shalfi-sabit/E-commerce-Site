import CartProduct from "./cartProduct";

interface cartItemsTableProps {
  onHandleQuantityChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  cartItems: CartProduct[];
}

export default cartItemsTableProps;
