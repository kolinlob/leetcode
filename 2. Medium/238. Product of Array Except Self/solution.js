/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  let left = new Array(n).fill(1);
  let right = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
    right[n - i - 1] = nums[n - i] * right[n - i];
  }

  return nums.map((_, i) => left[i] * right[i]);
};
