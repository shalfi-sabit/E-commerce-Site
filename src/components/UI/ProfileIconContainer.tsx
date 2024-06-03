import React, { useState } from "react";

import ProfileIconOutlined from "../../assets/icons/ProfileIconOutlined";
import ProfileIconFilled from "../../assets/icons/ProfileIconFilled";

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
    >
      {isProfileDropdownOpen ? <ProfileIconFilled /> : <ProfileIconOutlined />}
    </div>
  );
};

export default ProfileIconContainer;
