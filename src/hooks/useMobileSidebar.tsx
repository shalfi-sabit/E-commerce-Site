import { useEffect, useState, MouseEvent } from "react";

const useMobileSidebar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileSidebarOpen]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    setIsMobileSidebarOpen(false);
  };

  const handleMobileSidebarClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return {
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    handleBackdropClick,
    handleMobileSidebarClick,
  };
};

export default useMobileSidebar;
