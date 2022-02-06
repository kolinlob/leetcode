function removeDuplicates(nums: number[]): number {
  let i = 1, count = 1;

  while (i < nums.length) {
    if (nums[i - 1] == nums[i]) count++;
    else count = 1;

    while (count > 2) {
      nums.splice(i, 1);
      count--;

      if (nums[i - 1] == nums[i]) count++;
      if (count < 3) count = 1;
    }

    i++;
  }

  return nums.length;
}
