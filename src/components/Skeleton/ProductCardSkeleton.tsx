import { Skeleton } from "@mui/material";
import React from "react";

const ProductCardSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={`${className}`}>
      <Skeleton variant="rectangular" className="h-full w-[100%]" />

      {/* Title skeleton */}
      <Skeleton variant="text" sx={{ width: "60%", marginBottom: 2, mt: 2 }} />

      <Skeleton
        variant="rounded"
        sx={{ width: "80%", height: "100%", marginBottom: 1 }}
      />
      <Skeleton variant="text" sx={{ width: "70%", marginBottom: 1 }} />
      <Skeleton variant="text" sx={{ width: "60%", marginBottom: 1 }} />
      <Skeleton variant="text" sx={{ width: "50%", marginBottom: 1 }} />
    </div>
  );
};

export default ProductCardSkeleton;
