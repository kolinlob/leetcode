function kClosest(points: number[][], k: number): number[][] {
  let maxheap = new MaxPriorityQueue({
    priority: (a: { d: number; i: number }) => a.d,
  });

  for (let i = 0; i < points.length; ++i) {
    let [x, y] = points[i];
    maxheap.enqueue({ d: x * x + y * y, i });

    if (maxheap.size() > k) maxheap.dequeue();
  }

  let res = [];
  while (!maxheap.isEmpty())
    res.push(points[maxheap.dequeue().element.i]);

  return res;
}
