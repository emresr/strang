import { charNames } from "../assets/char";

const lmao = ["%", ",", ".", "+"];

function charToWords(text: any) {
   let final: string =
      lmao.findIndex((value) => value == text[0]) == -1
         ? text[0]
         : charNames[text[0]];

   for (let i = 1; i < text.length; i++) {
      if (lmao.findIndex((value) => value == text[i]) == -1) {
         final = final + text[i];
      } else {
         final = final + " " + charNames[text[i]];
      }
   }
   return final;
}

export { charToWords };
