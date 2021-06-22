var { numberToWords } = require("../number");

describe("Number to words works correctly.", () => {
  test("should return One Hundred Twenty Three for numberToWords(123)", () => {
    expect(numberToWords(123)).toBe("One Hundred Twenty Three");
  });
});
