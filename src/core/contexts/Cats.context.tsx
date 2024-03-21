import { createContext, useState, useEffect, ReactNode } from "react";

import { fetchCatsData } from "../../core/api/api.service";

import {
  DataCatsResponse,
  CatsResponse,
  CatsContextType,
} from "../../core/types/cats/cats.types";

const CatsContext = createContext<CatsContextType>({
  catsDetails: [],
  setCatsDetails: () => {},
});

export const CatsProvider = ({ children }: { children: ReactNode }) => {
  const [catsDetails, setCatsDetails] = useState<CatsResponse[]>([]);

  useEffect(() => {
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
    <CatsContext.Provider value={{ catsDetails, setCatsDetails }}>
      {children}
    </CatsContext.Provider>
  );
};

export default CatsContext;
