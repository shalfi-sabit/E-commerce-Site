import { useNavigate, useRouteError } from "react-router-dom";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import FillButton from "../../UI/Button/FillButton";
import Wrapper from "../../UI/Wrapper";

interface RouteError {
  status?: number;
  statusText?: string;
}

const ErrorBoundary: React.FC = () => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();

  let title = "An Error Occurred!";
  let message = "Something Went Wrong";

  console.log(error.status);
  if (error.status === 400) {
    title = "Bad Request";
    message =
      "The server could not understand the request due to invalid syntax.";
  } else if (error.status === 401) {
    title = "Unauthorized";
    message = "You are not authorized to view this resource. Please log in.";
  } else if (error.status === 403) {
    title = "Forbidden";
    message = "You do not have permission to access this resource.";
  } else if (error.status === 404) {
    title = "Not Found";
    message = "The requested resource could not be found on this server.";
  } else if (error.status === 500) {
    title = "Internal Server Error";
    message =
      "The server encountered an internal error and was unable to complete your request.";
  }
  return (
    <div>
      <Navbar />
      <Wrapper>
        <div className="flex flex-col items-center gap-3 xs:gap-4 md:gap-5 lg:gap-6 px-6 py-10 xs:p-12 sm:p-14 md:p-16 lg:p-20">
          <p className="text-nowrap text-[40px] xs:text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-medium">
            <span>{error.status} </span>
            {title}
          </p>
          <p className="text-center text-[10px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] tracking-tighter font-medium">
            {message}
          </p>
          <FillButton
            text="Back to home page"
            className="mt-2 xs:mt-3 sm:mt-4 md:mt-8 lg:mt-10"
            onClick={() => navigate("/")}
          />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default ErrorBoundary;
