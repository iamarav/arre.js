const { isSortedArray } = require("../../../src/functions/check");

describe("isSortedArray", () => {
  it("check if function exists", () => {
    expect(isSortedArray).toBeDefined();
  });

  const sortedArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const sortedArray2 = [-701, -82, 14, 35, 64, 127, 282, 391, 1000, 20113];

  const unsortedArray1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  it("should return true, Sorted Array 1 Passed", () => {
    expect(isSortedArray(sortedArray1)).toBeTruthy();
  });
  it("should return true, Sorted Array 2 Passed", () => {
    expect(isSortedArray(sortedArray2)).toBeTruthy();
  });
  it("should return false, unsorted Array 1 Passed", () => {
    expect(isSortedArray(unsortedArray1)).toBeFalsy();
  });
  // it("should return error, object Passed", () => {
  //   expect(isSortedArray({})).toThrow();
  //   // expect(isSortedArray({})).toThrowError();
  // });
});
