const names: any = {
   ".": "E",
   "..": "I",
   "...": "S",
   "....": "H",
   "..._": "V",
   ".._": "U",
   ".._.": "F",
   "._": "A",
   "._.": "R",
   "._..": "L",
   ".__": "W",
   ".__.": "P",
   ".___": "J",
   _: "T",
   "_.": "N",
   "_..": "D",
   "_...": "B",
   "_.._": "X",
   "_._": "K",
   "_._.": "C",
   "_.__": "Y",
   __: "M",
   "__.": "Z",
   "__._": "Q",
   ___: "O",
};

function demorse(text: string) {
   let result: string = names[text[0]];
   for (let i = 1; i < text.length; i++) {
      result = result + " " + names[text[i]];
   }
   return result;
}

export { demorse };
