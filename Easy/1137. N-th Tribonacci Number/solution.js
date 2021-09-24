/**
 * @param {number} n
 * @return {number}
 */
const map = new Map();

var tribonacci = function (n) {
  if (n < 1) return 0;
  if (n < 3) return 1;

  if (!map.has(n - 1)) map.set(n - 1, tribonacci(n - 1));
  if (!map.has(n - 2)) map.set(n - 2, tribonacci(n - 2));
  if (!map.has(n - 3)) map.set(n - 3, tribonacci(n - 3));

  return map.get(n - 1) + map.get(n - 2) + map.get(n - 3);
};
