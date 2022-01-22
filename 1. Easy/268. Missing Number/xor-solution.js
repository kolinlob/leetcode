/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++)
    res ^= i ^ nums[i];
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  return nums.reduce((res, cur, i) => res ^ cur ^ i, nums.length);
};
