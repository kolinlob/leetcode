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
      while (k < n && sorted[i] + sorted[j] > sorted[k]) k++;
      count += k - j - 1;
    }
  }

  return count;
};
