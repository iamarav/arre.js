const { isHomoArray } = require("../../../src/functions/check");

describe("isHomoArray", () => {
  it("check if function exists", () => {
    expect(isHomoArray).toBeDefined();
  });
  it("check if the blank array is homogeneous", () => {
    expect(isHomoArray([])).toBeTruthy();
  });
  it("check if the array is homogeneous", () => {
    expect(isHomoArray([1, 2, 3, 4, 5, 6])).toBeTruthy();
  });
  it("check if the array is not homogeneous", () => {
    expect(isHomoArray([1, 2, "hello", 3, 4, 5, 6])).toBeFalsy();
  });
});
