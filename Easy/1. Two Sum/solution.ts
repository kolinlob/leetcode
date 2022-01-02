function twoSum(nums: number[], target: number): number[] {
  let map = {};

  for (let i = 0; i < nums.length; ++i) {
    let comp = target - nums[i];

    if (map[comp] != undefined)
        return [map[comp], i];

    map[nums[i]] = i;
  }

  return undefined;
}
