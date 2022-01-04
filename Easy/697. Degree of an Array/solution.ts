function findShortestSubArray(nums: number[]): number {
  let f = {}, mf = 0;
  for (let num of nums) {
    f[num] = 1 + (f[num] || 0);
    mf = Math.max(mf, f[num]);
  }

  let ix = {};
  for (let [i, num] of nums.entries())
    if (f[num] == mf) {
      if (ix[num] == undefined)
        ix[num] = { min: nums.length - 1, max: 0 };

      ix[num].min = Math.min(ix[num].min, i);
      ix[num].max = Math.max(ix[num].min, i);
    }

  let res = nums.length;
  for (let e in ix)
    res = Math.min(res, ix[e].max - ix[e].min + 1);

  return res;
}
