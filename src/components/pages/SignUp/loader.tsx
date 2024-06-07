import { useDispatch } from "react-redux";
import { snackbarActions } from "../../../redux-store/slices/snackbarSlice";
import getLoginStatus from "../../../utils/getLoginStatus";
import getUserFullName from "../../../utils/getUserFullName";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  console.log("loader triggered!");
  const isLoggedIn = getLoginStatus();
  const userFullName = getUserFullName();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If user is logged in, show snackbar message and redirect to home page
  if (isLoggedIn) {
    dispatch(
      snackbarActions.handleSnackbarOpen({
        severity: "info",
        message: `${userFullName}, you're already logged in successfully.`,
      })
    );
    navigate("/"); // Redirect to home page
  }

  // Return null since loader function doesn't render any UI
  return null;
};

export default Loader;
