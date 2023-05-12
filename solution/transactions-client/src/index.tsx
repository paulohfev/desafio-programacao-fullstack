import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AffiliateBalancePage from './pages/AffiliateBalancePage';
import HomePage from './pages/HomePage';
import store from './store';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/balance/:affiliateName",
    element: <AffiliateBalancePage />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
