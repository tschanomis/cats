import { findMostVotedCat } from "./findMostVotedCat.helpers";

import { CatsResponse } from "../../types/cats/cats.types";

describe("findMostVotedCat", () => {
  it("should return the cat with the most votes", () => {
    const cats: CatsResponse[] = [
      { id: "id_1", url: "url_1", vote: 5 },
      { id: "id_2", url: "url_2", vote: 10 },
      { id: "id_3", url: "url_3", vote: 8 },
    ];

    const mostVotedCat = findMostVotedCat(cats);

    expect(mostVotedCat).toEqual({ id: "id_2", url: "url_2", vote: 10 });
  });

  it("should return the first cat with the most votes in case of tie", () => {
    const cats: CatsResponse[] = [
      { id: "id_1", url: "url_1", vote: 1 },
      { id: "id_2", url: "url_2", vote: 1 },
      { id: "id_3", url: "url_3", vote: 1 },
    ];

    const mostVotedCat = findMostVotedCat(cats);

    expect(mostVotedCat).toEqual({ id: "id_1", url: "url_1", vote: 1 });
  });
});
