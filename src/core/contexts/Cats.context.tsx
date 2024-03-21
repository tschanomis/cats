import { createContext, useState, useEffect, ReactNode } from "react";
import { fetchCatsData } from "../../core/api/api.service";
import {
  DataCatsResponse,
  CatsResponse,
} from "../../core/types/cats/cats.types";

export type CatsContextType = {
  catsDetails: CatsResponse[];
  updateCatsDetails: (cats: CatsResponse[]) => void;
};

const CatsContext = createContext<CatsContextType>({
  catsDetails: [],
  updateCatsDetails: () => {},
});

export const CatsProvider = ({ children }: { children: ReactNode }) => {
  const [catsDetails, setCatsDetails] = useState<CatsResponse[]>([]);

  const updateCatsDetails = () => console.log("e");

  useEffect(() => {
    console.log("api call");
    const getCatsData = async () => {
      try {
        const dataCatsResponse: DataCatsResponse = await fetchCatsData();
        setCatsDetails(dataCatsResponse.images);
      } catch (error) {
        console.error(error);
      }
    };
    getCatsData();
  }, []);

  return (
    <CatsContext.Provider value={{ catsDetails, updateCatsDetails }}>
      {children}
    </CatsContext.Provider>
  );
};

export default CatsContext;
