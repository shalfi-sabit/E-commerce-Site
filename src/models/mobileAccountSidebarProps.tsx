import { MouseEvent } from "react";

type mobileAccountSidebarProps = {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleBackdropClick: (event: MouseEvent<HTMLDivElement>) => void;
  handleMobileSidebarClick: (event: MouseEvent<HTMLDivElement>) => void;
};

export default mobileAccountSidebarProps;
