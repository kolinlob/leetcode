var fib = function (n) {
    if (n < 2)
        return n;

    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    const memo = (n, dp) => {
        if (dp[n] == undefined) {
            dp[n] = memo(n - 1, dp) + memo(n - 2, dp);
        }

        return dp[n];
    }

    return memo(n, dp);
};