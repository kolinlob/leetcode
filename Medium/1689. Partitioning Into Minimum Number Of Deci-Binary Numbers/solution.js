/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max(...Array.from(n).map(Number));
};
