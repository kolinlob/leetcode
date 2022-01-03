function findJudge(n: number, trust: number[][]): number {
  let g = new Array(n).fill(null).map(() => ({ indegree: 0, outdegree: 0 }));

  for (let i = 0; i < trust.length; ++i) {
    let [person, trustee] = trust[i];
    g[person - 1].outdegree++;
    g[trustee - 1].indegree++;
  }

  for (let [i, { indegree, outdegree }] of g.entries())
    if (outdegree == 0 && indegree == n - 1) return i + 1;

  return -1;
}
