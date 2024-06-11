import React from "react";
import { useNavigate } from "react-router-dom";
import cartItems from "../../../data/dummyCartItems";
import truncateTitle from "../../../utils/truncateTitle";
import RemoveButtonContainer from "../../UI/RemoveButtonContainer";
import { CartItem } from "./index";
import OutlinedButton from "../../UI/Button/OutlinedButton";

interface cartItemsTableProps {
  quantities: number[];
  onHandleQuantityChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const CartItemsTable: React.FC<cartItemsTableProps> = ({
  quantities,
  onHandleQuantityChange,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full">
      <table className="table-fixed w-full text-xs sm:text-[14px] md:text-[16px] leading-1 border-separate border-spacing-y-10">
        <thead className="text-left shadow-md">
          <tr>
            <th className="py-4 pl-5 font-semibold">Product</th>
            <th className="p-4 text-center font-semibold">Price</th>
            <th className="p-4 text-center font-semibold">Quantity</th>
            <th className="py-2 pr-5 text-right font-semibold">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: CartItem, index: number) => {
            return (
              <tr key={index} className="shadow-md">
                <td className="p-4 flex items-center cursor-pointer relative">
                  <div className="relative inline-block">
                    <img
                      src={item.imageSource}
                      alt="pp"
                      className="hidden md:block w-12 mr-20 lg:mr-4"
                    />
                  </div>
                  <RemoveButtonContainer />
                  {truncateTitle(item.title, 20)}
                </td>
                <td className="p-4 text-center">{item.price}</td>
                <td className="p-4 text-center py-2 px-4">
                  <input
                    type="number"
                    value={quantities[index] === 0 ? "" : quantities[index]}
                    onChange={(event) => onHandleQuantityChange(index, event)}
                    min={0}
                    className="border-2 py-1 rounded-md text-center w-10 sm:w-12 md:w-14 lg:w-16"
                  />
                </td>
                <td className="py-4 pr-8 text-right">
                  {(quantities[index] * item.price).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between">
        <OutlinedButton
          text="Return To Shop"
          onClick={() => navigate("/")}
        ></OutlinedButton>
        <OutlinedButton text="Update Cart"></OutlinedButton>
      </div>
    </div>
  );
};

export default CartItemsTable;
