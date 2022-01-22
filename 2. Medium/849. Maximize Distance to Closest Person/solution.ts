function maxDistToClosest(seats: number[]): number {
  let left = 0;
  while (seats[left] == 0) left++;

  let right = 0;
  while (seats[seats.length - 1 - right] == 0) right++;

  let mid = 0, cur = 0;
  for (let i = left; i < seats.length - right; ++i) {
    if (seats[i] == 1) cur = 0;
    else cur++;
    mid = Math.max(mid, (cur + 1) >> 1);
  }

  return Math.max(left, mid, right);
}
