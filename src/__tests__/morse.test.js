var { morse } = require("../string");

describe("Morse works correctly.", () => {
  test("Should return _ . ... _ for morse(test) ", () => {
    expect(morse("TEST")).toBe("_ . ... _");
  });
});
