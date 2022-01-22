function findComplement(num: number): number {
  let res = 0, i = 31;

  while (num >> i == 0) i--;
  while (i >= 0) res |= (~(num >> i) & 1) << i--;

  return res;
}
