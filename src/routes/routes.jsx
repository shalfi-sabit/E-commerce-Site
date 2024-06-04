import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/pages/RootLayout";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
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
      { path: "signup", element: <SignUp /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
