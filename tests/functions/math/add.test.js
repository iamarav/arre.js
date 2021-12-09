const { addValues } = require("../../../src/functions/math/add");

describe("addValues Definition", () => {
  it("should be defined", () => {
    expect(addValues).toBeDefined();
  });

  it("should return 15", () => {
    expect(addValues(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should return 1", () => {
    expect(addValues(1)).toBe(1);
  });

  it("should return 0", () => {
    expect(addValues(0, 0, 0, 0, 0, 0, 0)).toBe(0);
  });
});
