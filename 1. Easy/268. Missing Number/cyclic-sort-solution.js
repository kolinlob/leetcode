/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++)
    while (nums[i] < nums.length && nums[i] !== nums[nums[i]]) {
      let j = nums[i];
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }


  for (let i = 0; i < nums.length; i++)
    if (nums[i] !== i) return i;

  return nums.length;
};
