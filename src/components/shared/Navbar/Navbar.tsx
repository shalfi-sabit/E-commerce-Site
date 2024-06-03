import { NavLink } from "react-router-dom";

import ChooseLanguage from "./ChooseLanguage";
import Wrapper from "../../UI/Wrapper";
import SearchBox from "./SearchBox";
import WishlistIcon from "../../../assets/icons/WishlistIcon";
import CartIcon from "../../../assets/icons/CartIcon";
import ProfileIconContainer from "../../UI/ProfileIconContainer";

import getLoginStatus from "../../../util/getLoginStatus.ts";

const Navbar: React.FC = () => {
  const isLoggedIn = getLoginStatus();

  return (
    <header>
      <ChooseLanguage />

      <nav className="navbar-main border-b-[1px] pb-3 border-gray-200">
        <Wrapper className="flex justify-between items-center mt-7">
          <h1 className="font-extrabold text-2xl">SnapShop</h1>

          <ul className="flex gap-8 text-md">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <SearchBox />
            <WishlistIcon count={2} />
            <CartIcon count={4} />
            {isLoggedIn && <ProfileIconContainer />}
          </div>
        </Wrapper>
      </nav>
    </header>
  );
};

export default Navbar;
