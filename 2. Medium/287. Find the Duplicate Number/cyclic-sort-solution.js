/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = nums[i] - 1;
    while (nums[i] !== nums[j]) {
      j = nums[i] - 1;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    if (nums[i] !== i + 1)
      return nums[i];
  }

  return -1;
};
