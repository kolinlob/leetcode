function maxProfit(prices: number[]): number {
  let profit = 0, cost = -Infinity;

  for (let price of prices) {
    profit = Math.max(profit, cost + price);
    cost = Math.max(cost, -price);
  }

  return profit;
}
