/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] == nums[i + 1]) i++;
    bt([], nums[i], [...nums.slice(0, i), ...nums.slice(i + 1)]);
  }

  return res;

  function bt(arr, k, cnd) {
    if (arr.length + 1 == nums.length) return res.push([...arr, k]);

    for (let j = 0; j < cnd.length; j++) {
      while (cnd[j] == cnd[j + 1]) j++;
      bt([...arr, k], cnd[j], [...cnd.slice(0, j), ...cnd.slice(j + 1)]);
    }
  }
};
