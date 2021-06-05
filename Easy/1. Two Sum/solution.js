var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let seek = target - nums[i];
    if (map.has(seek))
        return [map.get(seek), i];

    map.set(nums[i], i);
  }

  return null;
};
