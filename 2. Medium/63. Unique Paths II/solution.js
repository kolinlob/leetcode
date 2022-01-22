/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (grid) {
    if (grid[0][0])
        return 0;

    var dp = new Array(grid.length);
    for (let i = 0; i < dp.length; i++)
        dp[i] = new Array(grid[0].length).fill(0);

    dp[0][0] = 1;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col]) continue;

            if (row > 0 && grid[row - 1][col] == 0)
                dp[row][col] += dp[row - 1][col];

            if (col > 0 && grid[row][col - 1] == 0)
                dp[row][col] += dp[row][col - 1];
        }
    }

    return dp[dp.length - 1][dp[0].length - 1]
};