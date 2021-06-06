/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  return new Array(n).fill("").map((x, i) => {
    if ((i + 1) % 3 == 0) x += "Fizz";
    if ((i + 1) % 5 == 0) x += "Buzz";
    if (x == "") x += i + 1;
    return x;
  });
};
