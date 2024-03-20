import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import { fetchCatsData } from "./core/api/api.service";

import { DataCatsResponse } from "./core/api/types/cats/cats.types";

import "./App.css";

function App() {
  const getCatsData = async () => {
    try {
      const dataCatsResponse: DataCatsResponse = await fetchCatsData();
      console.log(dataCatsResponse.images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCatsData();
  });

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
