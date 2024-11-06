import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasicLayout from './components/BasicLayout';
import SplashPage from './pages/SplashPage';
import StarterPage from './pages/StarterPage';
import UsagePolicy from './pages/UsagePolicy';
import NoAuthLayout from './components/NoAuthLayout';
import WebMailPage from './pages/WebMailPage';
import AuthLayout from './components/AuthLayout';
import BasicPofilePage from './pages/BasicPofilePage';
import MainPage from './pages/MainPage';
import PersonalDetailProfilePage from './pages/PersonalDetailProfilePage';
import SummaryPage from './pages/SummaryPage';
import PrivatePolicyPage from './pages/PrivatePolicyPage';
import PaymentPage from './pages/PaymentPage';
import InvitationPage from './pages/InvitationPage';
import GroupDetailProfilePage from './pages/GroupDetailProfilePage';
import EditProfilePage from './pages/EditProfilePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <SplashPage />,
      },
      {
        path: '/',
        element: <StarterPage />,
      },
    ],
  },
  {
    path: '/',
    element: <NoAuthLayout />,
    children: [
      {
        path: '/',
        element: <UsagePolicy />,
      },
      {
        path: '/',
        element: <WebMailPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <BasicPofilePage />,
        children: [
          {
            path: '/',
            element: <MainPage />,
            children: [
              {
                path: '/',
                element: <PersonalDetailProfilePage />,
              },
              {
                path: '/',
                element: <GroupDetailProfilePage />,
              },
              {
                path: '/',
                element: <SummaryPage />,
              },
              {
                path: '/',
                element: <InvitationPage />,
              },
              {
                path: '/',
                element: <PrivatePolicyPage />,
              },
              {
                path: '/',
                element: <PaymentPage />,
              },
            ],
          },
          {
            path: '/',
            element: <EditProfilePage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  <RouterProvider router={router} />;
};
export default App;
