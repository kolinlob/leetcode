/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    const m = matrix.length+1;
    const n = matrix[0].length+1;
    this.dp = Array.from({length: m}, () => new Array(n).fill(0));
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) 
            this.dp[r][c] = matrix[r-1][c-1] + 
                            this.dp[r-1][c] +
                            this.dp[r][c-1] - 
                            this.dp[r-1][c-1];
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2+1][col2+1] +
           this.dp[row1][col1] -
           this.dp[row1][col2+1] -
           this.dp[row2+1][col1];
};