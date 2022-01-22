/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let map = nums.reduce((m, c) => {
    m[c] = m[c] + 1 || 1;
    return m;
  }, {});

  let start = 0, end = 0;

  for (let i = 0; i < 3; i++) {
    if (map[i]) {
      end += map[i];
      nums.fill(i, start, end);
      start = end;
    }
  }
};
