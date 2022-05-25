def to_roman(num):
    # write your code here!
    list = {
    1: "I",
    4: "IV",
    5: "V",
    44: "XLIV",
    9: "IX",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    944: "CMXLIV",
    1000: "M"
  }
    arr = [1000, 944, 500, 100, 50, 44, 10, 9, 5, 4, 1]
    roman = ""
    for i in arr:
        while num / i >= 1 :
            roman += list[i]
            num -= i
    
    
    return roman

print(to_roman(1000))