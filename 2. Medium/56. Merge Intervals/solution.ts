function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let merged: number[][] = [intervals.shift()];

  for (let i of intervals) {
    if (merged[merged.length - 1][1] < i[0]) merged.push([...i]);
    else merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], i[1]);
  }

  return merged;
}
