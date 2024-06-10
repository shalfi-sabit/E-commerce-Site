import getLoginStatus from "../../../utils/getLoginStatus";
import { redirect } from "react-router-dom";

const Loader = () => {
  const isLoggedIn = getLoginStatus();

  if (!isLoggedIn) {
    return redirect("/signin");
  }

  return null;
};

export default Loader;
