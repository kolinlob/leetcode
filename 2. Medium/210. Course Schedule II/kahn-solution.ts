function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let order: number[] = [],
      queue: number[] = [],
      graph = new Map<number, number[]>(),
      indgr = new Array(numCourses).fill(0);

  for (let [to, from] of prerequisites) {
    if (graph.has(from)) graph.get(from).push(to);
    else graph.set(from, [to]);
    indgr[to]++;
  }

  for (let i = 0; i < indgr.length; ++i)
    indgr[i] == 0 && queue.push(i);

  while (queue.length > 0) {
    let v = queue.shift();

    if (graph.has(v))
      for (let e of graph.get(v))
        --indgr[e] == 0 && queue.push(e);

    order.push(v);
  }

  return order.length == numCourses ? order : [];
}
