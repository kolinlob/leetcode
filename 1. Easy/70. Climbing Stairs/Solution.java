class Solution {
    public int climbStairs(int n) {
        if (n <= 0)
            return 0;
        if (n == 1)
            return 1;
        if (n == 2)
            return 2;

        int twoStairsBehind = 1;
        int oneStairBehind = 2;
        int steps = 0;

        for (int i = 3; i <= n; i++) {
            steps = oneStairBehind + twoStairsBehind;
            twoStairsBehind = oneStairBehind;
            oneStairBehind = steps;
        }

        return steps;
    }
}
