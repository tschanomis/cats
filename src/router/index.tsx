import { createBrowserRouter } from "react-router-dom";

import Layout from "../screens/layout/Layout.screen";
import Home from "../screens/Home/Home.screen";
import Vote from "../screens/vote/Vote.screen";
import Ranking from "../screens/ranking/Ranking.screen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "vote",
        element: <Vote />,
      },
      {
        path: "ranking",
        element: <Ranking />,
      },
    ],
  },
]);
