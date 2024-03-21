type CatsResponse = {
  url: string;
  id: string;
  vote?: number;
};

type DataCatsResponse = {
  images: CatsResponse[];
};

type CatsContextType = {
  catsDetails: CatsResponse[];
  setCatsDetails: (cats: CatsResponse[]) => void;
};

export type { CatsResponse, DataCatsResponse, CatsContextType };
