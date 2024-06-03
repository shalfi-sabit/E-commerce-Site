import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/pages/RootLayout/RootLayout";
import Home from "../components/pages/Home/Home";
import SignIn from "../components/pages/SignIn/SignIn";
import SignUp from "../components/pages/SignUp/SignUp";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import ErrorBoundary from "../components/pages/Error/ErrorBoundary";

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
    ],
  },
]);
