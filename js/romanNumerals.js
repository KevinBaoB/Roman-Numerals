// exports.toRoman = function(num) {

// };
function toRoman(num) {
  let list = {
    1: "I",
    2: "II",
    3: "III",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    4: "IV",
    9: "IX",
    14: "XIV",
    44: "XLIV",
    944: "CMXLIV",
  };
  return list[num];
}

console.log(toRoman(1));
console.log(toRoman(3));
console.log(toRoman(4));
