/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [[]];
  for (let k = 1; k < nums.length; k++)
    ans.push(...nchoosek(nums.length, k));

  ans.push(nums);
  return ans;

  function nchoosek(n, k) {
    const res = [];
    for (let i = 0; i < nums.length; i++)
      res.push(...choose([nums[i]], n - 1, k - 1, i + 1));

    return res;

    function choose(r, n, k, s) {
      if (k < 1) return [r];

      if (k == 1) {
        const x = [];
        for (let i = s; i < nums.length; i++) x.push([...r, nums[i]]);
        return x;
      }

      const y = [];
      for (let i = s; i < nums.length; i++)
        y.push(...choose([...r, nums[i]], n - 1, k - 1, i + 1));
      return y;
    }
  }
};
