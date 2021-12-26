function kClosest(points: number[][], k: number): number[][] {
  let maxheap = new MaxPriorityQueue({
    priority: (a: { d: number; i: number }) => a.d,
  });

  for (let [i, [x, y]] of points.entries()) {
    maxheap.enqueue({ d: Math.sqrt(x * x + y * y), i });

    if (maxheap.size() > k) maxheap.dequeue();
  }

  let res = [];
  while (!maxheap.isEmpty())
    res.push(points[maxheap.dequeue().element.i]);

  return res;
}
