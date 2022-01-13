function findMinArrowShots(points: number[][]): number {
  if (points.length <= 1) return points.length;

  let minArrows = points.length;

  points.sort((a, b) => a[0] - b[0]);

  let x = [-Infinity, -Infinity];

  for (let balloon of points) {
    if (balloon[0] <= x[1] && x[0] <= balloon[1]) {
      x = [Math.max(x[0], balloon[0]), Math.min(x[1], balloon[1])];
      minArrows -= 1;
    } else x = balloon;
  }

  return minArrows;
}
