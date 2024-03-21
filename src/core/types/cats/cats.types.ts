type CatsResponse = {
  url: string;
  id: string;
  vote?: number;
};

type DataCatsResponse = {
  images: CatsResponse[];
};

export type { CatsResponse, DataCatsResponse };
