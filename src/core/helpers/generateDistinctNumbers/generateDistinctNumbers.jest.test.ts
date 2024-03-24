import { generateDistinctNumbers } from "./generateDistinctNumbers.helpers";

describe("generateDistinctNumbers", () => {
  it("should return an array of two distinct numbers less than maxLength", () => {
    const maxLength = 100;
    const result: number[] = generateDistinctNumbers(maxLength);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);

    expect(typeof result[0]).toBe("number");
    expect(typeof result[1]).toBe("number");

    expect(result[0]).not.toBe(result[1]);
  });

  it("should return an empty array if maxLength is less than or equal to 2", () => {
    expect(generateDistinctNumbers(0)).toEqual([]);
    expect(generateDistinctNumbers(1)).toEqual([]);
    expect(generateDistinctNumbers(2)).toEqual([]);
  });
});
