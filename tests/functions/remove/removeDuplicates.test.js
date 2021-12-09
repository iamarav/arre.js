const {
  default: removeDuplicates,
} = require("../../../src/functions/remove/removeDuplicates");

describe("removeDuplicates", () => {
  const sampleArray = [1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5],
    sampleArrayOutput = [1, 2, 3, 4, 5];

  it("check if function exists", () => {
    expect(removeDuplicates).toBeDefined();
  });

  it("removes duplicates", () => {
    expect(removeDuplicates(sampleArray)).toStrictEqual(sampleArrayOutput);
  });

  // it("throws error", () => {
  //   // expect(removeDuplicates({}));
  // });
});
