import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/pages/RootLayout";
import Home from "../components/pages/Home";
import homeLoader from "../components/pages/RootLayout/loader";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import authLoader from "../components/pages/SignUp/loader";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Account from "../components/pages/Account";
import notLoggedInLoader from "../components/pages/Account/loader";
import ErrorBoundary from "../components/pages/Error";
import Wishlist from "../components/pages/Wishlist";
import Cart from "../components/pages/Cart";
import Checkout from "../components/pages/Checkout";
import EditProfileForm from "../components/pages/Account/MyProfile";
import AddressBook from "../components/pages/Account/AddressBook";
import MyPaymentOptions from "../components/pages/Account/MyPaymentOptions";
import MyReturns from "../components/pages/Account/MyReturns";
import MyCancellations from "../components/pages/Account/MyCancellations";
import ProductDetails from "../components/pages/ProductDetails";
import ExploreAllProducts from "../components/pages/ExploreAllProducts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    loader: homeLoader,
    children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <SignIn />, loader: authLoader },
      { path: "signup", element: <SignUp />, loader: authLoader },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      {
        path: "account",
        element: <Account />,
        loader: notLoggedInLoader,
        children: [
          { index: true, element: <EditProfileForm /> },
          { path: "address-book", element: <AddressBook /> },
          { path: "my-payment-options", element: <MyPaymentOptions /> },
          { path: "my-returns", element: <MyReturns /> },
          { path: "my-cancellations", element: <MyCancellations /> },
        ],
      },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout />, loader: notLoggedInLoader },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "products", element: <ExploreAllProducts /> },
    ],
  },
]);
