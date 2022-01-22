/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const map = new Map();

  return memo(n);

  function memo(n) {
    if (n < 1) return 0;
    if (n < 3) return 1;

    if (!map.has(n - 1)) map.set(n - 1, memo(n - 1));
    if (!map.has(n - 2)) map.set(n - 2, memo(n - 2));
    if (!map.has(n - 3)) map.set(n - 3, memo(n - 3));

    return map.get(n - 1) + map.get(n - 2) + map.get(n - 3);
  }
};
