/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const n = nums.length;
  const srt = nums.sort((a, b) => a - b);

  return kSum(0, target, 4);

  function kSum(start, target, k) {
    let res = [];

    if (
      start == srt.length ||
      srt[start] * k > target ||
      target > srt[srt.length - 1] * k
    )
      return res;

    if (k == 2) return twoSum(start, target);

    for (let i = start; i < n; i++) {
      if (i === start || srt[i] !== srt[i - 1])
        for (let arr of kSum(i + 1, target - srt[i], k - 1))
          res.push([srt[i], ...arr]);
    }

    return res;
  }

  function twoSum(start, target) {
    const set = new Set();
    const two = [];

    for (let i = start; i < n; i++) {
      if (!two.length || two[two.length - 1][1] !== srt[i]) {
        const seek = target - srt[i];
        if (set.has(seek)) two.push([seek, srt[i]]);
        set.add(srt[i]);
      }
    }

    return two;
  }
};
