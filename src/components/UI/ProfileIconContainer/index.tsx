import React, { useState } from "react";

import ProfileIconOutlined from "../../../assets/icons/ProfileIconOutlined";
import ProfileIconFilled from "../../../assets/icons/ProfileIconFilled";
import ProfileDropdown from "./ProfileDropdown";

const ProfileIconContainer = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropDown = () => {
    setIsProfileDropdownOpen((prevState) => !prevState);
  };

  return (
    <div
      tabIndex={0}
      onClick={toggleProfileDropDown}
      onBlur={() => setIsProfileDropdownOpen(false)}
      className="relative"
    >
      {isProfileDropdownOpen ? <ProfileIconFilled /> : <ProfileIconOutlined />}
      {isProfileDropdownOpen && <ProfileDropdown />}
    </div>
  );
};

export default ProfileIconContainer;
