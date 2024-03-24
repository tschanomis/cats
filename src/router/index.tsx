import { createBrowserRouter } from "react-router-dom";

import Layout from "../screens/layout/Layout.screen";
import Home from "../screens/home/Home.screen";
import Vote from "../screens/vote/Vote.screen";
import Ranking from "../screens/ranking/Ranking.screen";
import ErrorPage from "../screens/error/Error.screen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
      {
        path: "error",
        element: <ErrorPage status={500} />,
      },
    ],
  },
]);
