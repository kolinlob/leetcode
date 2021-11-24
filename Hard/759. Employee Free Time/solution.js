/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {
  let sch = [...schedule];
  let heap = new MinPriorityQueue({ priority: (x) => x.start });
  let result = [];

  for (let i = 0; i < sch.length; i++)
    heap.enqueue({ ...sch[i].shift(), eid: i });

  let prev = heap.front().element;
  while (!heap.isEmpty()) {
    let next = heap.dequeue().element;
    if (prev.end < next.start) {
      result.push({ start: prev.end, end: next.start });
      prev = next;
    } else if (prev.end < next.end) prev = next;

    if (sch[next.eid]?.length > 0)
      heap.enqueue({ ...sch[next.eid].shift(), eid: next.eid });
  }

  return result;
};
