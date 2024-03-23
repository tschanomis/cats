import { CatsResponse } from "../types/cats/cats.types";

export const findMostVotedCat = (cats: CatsResponse[]): CatsResponse =>
  cats.reduce((maxVotedCat, currentCat) =>
    !maxVotedCat ||
    (currentCat.vote !== undefined &&
      (maxVotedCat.vote === undefined || currentCat.vote > maxVotedCat.vote))
      ? currentCat
      : maxVotedCat
  );
