import { DataCatsResponse } from "../types/cats/cats.types";

export const fetchCatsData = async (): Promise<DataCatsResponse> => {
  try {
    const response = await fetch("https://data.latelier.co/cats.json");
    if (!response.ok) throw new Error("Response was not ok");
    const jsonData = await response.json();
    return jsonData as DataCatsResponse;
  } catch (error) {
    throw new Error("There was a problem with the fetch operation");
  }
};
