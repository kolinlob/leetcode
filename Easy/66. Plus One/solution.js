/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1]++;

  if (digits[digits.length - 1] > 9) {
    for (let i = digits.length - 1; i > 0 && digits[i] > 9; i--) {
      digits[i] %= 10;
      digits[i - 1] += 1;
    }

    if (digits[0] > 9) {
      digits[0] %= 10;
      digits.unshift(1);
    }
  }

  return digits;
};
