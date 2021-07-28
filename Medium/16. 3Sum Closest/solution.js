/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const srt = nums.sort((a, b) => a - b);
  let closest = srt[0] + srt[1] + srt[2];

  for (let i = 0; i < srt.length; i++) {
    let lo = i + 1, hi = srt.length - 1;

    while (lo < hi) {
      const candidate = srt[i] + srt[lo] + srt[hi];
      if (Math.abs(target - candidate) < Math.abs(target - closest))
        closest = candidate;

      if (candidate < target) lo = lo + 1;
      else hi = hi - 1;
    }
  }

  return closest;
};
