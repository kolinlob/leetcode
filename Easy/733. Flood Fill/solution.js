/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const originalColor = image[sr][sc];

    function fill(row, col) {
        if (row < 0 || col < 0 || row >= image.length || col >= image[0].length)
            return;

        if (image[row][col] != originalColor)
            return;

        image[row][col] = newColor;
        for (let dir of directions) {
            fill(row + dir[0], col + dir[1]);
        }
    }

    if (originalColor != newColor)
        fill(sr, sc);

    return image;
};