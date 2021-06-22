import { names, westernunion, french } from "../assets/spell";

function some(type: string) {
   return !type
      ? names
      : (type = "westernunion"
           ? westernunion
           : (type = "french" ? french : null));
}
function spell(text: string, type: string) {
   let lmao: any = some(type);
   let result: string = lmao[text[0].toUpperCase()];
   for (let i = 1; i < text.length; i++) {
      result = result + " " + lmao[text[i].toUpperCase()];
   }
   return result;
}

export { spell };
