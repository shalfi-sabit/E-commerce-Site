import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/pages/RootLayout/RootLayout";
import Home from "../components/pages/Home/Home";
import SignIn from "../components/pages/SignIn/SignIn";
import SignUp from "../components/pages/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);
