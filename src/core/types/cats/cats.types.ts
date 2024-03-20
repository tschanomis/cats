type CatsResponse = {
  url: string;
  id: string;
};

type DataCatsResponse = {
  images: CatsResponse[];
};

export type { CatsResponse, DataCatsResponse };
