class Solution {
    public int coinChange(int[] coins, int amount) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int coin : coins)
            pq.add(coin);

        double[] w = new double[amount + 1];
        Arrays.fill(w, Double.POSITIVE_INFINITY);
        w[0] = 0;

        while (!pq.isEmpty()) {
            int coin = pq.poll();

            for (int i = coin; i < w.length; i++)
                if (i - coin >= 0)
                    w[i] = Math.min(w[i - coin] + 1, w[i]);
        }

        return w[amount] == Double.POSITIVE_INFINITY ? -1 : (int) w[amount];
    }
}