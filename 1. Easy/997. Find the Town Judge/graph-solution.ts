function findJudge(n: number, trust: number[][]): number {
  let grapgh = new Map<number, any>();

  for (let i = 1; i <= n; ++i)
    grapgh.set(i, { i: [], o: [] });

  for (let [person, trustee] of trust) {
    grapgh.get(person).o.push(trustee);
    grapgh.get(trustee).i.push(person);
  }

  for (let [k, v] of grapgh.entries())
    if (v.o.length == 0 && v.i.length == n - 1)
      return k;

  return -1;
}
