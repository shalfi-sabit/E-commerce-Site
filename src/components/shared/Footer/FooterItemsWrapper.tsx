interface footerItemWrapperProps {
  children: React.ReactNode;
}

const FooterItemsWrapper: React.FC<footerItemWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center sm:block text-center sm:text-left space-y-4 w-full sm:w-[40%] md:w-[30%] lg:w-[18%]">
      {children}
    </div>
  );
};

export default FooterItemsWrapper;
