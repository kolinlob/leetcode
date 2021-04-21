var generate = function (numRows) {
    var res = [[1]];

    for (let last = 1; last < numRows; last++) {
        let prev = res[last - 1];
        let row = [1];
        for (let i = 1; i < prev.length; i++) {
            row.push(prev[i - 1] + prev[i]);
        }
        row.push(1);
        res.push(row);
    }

    return res;
};