/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();
  while (!set.has(n)) {
    set.add(n);
    n = sumDigitsSquares(n);
    if (n == 1) return true;
  }

  return false;

  function sumDigitsSquares(n) {
    let res = 0;
    while (n > 0) {
      let x = n % 10;
      res += x * x;
      n = (n / 10) >> 0;
    }
    return res;
  }
};
