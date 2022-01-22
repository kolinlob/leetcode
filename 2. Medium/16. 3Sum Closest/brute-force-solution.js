/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const srt = nums.sort((a, b) => a - b);
  let existing = srt[0] + srt[1] + srt[2];

  for (let i = 0; i < srt.length - 2; i++) {
    for (let j = i + 1; j < srt.length - 1; j++) {
      for (let k = j + 1; k < srt.length; k++) {
        const candidate = srt[i] + srt[j] + srt[k];
        if (Math.abs(target - candidate) < Math.abs(target - existing))
          existing = candidate;
      }
    }
  }

  return existing;
};
