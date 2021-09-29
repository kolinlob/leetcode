/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  for (let i = 0, j = 0; i < nums.length; i++) {
    j = i + 1;
    while ((i % 2 == 0) ^ (nums[i] % 2 == 0)) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }

  return nums;
};
