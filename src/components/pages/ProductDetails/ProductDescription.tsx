import React from "react";
import product from "../../../models/product";
import { Rating } from "@mui/material";

const ProductDescription: React.FC<{ product: product }> = ({ product }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-base xs:text-lg lg:text-xl">
          {product.title}
        </h1>

        <div className="flex items-center gap-1 sm:gap-2">
          <Rating
            name="rating-component"
            defaultValue={product.rating.rate}
            precision={0.1}
            readOnly
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
            }}
          />
          <p className="text-gray-900 text-[12px] lg:text-sm">(150 Reviews)</p>
          <p className="text-slate-400 text-[12px] lg:text-sm">|</p>
          <p className="font-medium text-[#66FFA3] text-[12px] lg:text-sm">
            In Stock
          </p>
        </div>

        <h2 className="text-lg md:text-xl lg:text-2xl">${product.price}</h2>

        <p className="text-[12px] xs:text-sm">{product.description}</p>
      </div>
    </>
  );
};

export default ProductDescription;
