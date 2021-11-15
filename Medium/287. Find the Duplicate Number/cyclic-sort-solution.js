/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = nums[i] - 1;
    while (i < nums.length && nums[i] !== nums[j] && i !== j) {
      j = nums[i] - 1;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++)
    if (nums[i] !== i + 1)
        return nums[i];

  return -1;
};
