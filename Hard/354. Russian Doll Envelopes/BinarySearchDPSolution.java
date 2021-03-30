class Solution {
    public int maxEnvelopes(int[][] envelopes) {
        Arrays.sort(envelopes, (a, b) -> a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);
        int[] dp = new int[envelopes.length];

        int lis = 0;
        for (int[] e : envelopes) {
            int x = Arrays.binarySearch(dp, 0, lis, e[1]);
            if (x < 0)
                x = -(x + 1);

            dp[x] = e[1];

            if (x == lis)
                lis++;
        }
        return lis;
    }
}