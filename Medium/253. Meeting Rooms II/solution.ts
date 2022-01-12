function minMeetingRooms(intervals: number[][]): number {
  let starts = new MinPriorityQueue({ priority: (a) => a[0] });
  let ends = new MinPriorityQueue({ priority: (a) => a[1] });
  let rooms = 0;

  for (let interval of intervals) starts.enqueue(interval);

  while (!starts.isEmpty()) {
    let current = starts.dequeue().element;

    if (ends.isEmpty() || current[0] < ends.front().element[1]) rooms += 1;
    else ends.dequeue();

    ends.enqueue(current);
  }

  return rooms;
}
