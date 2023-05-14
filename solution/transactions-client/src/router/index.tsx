import HomePage from "../pages/HomePage";
import AffiliateBalancePage from "../pages/AffiliateBalancePage";

export const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/balance/:affiliateName",
    element: <AffiliateBalancePage />,
  }
];
