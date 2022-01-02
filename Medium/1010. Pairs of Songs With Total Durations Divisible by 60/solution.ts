function numPairsDivisibleBy60(time: number[]): number {
  let seconds = new Array(60).fill(0),
      res = 0;

  for (let t of time) {
    let r = t % 60,
        i = r == 0 ? r : 60 - r;
    res += seconds[i];
    seconds[r] += 1;
  }

  return res;
}
