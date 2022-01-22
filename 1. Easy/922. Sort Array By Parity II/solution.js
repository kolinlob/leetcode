/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while ((i % 2 == 0) ^ (nums[i] % 2 == 0)) {
      nums.push(nums.splice(i, 1));
    }
  }

  return nums;
};
