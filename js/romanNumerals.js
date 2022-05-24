// exports.toRoman = function (num) {

function toRoman(num) {
  const list = {
    1: "I",
    4: "IV",
    5: "V",
    14: "XIV",
    44: "XLIV",
    9: "IX",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    944: "CMXLIV",
    1000: "M",
  };

  let arr = [1000, 944, 500, 100, 50, 44, 14, 10, 9, 5, 4, 1];
  let roman = "";
  //   let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    while (num / arr[i] >= 1) {
      roman += list[arr[i]];
      num -= arr[i];
    }

    // while (num >= +i) {
    //   console.log(num);
    //   roman += list[i];
    //   num -= +i;
    // }
  }
  return roman;
}

// console.log(toRoman(1));
// console.log(toRoman(3));
console.log(toRoman(12));
