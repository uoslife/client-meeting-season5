import { RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: 'team',
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

const App = () => {
  <RouterProvider router={router} />;
};
export default App;
