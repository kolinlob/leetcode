function subsets(nums: number[]): number[][] {
  const res = [[]];

  for (let i = 0; i < nums.length; ++i) {
    const len = res.length;
    for (let j = 0; j < len; ++j)
        res.push([...res[j], nums[i]]);
  }

  return res;
}
