import { DataCatsResponse } from "../types/cats/cats.types";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchCatsData = async (): Promise<DataCatsResponse> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Response was not ok");
    const jsonData = await response.json();
    return jsonData as DataCatsResponse;
  } catch (error) {
    throw new Error("There was a problem with the fetch operation");
  }
};
