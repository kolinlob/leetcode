/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0, minprice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minprice = Math.min(minprice, prices[i - 1]);
    profit = Math.max(profit, prices[i] - minprice);
  }

  return profit;
};
