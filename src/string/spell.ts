import { names, westernunion, french } from "../assets/spell";

function spell(text: string, type: string) {
  const lmao: any = !type
    ? names
    : (type = "westernunion"
        ? westernunion
        : (type = "french" ? french : null));
  let result: string = lmao[text[0].toUpperCase()];
  for (let i = 1; i < text.length; i++) {
    result = result + " " + lmao[text[i].toUpperCase()];
  }
  return result;
}

export { spell };
