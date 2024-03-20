import { createBrowserRouter } from "react-router-dom";

import Layout from "../screens/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <>Home</>,
      },
      {
        path: "vote",
        element: <>Vote</>,
      },
      {
        path: "ranking",
        element: <>Ranking</>,
      },
    ],
  },
]);
