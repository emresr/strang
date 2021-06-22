var { spell } = require("../string/");

describe("Spell works correctly.", () => {
   test("should return Alpha Bravo Charlie for spell(ABC) ", () => {
      expect(spell("ABC")).toBe("Alpha Bravo Charlie");
   });
   test("should return Lima Mike Alpha Oscar for spell(LMAO) ", () => {
      expect(spell("LMAO")).toBe("Lima Mike Alpha Oscar");
   });
   test("handling lowercase characters works correctly.should return Lima Mike Alpha Oscar for spell(lmao)", () => {
      expect(spell("lmao")).toBe("Lima Mike Alpha Oscar");
   });
});
