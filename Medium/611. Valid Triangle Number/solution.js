/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  const n = sorted.length;

  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < n - 1 && nums[i]; j++) {
      k = bs(k, n - 1, sorted[i] + sorted[j]);
      count += k - j;
    }
  }

  return count;

  function bs(lo, hi, tar) {
    while (lo <= hi && hi < n) {
      let mid = (lo + hi) >> 1;
      if (sorted[mid] < tar) lo = mid + 1;
      else hi = mid - 1;
    }
    return hi;
  }
};
