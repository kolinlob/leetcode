function addBinary(a: string, b: string): string {
  if (+a == 0) return b;
  if (+b == 0) return a;

  let len = Math.max(a.length, b.length),
    res = new Array(len).fill(0),
    carry = 0;

  if (a.length < len) a = a.padStart(len, "0");
  if (b.length < len) b = b.padStart(len, "0");

  for (let i = len - 1; i >= 0; --i) {
    if (a[i] == b[i]) {
      res[i] = carry;
      carry = +a[i] == 1 ? 1 : 0;
    } else res[i] = carry == 1 ? 0 : 1;
  }

  if (carry == 1) res.unshift(carry);

  return res.join("").replace(/^0+/g, "");
}
