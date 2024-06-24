import React, { useState, ChangeEvent } from "react";
import { Await, useNavigate, useRouteLoaderData } from "react-router-dom";
import truncateTitle from "../../../utils/truncateTitle";
import RemoveButtonContainer from "../../UI/RemoveButtonContainer";
import OutlinedButton from "../../UI/Button/OutlinedButton";
import CartProduct from "../../../models/cartProduct";
import cartItemsTableProps from "../../../models/cartItemTableProps";
import { useDispatch } from "react-redux";
import { snackbarActions } from "../../../redux-store/slices/snackbarSlice";
import { cartActions } from "../../../redux-store/slices/cartSlice";

import UpArrowIcon from "../../../assets/images/up-arrow.png";
import DownArrowIcon from "../../../assets/images/down-arrow.png";
import "./index.css";

const CartItemsTable: React.FC<cartItemsTableProps> = ({
  onHandleQuantityChange,
  cartItems,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [removing, setRemoving] = useState<number | null>(null);
  const { products } = useRouteLoaderData("root") as any;

  const handleQuantityOnChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let quantity = parseInt(event.target.value, 10) || 0;

    if (isNaN(quantity)) {
      quantity = 0;
    }

    dispatch(
      cartActions.handleProductSetQuantity({
        id: cartItems[index].id,
        quantity: quantity,
      })
    );
  };

  const removeItemHandler = (id: number, index: number) => {
    setRemoving(index);
    setTimeout(() => {
      dispatch(cartActions.handleProductRemove({ id }));
      dispatch(
        snackbarActions.handleSnackbarOpen({
          severity: "success",
          message: "Product removed from cart",
        })
      );
      setRemoving(null);
    }, 300);
  };

  const handleIncrement = (item: CartProduct) => {
    const curProduct = {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      rating: {
        rate: item.rating.rate,
        count: item.rating.count,
      },
    };

    dispatch(
      cartActions.handleProductAdd({ product: curProduct, quantity: 1 })
    );
  };

  const handleDecrement = (index: number) => {
    if (cartItems[index].quantity === 1) {
      setRemoving(index);
      setTimeout(() => {
        dispatch(
          cartActions.handleProductDecrease({ id: cartItems[index].id })
        );
        dispatch(
          snackbarActions.handleSnackbarOpen({
            severity: "success",
            message: "Product removed from cart",
          })
        );
        setRemoving(null);
      }, 300);
    } else {
      dispatch(cartActions.handleProductDecrease({ id: cartItems[index].id }));
    }
  };

  return (
    <Await resolve={products}>
      {(prodcuts) => (
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
              {cartItems.map((item: CartProduct, index: number) => (
                <tr
                  key={item.id}
                  className={`table-row ${
                    removing === index ? "removing" : ""
                  } shadow-md hover:bg-slate-100`}
                >
                  <td className="p-4 flex items-center relative">
                    <div
                      className="relative inline-block"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      <img
                        src={item.image}
                        alt="product"
                        className="hidden md:block w-12 mr-20 lg:mr-4 cursor-pointer"
                        title="See details"
                      />
                    </div>
                    <RemoveButtonContainer
                      onClick={() => removeItemHandler(item.id, index)}
                    />
                    <p
                      className="cursor-pointer "
                      onClick={() => navigate(`/product/${item.id}`)}
                      title="See details"
                    >
                      {truncateTitle(item.title, 20)}
                    </p>
                  </td>

                  <td className="p-4 text-center">${item.price}</td>
                  <td className="p-4 text-center py-2 px-4">
                    <div className="flex items-center justify-center">
                      <div className="border-2 w-fit flex pl-1 lg:pr-1 rounded-md">
                        <input
                          type="number"
                          value={item.quantity?.toString().replace(/^0+/, "")}
                          min={0}
                          onChange={(event) =>
                            handleQuantityOnChange(event, index)
                          }
                          className="cart-input py-1 text-center w-4 xs:w-6 sm:w-6 md:w-8 lg:w-10 focus:outline-none bg-inherit"
                        />
                        <div className="h-full flex flex-col gap-0 lg:gap-1 py-1 pr-1">
                          <img
                            src={UpArrowIcon}
                            alt="up-arrow"
                            className="w-4 xs:w-4 sm:w-3 cursor-pointer"
                            onClick={() => handleIncrement(item)}
                          />
                          <img
                            src={DownArrowIcon}
                            alt="down-arrow"
                            className="w-4 xs:w-4 sm:w-3 cursor-pointer"
                            onClick={() => handleDecrement(index)}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 pr-8 text-right">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                </tr>
              ))}
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
      )}
    </Await>
  );
};

export default CartItemsTable;
