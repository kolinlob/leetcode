function minMeetingRooms(intervals: number[][]): number {
  let ongoing = new MinPriorityQueue({ priority: (a) => a[1] });
  let rooms = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  for (let meeting of intervals) {
    if (ongoing.isEmpty() || meeting[0] < ongoing.front().element[1]) rooms += 1;
    else ongoing.dequeue();

    ongoing.enqueue(meeting);
  }

  return rooms;
}
