import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/pages/RootLayout";
import Home from "../components/pages/Home";
import homeLoader from "../components/pages/Home/loader";
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
import ExploreAllProducts from "../components/pages/ExploreAllProducts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "signin", element: <SignIn />, loader: authLoader },
      { path: "signup", element: <SignUp />, loader: authLoader },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "account", element: <Account />, loader: notLoggedInLoader },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout />, loader: notLoggedInLoader },
      { path: "products", element: <ExploreAllProducts /> },
    ],
  },
]);
