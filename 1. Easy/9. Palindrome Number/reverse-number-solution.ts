function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let r = 0, n = x;
  while (n != 0) {
    r = r * 10 + n % 10;
    n = (n / 10) >> 0;
  }

  return r == x;
}
