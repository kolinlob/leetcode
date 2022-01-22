/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    var res = [];

    for (let r = 0; r <= rowIndex; r++)
        res.push(new Array(r + 1));

    for (let c = 0; c <= rowIndex; c++)
        res[rowIndex][c] = f(rowIndex, c);

    return res[rowIndex];


    function f(row, col) {
        if (row <= 0 || col <= 0 || row == col)
            return 1;

        if (!res[row][col])
            res[row][col] = f(row - 1, col - 1) + f(row - 1, col);

        return res[row][col];
    }
};