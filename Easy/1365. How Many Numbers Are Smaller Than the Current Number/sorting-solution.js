/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b);

  let res = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; ++i)
    res[i] = sorted.indexOf(nums[i]);

  return res;
};
