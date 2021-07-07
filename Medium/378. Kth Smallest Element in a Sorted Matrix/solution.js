/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length, pq = new MinPriorityQueue();

  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
        pq.enqueue(matrix[i][j]);

  while (--k > 0) pq.dequeue();

  return pq.front().element;
};
