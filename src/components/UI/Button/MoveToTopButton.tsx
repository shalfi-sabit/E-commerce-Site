import { useEffect, useState } from "react";
import UpArrowIcon from "../../../assets/images/up-arrow.png";

const MoveToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-red-200 hover:bg-red-100 text-white rounded-full shadow-md transition-all duration-300"
        >
          <img
            src={UpArrowIcon}
            alt="up arrow"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
          />
        </button>
      )}
    </div>
  );
};

export default MoveToTopButton;
