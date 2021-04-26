/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    var pq = new MinPriorityQueue();
    for (let h = 0; h < heights.length - 1; h++) {
        let d = heights[h + 1] - heights[h];
        if (d > 0) {
            pq.enqueue(d, d);
        }

        if (pq.size() > ladders) {
            bricks -= pq.dequeue().priority;
        }

        if (bricks < 0) {
            return h;
        }
    }

    return heights.length - 1;
};