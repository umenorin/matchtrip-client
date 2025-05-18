import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { loginPageAction } from './action/loginPageAction';
import { registerPageAction } from './action/registerPageAction';
import MyRequestsPage from './pages/MyRequestsPage/MyRequestsPage';
import Layout from './pages/shared/Layout/Layout';
import Match from './pages/MatchPage/Match';
import { matchPageAction } from './action/matchPageAction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // loader: homePageLoader
      },
      {
        path: '/login',
        element: <LoginPage />,
        action: loginPageAction,
      },
      {
        path: '/register',
        element: <RegisterPage />,
        action: registerPageAction,
      },
      {
        path: '/profile',
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
        path: '/my-requests',
        element: <MyRequestsPage />,
        // loader: protectedLoader (se quiser proteger a rota)
      },
      {
        path: '/match',
        element: <Match />,
        action: matchPageAction,
      },
    ],
  },
]);

export default router;
