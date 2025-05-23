import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./app/features/ErrorPage/ErrorPage";
import HomePage from "./app/features/HomePage/HomePage";
import LoginPage from "./app/features/LoginPage/LoginPage";
import RegisterPage from "./app/features/RegisterPage/RegisterPage";
import ProfilePage from "./app/features/ProfilePage/ProfilePage";
import { loginPageAction } from "./app/features/services/action/loginPageAction";
import { registerPageAction } from "./app/features/services/action/registerPageAction";
import MyRequestsPage from "./app/features/MyRequestsPage/MyRequestsPage";
import Match from "./app/features/MatchPage/Match";
import { matchPageAction } from "./app/features/services/action/matchPageAction";
import Layout from "./app/core/layout/Layout/Layout";
import CreateTripModal from "./app/core/components/CreateTripModal/CreateTripModal";
import { AuthProvider } from "./app/features/services/context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // loader: homePageLoader
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: loginPageAction,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        action: registerPageAction,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        // Caso precise proteger a rota:
        // loader: protectedProfileLoader
      },
      // {
      //   path: "/profile/edit",
      //   element: <EditProfilePage />,
      //   action: editProfileAction,
      //   // loader: protectedProfileLoader
      // },
      {
        path: "/my-requests",
        element: <MyRequestsPage />,
        // loader: protectedLoader (se quiser proteger a rota)
      },
      {
        path: "/match",
        element: <Match />,
        action: matchPageAction,
      },

<<<<<<< HEAD
      // The "/create-trip" modal should be handled inside the Layout component, not as a standalone route.
=======
      {
        path: "/create-trip",
        element: <CreateTripModal />,
      },
>>>>>>> 95b5fd0b0ee83b1505b7d4cc271826c10a2126cb
    ],
  },
]);

export default router;
