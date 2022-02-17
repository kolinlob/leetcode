function combinationSum(candidates: number[], target: number): number[][] {
  const res = [];
  backtrack([], 0, 0);
  return res;

  function backtrack(array: number[], sum: number, start: number): void {
    if (sum > target) return;
    if (sum == target) {
      res.push(array);
      return;
    }

    for (let i = start; i < candidates.length; ++i)
      backtrack([...array, candidates[i]], sum + candidates[i], i);
  }
}
