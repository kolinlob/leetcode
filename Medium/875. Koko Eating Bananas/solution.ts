function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1, hi = piles.reduce((m, c) => Math.max(m, c), -Infinity);

  while (lo < hi) {
    let mid = (lo + hi) >> 1;

    if (feats(mid)) hi = mid;
    else lo = mid + 1;
  }

  return lo;

  function feats(v: number): boolean {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / v);
      if (hours > h) return false;
    }

    return hours <= h;
  }
}
