/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let pairs = arrays.map((e, i) => ({ min: e[0], max: e[e.length - 1], i }));

  let minheap = new MinPriorityQueue({ priority: (a) => a.min });
  let maxheap = new MaxPriorityQueue({ priority: (a) => a.max });

  for (let pair of pairs) {
    minheap.enqueue(pair);
    maxheap.enqueue(pair);
  }

  let min = minheap.dequeue().element;
  let max = maxheap.dequeue().element;

  if (max.i == min.i)
    return Math.max(
      Math.abs(maxheap.front().element.max - min.min),
      Math.abs(max.max - minheap.front().element.min)
    );

  return Math.abs(max.max - min.min);
};
