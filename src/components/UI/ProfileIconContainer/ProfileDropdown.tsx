import DropdownRow from "./DropdownRow";

import ProfileIconOutlinedWhite from "../../../assets/icons/ProfileIconOutlinedWhite";
import MallbagIcon from "../../../assets/icons/MallbagIcon";
import CancelIcon from "../../../assets/icons/CancelIcon";
import ReviewIcon from "../../../assets/icons/ReviewIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";

const ProfileDropdown = () => {
  return (
    <div className="p-3 sm:p-4 bg-gray-500 absolute xl:right-0 rounded backdrop-blur-md text-white-900 text-[12px] sm:text-sm flex flex-col gap-2 sm:gap-3 mt-1 z-[3]">
      <DropdownRow
        image={<ProfileIconOutlinedWhite />}
        title={"Manage My Account"}
        to="#"
        className="ml-[-2.5px]"
      />
      <DropdownRow image={<MallbagIcon />} title={"My Order"} to="#" />
      <DropdownRow image={<CancelIcon />} title={"My Cancellations"} to="#" />
      <DropdownRow image={<ReviewIcon />} title={"My Reviews"} to="#" />
      <DropdownRow image={<LogoutIcon />} title={"Logout"} to="#" />
    </div>
  );
};

export default ProfileDropdown;
