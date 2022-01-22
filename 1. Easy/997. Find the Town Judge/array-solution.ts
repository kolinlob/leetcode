function findJudge(n: number, trust: number[][]): number {
  let g = new Array(n + 1).fill(null).map(() => ({ indegree: 0, outdegree: 0 }));

  for (let [person, trustee] of trust) {
    g[person].outdegree++;
    g[trustee].indegree++;
  }

  for (let i = 1; i <= n; ++i)
    if (g[i].outdegree == 0 && g[i].indegree == n - 1) return i;

  return -1;
}
