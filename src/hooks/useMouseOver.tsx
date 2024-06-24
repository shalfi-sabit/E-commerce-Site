import { useState } from "react";

export const useMouseOver = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return { isHovered, handleMouseOver, handleMouseOut };
};
