/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jset = new Set(jewels);
  return stones.split("").reduce((j, s) => j + (jset.has(s) ? 1 : 0), 0);
};
