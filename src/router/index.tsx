import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
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
