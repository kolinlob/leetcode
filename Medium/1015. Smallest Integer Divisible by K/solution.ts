function smallestRepunitDivByK(k: number): number {
  let len = 1,
      rem = 1,
      rems = new Set<number>();

  while (rem % k !== 0) {
    let n = rem * 10 + 1;
    rem = n % k;
    len++;

    if (rems.has(rem)) return -1;
    rems.add(rem);
  }

  return len;
}
