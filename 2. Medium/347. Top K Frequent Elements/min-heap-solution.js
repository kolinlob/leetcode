/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = nums.reduce((m, c) => {
    m[c] = 1 + (m[c] || 0);
    return m;
  }, {});

  let heap = new MinPriorityQueue({ priority: ([k, v]) => v });
  for (let entry of Object.entries(map)) {
    heap.enqueue(entry);
    if (heap.size() > k) heap.dequeue();
  }

  return heap.toArray().map((x) => x.element[0]);
};
