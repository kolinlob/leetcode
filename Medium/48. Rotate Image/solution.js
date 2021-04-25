var rotate = function (matrix) {
    for (let i = 0; i <= matrix.length - 2; i++) {
        for (let j = i + 1; j <= matrix.length - 1; j++) {
            var t = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = t;
        }
    }

    for (let row of matrix) {
        row = row.reverse();
    }
};