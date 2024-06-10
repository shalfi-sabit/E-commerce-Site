import React from "react";

const MAX_TITLE_LEN = 30;

type productSummaryItemProps = {
  id: number;
  title: string;
  imageSource: string;
  price: number;
  count: number;
};

const ProductSummaryItem: React.FC<productSummaryItemProps> = ({
  id,
  title,
  imageSource,
  price,
  count,
}) => {
  let productTitle = title;
  if (productTitle.length > MAX_TITLE_LEN) {
    productTitle = productTitle.substring(0, MAX_TITLE_LEN) + "...";
  }

  return (
    <div className="bg-white-900 flex items-center justify-between w-[90%] font-medium text-[12px] sm:text-sm md:text-[16px] gap-4">
      <div className="flex gap-8 items-center">
        <div className="w-[28px] sm:w-[32px] md:w-[40px] lg:w-[48px]">
          <img src={imageSource} alt="product summary" />
        </div>
        <p className="flex justify-between items-center gap-4">
          <span>{productTitle}</span>{" "}
          <span className="bg-gray-200 rounded-[50%] p-1 text-[14px] text-white-900">
            x{count}
          </span>
        </p>
      </div>
      <p>${price}</p>
    </div>
  );
};

export default ProductSummaryItem;
