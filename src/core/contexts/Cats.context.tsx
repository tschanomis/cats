import { createContext, useState, ReactNode } from "react";

import { CatsResponse } from "../types/cats/cats.types";

export type CatsContextType = {
  catsDetails: CatsResponse[];
  setCatsDetails: (cats: CatsResponse[]) => void;
};

const CatsContext = createContext<CatsContextType | []>([]);

function CatsProvider({ children }: { children: ReactNode }) {
  const [catsDetails, setCatsDetails] = useState<CatsResponse[]>([]);

  return (
    <CatsContext.Provider value={{ catsDetails, setCatsDetails }}>
      {children}
    </CatsContext.Provider>
  );
}

export { CatsContext, CatsProvider };
