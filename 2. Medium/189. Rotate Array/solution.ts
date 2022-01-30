function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  reverse(0, nums.length - 1);
  reverse(k, nums.length - 1);
  reverse(0, k - 1);

  function reverse(start: number, end: number): void {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
}
