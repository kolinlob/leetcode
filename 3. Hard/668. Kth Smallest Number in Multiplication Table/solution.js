/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let lo = 1, hi = m * n;

  while (lo <= hi) {
    let mid = (lo + hi) >> 1;
    let count = countSmaller(mid);

    if (count >= k) hi = mid - 1;
    else lo = mid + 1;
  }

  return lo;

  function countSmaller(x) {
    let c = 0;
    for (let i = 1; i <= m; i++)
        c += Math.min((x / i) >> 0, n);
    return c;
  }
};
