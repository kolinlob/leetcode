/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(arr, from, to) {
    while (from < to) {
      [arr[to], arr[from]] = [arr[from], arr[to]];
      from++;
      to--;
    }
  }
};
