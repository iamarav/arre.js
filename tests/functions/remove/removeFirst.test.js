const { removeFirst } = require("../../../src/functions/remove");

describe("removeFirst", () => {
  it("check if function exists", () => {
    expect(removeFirst).toBeDefined();
  });

  // it("removes first 1", () => {
  //   expect(removeFirst([1, 2, 3, 4])).toStrictEqual([2, 3, 4]);
  // });
  // it("removes first 2", () => {
  //   expect(removeFirst([1, 2])).toStrictEqual([2]);
  // });
  it("removes first 3", () => {
    expect(removeFirst([1])).toStrictEqual([]);
  });
  it("removes first 3", () => {
    expect(removeFirst([])).toStrictEqual([]);
  });

  // it("throws error", () => {
  //   // expect(removeFirst({}));
  // });
});
