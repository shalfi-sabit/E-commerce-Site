import Wrapper from "../../UI/Wrapper";
import QRCode from "../../../assets/images/Qrcode 1.png";
import GooglePlayLogo from "../../../assets/images/GooglePlay.png";
import AppStoreLogo from "../../../assets/images/AppStore.png";
import FacebookIcon from "../../../assets/icons/FacebookIcon";
import InstaIcon from "../../../assets/icons/InstaIcon";
import LinkedInIcon from "../../../assets/icons/LinkedInIcon";
import SendIcon from "../../../assets/icons/SendIcon";
import TwitterIcon from "../../../assets/icons/TwitterIcon";
import { NavLink } from "react-router-dom";
import FooterItemsWrapper from "./FooterItemsWrapper";

const Footer = () => {
  return (
    <footer className="bg-black-900 pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-sm md:text-[16px]">
      <Wrapper className="flex justify-between gap-8 flex-wrap text-white-900">
        <FooterItemsWrapper>
          <h2 className="font-semibold text-[24px] sm:text-[28px] lg:text-2xl mb-1 lg:mb-5">
            Exclusive
          </h2>
          <ul className="space-y-2 lg:space-y-4">
            <li>Subscribe</li>
            <li>
              <p className="w-fit text-[14px] sm:text-[18px]">
                Get 10% off your first order
              </p>
            </li>
            <li className="flex border rounded border-white-900 ps-1 py-1 pr-2 w-52">
              <input
                className="bg-black-900 w-full focus:outline-none px-2"
                placeholder="Enter your email"
              />
              <SendIcon />
            </li>
          </ul>
        </FooterItemsWrapper>

        <FooterItemsWrapper>
          <h3 className="text-[18px] lg:text-[18px] lg:text-xl mb-1 lg:mb-5">
            Support
          </h3>
          <ul className="space-y-2 lg:space-y-4">
            <li>
              <p className="text-[14px] sm:text-[18px]">
                111 Bijoy sarani, Dhaka
              </p>
              <p className="text-[14px] sm:text-[18px]">DH 1515, Bangladesh.</p>
            </li>
            <li>
              <p className="text-[14px] sm:text-[18px]">exclusive@gmail.com</p>
            </li>
            <li>
              <p className="text-[14px] sm:text-[18px]">+88015-88888-9999</p>
            </li>
          </ul>
        </FooterItemsWrapper>

        <FooterItemsWrapper>
          <h3 className="text-[18px] lg:text-xl mb-1 lg:mb-5">Account</h3>
          <ul className="space-y-2 lg:space-y-4">
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/my-account">
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/signin">
                Login / Register
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/cart">
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/wishlist">
                Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/">
                Shop
              </NavLink>
            </li>
          </ul>
        </FooterItemsWrapper>

        <FooterItemsWrapper>
          <h3 className="text-[18px] lg:text-xl mb-1 lg:mb-6">Quick Link</h3>
          <ul className="space-y-2 lg:space-y-4">
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/">
                Terms of Use
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[14px] sm:text-[18px]" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </FooterItemsWrapper>

        <FooterItemsWrapper>
          <h3 className="text-[18px] lg:text-xl mb-1 lg:mb-5">Download App</h3>
          <div>
            <small className="text-gray-300 mb-2">
              Save $3 with App New User Only
            </small>
            <span className="flex">
              <img className="mr-3" src={QRCode} alt="shop qr code" />
              <div>
                <img
                  className="pb-3"
                  src={GooglePlayLogo}
                  alt="playStoreLogo"
                />
                <img src={AppStoreLogo} alt="appStoreLogo" />
              </div>
            </span>
            <span className="flex space-x-6 mt-3">
              <FacebookIcon />
              <TwitterIcon />
              <InstaIcon />
              <LinkedInIcon />
            </span>
          </div>
        </FooterItemsWrapper>
      </Wrapper>
      <p className="text-gray-700 text-center mt-10 border-t-[1px] border-gray-600 py-4 text-[14px] sm:text-[18px]">
        © Copyright Brain Station 2024. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
