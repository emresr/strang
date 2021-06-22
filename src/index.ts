import { numberToWords } from "./number";
import { charToWords } from "./char";
import { spell, morse, withNumbers } from "./string";

console.log(withNumbers("gf"));

module.exports = {
  spell,
  morse,
  numberToWords,
};
