const names: any = {
   0: "Zero",
   1: "One",
   2: "Two",
   3: "Three",
   4: "Four",
   5: "Five",
   6: "Six",
   7: "Seven",
   8: "Eight",
   9: "Nine",
};
const Tens: any = {
   0: "",
   1: "Ten",
   2: "Twenty",
   3: "Thirty",
   4: "Fourty",
   5: "Fifty",
   6: "Sixty",
   7: "Seventy",
   8: "Eighty",
   9: "Ninety",
};
const Teens: any = {
   11: "Eleven",
   12: "Twelve",
   13: "Thirteen",
   14: "Fourteen",
   15: "Fifteen",
   16: "Sixteen",
   17: "Seventeen",
   18: "Eighteen",
   19: "Nineteen",
};
function each3(x: number) {
   const first = Math.floor(x / 100);
   const second = Math.floor((x % 100) / 10);
   const third = x % 10;
   if (first > 0) {
      if (second >= 2) {
         return (
            names[first] + " Hundred" + " " + Tens[second] + " " + names[third]
         );
      } else if (second == 0) {
         return (
            names[first] + " Hundred" + " " + Tens[second] + " " + names[third]
         );
      } else {
         return names[first] + " Hundred" + " " + Teens[x % 100];
      }
   } else {
      if (second >= 2) {
         return Tens[second] + " " + names[third];
      } else if (second == 0) {
         return names[third];
      } else {
         return Teens[x % 100];
      }
   }
}

function numberToWords(num: number) {
   const first3: number = each3(num % 1000);
   if (num < 1000) {
      return first3;
   } else {
      const second3: number = each3(Math.floor((num % 1000000) / 1000));
      if (num < 1000000) {
         return second3 + " Thousand " + first3;
      } else {
         const third3: number = each3(Math.floor((num % 1000000000) / 1000000));
         if (num < 1000000000) {
            return third3 + " Million " + second3 + " Thousand " + first3;
         } else {
            const forth3: number = each3(
               Math.floor((num % 1000000000000) / 1000000000)
            );
            if (num < 1000000000000) {
               return (
                  forth3 +
                  " Billion " +
                  third3 +
                  " Million " +
                  second3 +
                  " Thousand " +
                  first3
               );
            } else {
               const fifth3: number = each3(
                  Math.floor((num % 1000000000000000) / 1000000000000)
               );
               return (
                  fifth3 +
                  " Trillion " +
                  forth3 +
                  " Billion " +
                  third3 +
                  " Million " +
                  second3 +
                  " Thousand " +
                  first3
               );
            }
         }
      }
   }
}

export { numberToWords };
