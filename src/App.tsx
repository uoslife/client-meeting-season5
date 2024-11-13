import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasicLayout from './components/common/BasicLayout';
import SplashPage from './pages/SplashPage';
import StarterPage from './pages/StarterPage';
import UsagePolicy from './pages/UsagePolicy';
import NoAuthLayout from './components/common/NoAuthLayout';
import WebMailPage from './pages/WebMailPage';
import AuthLayout from './components/common/AuthLayout';
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
        path: 'splash',
        element: <SplashPage />,
      },
      {
        path: 'start',
        element: <StarterPage />,
      },
    ],
  },
  {
    path: '/',
    element: <NoAuthLayout />,
    children: [
      {
        path: 'policy',
        element: <UsagePolicy />,
      },
      {
        path: 'webmail',
        element: <WebMailPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'profile',
        element: <BasicProfilePage />,
      },
      {
        path: 'main',
        element: <MainPage />,
        children: [
          {
            path: 'detail/personal',
            element: <PersonalDetailProfilePage />,
          },
          {
            path: 'detail/group',
            element: <GroupDetailProfilePage />,
          },
          {
            path: 'summary',
            element: <SummaryPage />,
          },
        ],
      },
      {
        path: 'invite',
        element: <InvitationPage />,
      },
      {
        path: 'private-policy',
        element: <PrivatePolicyPage />,
      },
      {
        path: 'payment',
        element: <PaymentPage />,
      },
      {
        path: 'edit-profile',
        element: <EditProfilePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
