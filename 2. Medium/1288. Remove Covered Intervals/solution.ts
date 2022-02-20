function removeCoveredIntervals(intervals: number[][]): number {
  const heap = intervals.reduce((h, c) => {
    h.enqueue(c); return h;
  }, new MinPriorityQueue({ priority: ([a, b]) => a }));

  let res = intervals.length;
  let [a, b] = heap.dequeue().element;

  while (heap.isEmpty() == false) {
    let [c, d] = heap.dequeue().element;
    if (a <= c && d <= b) res--;
    else {
      if (c <= a && b <= d) res--;
      a = c;
      b = d;
    }
  }

  return res;
}
