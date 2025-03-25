import { createBrowserRouter } from "react-router";

import Layout from "./pages/shared/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage
       />,
      children: [
        {
          index: true,
          element: <HomePage />,
          // loader: homePageLoader
        },
        {
          path: "/login",
          element: <LoginPage />,
          // action: "loginPageAction"
        },
        {
          path: "/register",
          element: <RegisterPage />,
          // action: registerPageAction
        }
      ]
    }
  ]);

  export default router;
  