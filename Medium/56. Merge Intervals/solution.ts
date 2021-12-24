function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let merged: number[][] = [];
  let first = intervals.shift();

  while (intervals.length > 0) {
    let second = intervals.shift();
    if (second[0] > first[1]) {
      merged.push([...first]);
      first = second;
    } else first = [first[0], Math.max(first[1], second[1])];
  }

  merged.push(first);
  return merged;
}
