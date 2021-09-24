/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];

  candidates.sort((a, b) => a - b);

  for (let i = 0; i < candidates.length; i++) {
    bt([], 0, candidates[i], [...candidates.slice(i + 1)]);
    while (candidates[i] == candidates[i + 1]) i++;
  }

  return res;

  function bt(arr, sum, num, cnd) {
    if (sum + num > target) return;
    if (sum + num == target) return res.push([...arr, num]);

    for (let j = 0; j < cnd.length; j++) {
      bt([...arr, num], sum + num, cnd[j], [...cnd.slice(j + 1)]);
      while (cnd[j] == cnd[j + 1]) j++;
    }
  }
};
