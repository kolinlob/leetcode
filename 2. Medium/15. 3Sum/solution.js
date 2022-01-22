/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;

    if (i == 0 || nums[i] != nums[i - 1]) {
      let lo = i + 1, hi = nums.length - 1, tar = -nums[i];

      while (lo < hi) {
        if (nums[lo] + nums[hi] == tar) {
          res.push([nums[i], nums[lo], nums[hi]]);

          while (lo < hi && nums[lo] == nums[lo + 1]) lo++;
          lo++;
          while (lo < hi && nums[hi] == nums[hi - 1]) hi--;
          hi--;
        } else if (nums[lo] + nums[hi] < tar) {
          while (lo < hi && nums[lo] == nums[lo + 1]) lo++;
          lo++;
        } else {
          while (lo < hi && nums[hi] == nums[hi - 1]) hi--;
          hi--;
        }
      }
    }
  }

  return res;
};
