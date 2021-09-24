/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  candidates.forEach((n, i) => backtrack([], 0, i, target));
  return res;

  function backtrack(arr, sum, i, target) {
    if (i >= candidates.length || sum + candidates[i] > target)
        return;

    if (sum + candidates[i] == target)
        return res.push([...arr, candidates[i]]);

    for (let j = i; j < candidates.length; j++)
      backtrack([...arr, candidates[i]], sum + candidates[i], j, target);
  }
};
