/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    return memo(n);

    function memo(n) {
        if (dp[n] == undefined) {
            dp[n] = memo(n - 1) + memo(n - 2);
        }
        return dp[n];
    }
};