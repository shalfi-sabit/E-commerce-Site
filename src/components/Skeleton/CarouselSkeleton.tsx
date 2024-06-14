import { Skeleton } from "@mui/material";
import React from "react";

const CarouselSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      className="w-[100%]"
      sx={{
        height: {
          xs: "150px",
          sm: "200px",
          md: "280px",
          lg: "370px",
        },
      }}
      animation="wave"
    />
  );
};

export default CarouselSkeleton;
