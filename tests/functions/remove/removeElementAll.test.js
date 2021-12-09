const {
  default: removeElementAll,
} = require("../../../src/functions/remove/removeElementAll");

describe("removeElementAll", () => {
  it("check if function exists", () => {
    expect(removeElementAll).toBeDefined();
  });

  it("removes element - single 1", () => {
    expect(removeElementAll([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 4, 5]);
  });

  it("removes element - multiple occurrence", () => {
    expect(removeElementAll([1, 2, 3, 3, 4, 5], 3)).toStrictEqual([1, 2, 4, 5]);
  });

  // it("throws error", () => {
  //   // expect(removeElementAll({}));
  // });
});
