function findComplement(num: number): number {
  let tmp = num, bit = 1;

  while (tmp > 0) {
    num ^= bit;
    bit <<= 1;
    tmp >>= 1;
  }

  return num;
}
