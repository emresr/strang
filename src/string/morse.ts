const names: any = {
  A: "._",
  B: "_...",
  C: "_._.",
  D: "_..",
  E: ".",
  F: ".._.",
  G: "__.",
  H: "....",
  I: "..",
  J: ".___",
  K: "_._",
  L: "._..",
  M: "__",
  N: "_.",
  O: "___",
  P: ".__.",
  Q: "__._",
  R: "._.",
  S: "...",
  T: "_",
  U: ".._",
  V: "..._",
  W: ".__",
  X: "_.._",
  Y: "_.__",
  Z: "__.",
};

function morse(text: string) {
  let result: string = names[text[0].toUpperCase()];
  for (let i = 1; i < text.length; i++) {
    result = result + " " + names[text[i].toUpperCase()];
  }
  return result;
}

export { morse };
