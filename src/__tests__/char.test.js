var { charToWords } = require("../char");

describe("Char  to words works correctly.", () => {
   test("should return Percent for numberToWords(%)", () => {
      expect(charToWords("%")).toBe("Percent ");
   });
});
