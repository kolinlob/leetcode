var minimumTotal = function (triangle) {
    var res = 0;
    for (let row = 1; row < triangle.length; row++) {
        for (let i = 0; i < triangle[row].length; i++) {
            if (i == 0) {
                triangle[row][i] += triangle[row - 1][i];
            } else if (i == triangle[row].length - 1) {
                triangle[row][i] += triangle[row - 1][i - 1];
            } else {
                triangle[row][i] += Math.min(triangle[row - 1][i], triangle[row - 1][i - 1]);
            }
        }
    }
    return Math.min(...triangle[triangle.length - 1]);
};