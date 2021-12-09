const { isArray } = require("../../../src/functions/check");

describe("isArray", () => {
  it("check if function exists", () => {
    expect(isArray).toBeDefined();
  });
  it("check if function is of type Function", () => {
    expect(typeof isArray).toBe("function");
  });
  it("should return true (Array passed)", () => {
    expect(isArray([])).toBeTruthy();
  });
  it("should return false (Object passed)", () => {
    expect(isArray({})).toBeFalsy();
  });
  it("should return false (String passed)", () => {
    expect(isArray("")).toBeFalsy();
  });
  it("should return false (Number passed)", () => {
    expect(isArray(34)).toBeFalsy();
  });
});
