function minMeetingRooms(intervals: number[][]): number {
  let ends = new MinPriorityQueue({ priority: (a) => a[1] });
  let rooms = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  for (let meeting of intervals) {
    if (ends.isEmpty() || meeting[0] < ends.front().element[1]) rooms += 1;
    else ends.dequeue();

    ends.enqueue(meeting);
  }

  return rooms;
}
