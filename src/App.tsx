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
import EditProfilePage from './pages/EditProfilePage';
import BasicProfilePage from './pages/BasicProfilePage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentFailedPage from './pages/PaymentFailedPage';
import PaymentTestPage from './pages/PaymentTestPage';
import PaymentResultPage from './pages/PaymentResultPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ResultPersonalPage from './pages/ResultPersonalPage';
import ResultGroupPage from './pages/ResultGroupPage';
import Waiting from './pages/WaitingPage';

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
          {
            path: 'success',
            element: <PaymentSuccessPage />,
          },
          {
            path: 'failed',
            element: <PaymentFailedPage />,
          },
        ],
      },
      {
        path: 'edit-profile',
        element: <EditProfilePage />,
      },
      {
        path: 'result/personal',
        element: <ResultPersonalPage />,
      },
      {
        path: 'result/group',
        element: <ResultGroupPage />,
      },
      {
        path: 'waiting',
        element: <Waiting />,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
