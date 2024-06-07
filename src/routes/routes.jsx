import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/pages/RootLayout";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import signUpLoader from "../components/pages/SignUp/loader";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Account from "../components/pages/Account";
import ErrorBoundary from "../components/pages/Error";
import Wishlist from "../components/pages/Wishlist";
import Cart from "../components/pages/Cart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp />, loader: signUpLoader },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "account", element: <Account /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
