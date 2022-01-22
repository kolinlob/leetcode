/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(...accounts.map((x) => x.reduce((acc, cur) => acc + cur, 0)));
};
