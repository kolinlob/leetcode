class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int price = Integer.MAX_VALUE;

        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < price)
                price = prices[i];
            else if (prices[i] - price > profit)
                profit = prices[i] - price;
        }

        return profit;
    }
}
