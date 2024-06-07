import ProductSummaryItem from "./ProductSummaryItem";

import DummyProductImage1 from "../../../../assets/images/dummy-product-1.jpg";
import DummyProductImage2 from "../../../../assets/images/dummy-product-2.jpg";
import DummyProductImage3 from "../../../../assets/images/dummy-product-3.jpg";
import DummyProductImage4 from "../../../../assets/images/dummy-product-4.jpg";
import DummyProductImage5 from "../../../../assets/images/dummy-product-5.jpg";
import DummyProductImage6 from "../../../../assets/images/dummy-product-6.jpg";

const cartItems = [
  {
    id: 1,
    imageSource: DummyProductImage1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    count: 2,
  },
  {
    id: 2,
    imageSource: DummyProductImage2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 109.95,
    count: 4,
  },
  {
    id: 3,
    imageSource: DummyProductImage3,
    title: "Mens Cotton Jacket",
    price: 109.95,
    count: 1,
  },
  {
    id: 4,
    imageSource: DummyProductImage4,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    count: 2,
  },
  {
    id: 5,
    imageSource: DummyProductImage5,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 109.95,
    count: 5,
  },
  {
    id: 6,
    imageSource: DummyProductImage6,
    title: "Mens Cotton Jacket",
    price: 109.95,
    count: 1,
  },
  {
    id: 7,
    imageSource: DummyProductImage1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    count: 3,
  },
];

const CheckoutSummary = () => {
  return (
    <div className="bg-white-900">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-7 max-h-[325px] overflow-y-scroll">
        {cartItems.map((item) => (
          <ProductSummaryItem
            key={item.id}
            id={item.id}
            title={item.title}
            imageSource={item.imageSource}
            price={item.price}
            count={item.count}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <p>Subtotal:</p>
        <p>$1260</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
