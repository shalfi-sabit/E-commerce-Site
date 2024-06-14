import DropdownRow from "../DropdownRow";

import ProfileIconOutlinedWhite from "../../../assets/icons/ProfileIconOutlinedWhite";
import MallbagIcon from "../../../assets/icons/MallbagIcon";
import CancelIcon from "../../../assets/icons/CancelIcon";
import ReviewIcon from "../../../assets/icons/ReviewIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { snackbarActions } from "../../../redux-store/slices/snackbarSlice";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    dispatch(
      snackbarActions.handleSnackbarOpen({
        severity: "success",
        message: "You have been successfully logged out",
      })
    );
  };

  return (
    <div className="p-3 sm:p-4 bg-gray-500 absolute xl:right-0 rounded  backdrop-blur-md text-white-900 text-[12px] sm:text-sm flex flex-col gap-2 sm:gap-3 mt-1 z-[3]">
      <DropdownRow
        image={<ProfileIconOutlinedWhite />}
        title={"Manage My Account"}
        onClick={() => navigate("/account")}
        className="ml-[-2.5px]"
      />
      <DropdownRow image={<MallbagIcon />} title={"My Order"} />
      <DropdownRow image={<CancelIcon />} title={"My Cancellations"} />
      <DropdownRow image={<ReviewIcon />} title={"My Reviews"} />
      <DropdownRow
        image={<LogoutIcon />}
        title={"Logout"}
        onClick={handleLogout}
      />
    </div>
  );
};

export default ProfileDropdown;
