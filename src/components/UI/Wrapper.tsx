import React from "react";

import WrapperProps from "../../models/wrapperProps.tsx";

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={`w-11/12 sm:w-10/12 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
