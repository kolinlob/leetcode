function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let order: number[] = [];
  let queue: number[] = [];
  let graph = new Map<number, number[]>();
  let indegree = new Array(numCourses).fill(0);

  for (let [to, from] of prerequisites) {
    if (graph.has(from)) graph.get(from).push(to);
    else graph.set(from, [to]);
    indegree[to]++;
  }

  for (let i = 0; i < indegree.length; ++i)
    if (indegree[i] == 0) queue.push(i);

  while (queue.length > 0) {
    let v = queue.shift();

    if (graph.has(v))
      for (let e of graph.get(v)) {
        indegree[e]--;
        if (indegree[e] == 0) queue.push(e);
      }

    order.push(v);
  }

  return order.length == numCourses ? order : [];
}
