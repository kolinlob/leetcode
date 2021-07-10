/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    prmt([nums[i]], [...nums.slice(0, i), ...nums.slice(i + 1)]);
  }

  return res;

  function prmt(per, arr) {
    if (per.length == nums.length) {
      res.push(per);
      return;
    }

    for (let j = 0; j < arr.length; j++) {
      prmt([...per, arr[j]], [...arr.slice(0, j), ...arr.slice(j + 1)]);
    }
  }
};
