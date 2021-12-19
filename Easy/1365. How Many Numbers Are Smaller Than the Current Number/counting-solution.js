/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let counts = new Array(101).fill(0);
  for (let i = 0; i < nums.length; ++i)
    counts[nums[i]]++;

  for (let i = 1; i < counts.length; ++i)
    counts[i] += counts[i - 1];

  let res = new Array(nums.length).fill(0);
  for (let i = 0; i < res.length; ++i) {
    if (nums[i] == 0)
        res[i] = 0;
    else
        res[i] = counts[nums[i] - 1];
  }

  return res;
};
