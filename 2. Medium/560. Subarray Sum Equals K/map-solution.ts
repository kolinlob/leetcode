function subarraySum(nums: number[], k: number): number {
  let map = new Map<number, number>([[0, 1]]),
      res = 0,
      sum = 0;

  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];

    if (map.has(sum - k))
        res += map.get(sum - k);

    map.set(sum, 1 + (map.get(sum) ?? 0));
  }

  return res;
}
