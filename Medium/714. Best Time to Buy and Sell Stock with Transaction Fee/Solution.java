class Solution {
    public int maxProfit(int[] prices, int fee) {
        int profit = 0;
        int expense = -1 * prices[0];

        for (int i = 1; i < prices.length; i++) {
            profit = Math.max(profit, expense + prices[i] - fee);
            expense = Math.max(expense, profit - prices[i]);
        }

        return profit;
    }
}