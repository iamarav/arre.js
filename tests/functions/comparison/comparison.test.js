const { areSameArrays } = require("../../../src/functions/comparison/index");

describe("areSameArrays", () => {
  const sample = [1, 2, 3, 4, 5],
    same = [1, 2, 3, 4, 5],
    diffLength = [1, 2, 3, 4, 5, 6],
    diffElements = [1, 2, 3, 4, 6];

  it("check if function exists", () => {
    expect(areSameArrays).toBeDefined();
  });
  it("check if function is of type Function", () => {
    expect(typeof areSameArrays).toBe("function");
  });
  it("should return true (Same Array passed)", () => {
    expect(areSameArrays(sample, same)).toBeTruthy();
  });
  it("should return false (Same different length passed)", () => {
    expect(areSameArrays(sample, diffLength)).toBeFalsy();
  });
  it("should return false (Same different element passed)", () => {
    expect(areSameArrays(sample, diffElements)).toBeFalsy();
  });
});
