import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasicLayout from './components/Common/BasicLayout';
import SplashPage from './pages/SplashPage';
import StarterPage from './pages/StarterPage';
import UsagePolicy from './pages/UsagePolicy';
import NoAuthLayout from './components/Common/NoAuthLayout';
import WebMailPage from './pages/WebMailPage';
import AuthLayout from './components/Common/AuthLayout';
import MainPage from './pages/MainPage';
import PersonalDetailProfilePage from './pages/PersonalDetailProfilePage';
import SummaryPage from './pages/SummaryPage';
import PrivatePolicyPage from './pages/PrivatePolicyPage';
import PaymentPage from './pages/PaymentPage';
import InvitationPage from './pages/InvitationPage';
import GroupDetailProfilePage from './pages/GroupDetailProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import BasicProfilePage from './pages/BasicProfilePage';
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
        element: <BasicProfilePage />,
      },
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
