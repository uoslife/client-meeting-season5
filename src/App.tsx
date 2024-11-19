import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import BasicLayout from './components/common/BasicLayout';
import SplashPage from './pages/SplashPage';
import StarterPage from './pages/StarterPage';
import UsagePolicyPage from './pages/UsagePolicyPage';
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
import Recruit from './pages/Recruit';
import EditProfilePage from './pages/EditProfilePage';
import BasicProfilePage from './pages/BasicProfilePage';
import PaymentResultPage from './pages/PaymentResultPage';
import PaymentTestPage from './pages/PaymentTestPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '',
        element: <SplashPage />,
      },
      {
        path: 'start',
        element: <StarterPage />,
      },
      {
        path: 'payment-test',
        element: <PaymentTestPage />,
      },
    ],
  },
  {
    path: '/',
    element: <NoAuthLayout />,
    children: [
      {
        path: 'policy',
        element: <UsagePolicyPage />,
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
      },
      {
        path: 'detail',
        element: <Outlet />,
        children: [
          {
            path: 'personal',
            element: <PersonalDetailProfilePage />,
          },
          {
            path: 'group',
            element: <GroupDetailProfilePage />,
          },
        ],
      },
      {
        path: 'recruit',
        element: <Recruit />,
      },
      {
        path: 'summary',
        element: <SummaryPage />,
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
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <PaymentPage />,
          },
          {
            path: 'result',
            element: <PaymentResultPage />,
          },
        ],
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
