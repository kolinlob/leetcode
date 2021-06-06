/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let max = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let streak = 1;
      while (set.has(num + streak)) {
        streak++;
      }

      max = Math.max(max, streak);
    }
  }

  return max;
};
