import { createBrowserRouter } from "react-router-dom";

import Layout from "../screens/layout/Layout.screen";
import Vote from "../screens/vote/Vote.screen";

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
        element: <Vote />,
      },
      {
        path: "ranking",
        element: <>Ranking</>,
      },
    ],
  },
]);
