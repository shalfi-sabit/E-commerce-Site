import React from "react";
import Wrapper from "./Wrapper";

type sectionTitleProps = {
  text: string;
  className?: string;
  children?: React.ReactNode;
  timer?: React.ReactNode;
};

const SectionTitle: React.FC<sectionTitleProps> = ({
  text,
  children,
  className,
  timer,
}) => {
  return (
    <Wrapper className={`flex justify-between items-end ${className}`}>
      {timer ? (
        <>
          <div className="flex items-end gap-4 sm:gap-8 md:gap-12 lg:gap-16">
            <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-4 w-fit">
              {text}
            </h1>
            {timer}
          </div>
          {children}
        </>
      ) : (
        <>
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            {text}
          </h1>
          {children}
        </>
      )}
    </Wrapper>
  );
};

export default SectionTitle;
