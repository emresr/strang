var { numberToWords } = require("../number");
var { spell } = require("./spell");
var { charToWords } = require("../char");

const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function withNumbers(text: string) {
   const x = numberToWords(parseInt(text));

   return x;
}
