/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = nums[i] - 1;
    while (i < nums.length && nums[i] != nums[j]) {
      j = nums[i] - 1;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  let res = [];
  for (let i = 0; i < nums.length; i++)
    if (nums[i] != i + 1)
        res.push(i + 1);

  return res;
};
