import { Skeleton } from "@mui/material";
import React from "react";

const ProductCardSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={`w-[48%] xs:w-[23%]  ${className}`}>
      <Skeleton
        variant="rounded"
        className="w-[100%]"
        sx={{
          height: {
            xs: "100px",
            sm: "150px",
            md: "200px",
          },
        }}
        animation="wave"
      />

      <Skeleton variant="text" className="w-[40%] text-sm" animation="wave" />
      <Skeleton variant="text" className="w-[20%] text-sm" animation="wave" />
      <Skeleton variant="text" className="w-[70%] text-sm" animation="wave" />
    </div>
  );
};

export default ProductCardSkeleton;
