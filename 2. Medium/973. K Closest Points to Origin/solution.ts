function kClosest(points: number[][], k: number): number[][] {
  let maxheap = new MaxPriorityQueue();

  for (let [x, y] of points) {
    maxheap.enqueue([x, y], x * x + y * y);
    if (maxheap.size() > k) maxheap.dequeue();
  }

  return maxheap.toArray().map((x) => x.element);
}
