/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = nums[i] - 1;
    while (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[j]) {
      j = nums[i] - 1;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++)
    if (nums[i] != i + 1)
        return i + 1;

  return nums.length + 1;
};
