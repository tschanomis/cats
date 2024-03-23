import { CatsResponse } from "../types/cats/cats.types";
export const sortedVotedCats = (cats: CatsResponse[]): CatsResponse[] => {
  const compareVotes = (a: CatsResponse, b: CatsResponse) => {
    const voteA = a.vote !== undefined ? a.vote : -cats.length;
    const voteB = b.vote !== undefined ? b.vote : -cats.length;
    return voteB - voteA;
  };
  const catsDetailsSorted: CatsResponse[] = [...cats].sort(compareVotes);
  return catsDetailsSorted;
};
