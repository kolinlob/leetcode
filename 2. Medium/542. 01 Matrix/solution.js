/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const queue = new Queue();
    const distances = []

    for (let row = 0; row < mat.length; row++) {
        distances.push([]);
        for (let col = 0; col < mat[0].length; col++) {
            if (mat[row][col] == 0) {
                queue.enqueue([row, col]);
                distances[row].push(0);
            } else distances[row].push(Infinity);
        }
    }

    while (!queue.isEmpty()) {
        let [x, y] = queue.dequeue();
        for (let [dx, dy] of directions) {
            let x1 = x + dx;
            let y1 = y + dy;
            if (x1 < 0 || y1 < 0 || x1 >= mat.length || y1 >= mat[0].length)
                continue;

            if (distances[x1][y1] > distances[x][y] + 1) {
                distances[x1][y1] = distances[x][y] + 1;
                queue.enqueue([x1, y1]);
            }
        }
    }

    return distances;
};