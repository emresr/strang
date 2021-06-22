import { numberToWords } from "../number";
import { spell } from "./spell";
import { charToWords } from "../char";

const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function withNumbers(text: any) {
  const search: any = 1;
  const isNumber: RegExp = /\d/;
  // const x = text.search(isNumber);
  const x = isNumber.test(text);
  if (!isNumber.test(text)) {
    return text;
  } else {
    return text;
  }
}

// /^[0-9]*$/
