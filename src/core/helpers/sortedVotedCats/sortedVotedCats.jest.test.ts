import { sortedVotedCats } from "./sortedVotedCats.helper";
import { CatsResponse } from "../../types/cats/cats.types";

describe("sortedVotedCats", () => {
  it("should return cats sorted by vote count in descending order", () => {
    const cats: CatsResponse[] = [
      { id: "id_1", url: "cat1.jpg", vote: 5 },
      { id: "id_2", url: "cat2.jpg", vote: 10 },
      { id: "id_3", url: "cat3.jpg", vote: 8 },
    ];

    const sortedCats: CatsResponse[] = sortedVotedCats(cats);

    expect(sortedCats).toEqual([
      { id: "id_2", url: "cat2.jpg", vote: 10 },
      { id: "id_3", url: "cat3.jpg", vote: 8 },
      { id: "id_1", url: "cat1.jpg", vote: 5 },
    ]);
  });

  it("should handle cats without vote count by placing them at the end of the sorted list", () => {
    const cats: CatsResponse[] = [
      { id: "id_1", url: "cat1.jpg", vote: 5 },
      { id: "id_2", url: "cat2.jpg" },
      { id: "id_3", url: "cat3.jpg", vote: 8 },
    ];

    const sortedCats: CatsResponse[] = sortedVotedCats(cats);

    expect(sortedCats).toEqual([
      { id: "id_3", url: "cat3.jpg", vote: 8 },
      { id: "id_1", url: "cat1.jpg", vote: 5 },
      { id: "id_2", url: "cat2.jpg" },
    ]);
  });

  it("should handle empty array of cats", () => {
    const sortedCats: CatsResponse[] = sortedVotedCats([]);

    expect(sortedCats).toEqual([]);
  });
});
