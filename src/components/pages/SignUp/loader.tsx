import getLoginStatus from "../../../utils/getLoginStatus";
import { json } from "react-router-dom";

const Loader = () => {
  const isLoggedIn = getLoginStatus();

  if (isLoggedIn) {
    return json({ showAlreadyLoggedInMessage: true });
  }

  return null;
};

export default Loader;
