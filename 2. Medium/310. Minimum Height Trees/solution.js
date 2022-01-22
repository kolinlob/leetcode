/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  let g = graph(n, edges);
  let queue = [];

  while (g.size > 2) {
    for (let [s, e] of g.entries())
        e.length == 1 && queue.push([s, ...e]);

    while (queue.length) {
      let [s, e] = queue.shift();
      let ix = g.get(e).indexOf(s);
      g.delete(g.get(e).splice(ix, 1)[0]);
    }
  }

  return [...g.keys()];

  function graph(n, edg) {
    let g = new Map();
    for (let i = 0; i < n; ++i) g.set(i, []);

    for (let [s, e] of edg) {
      g.get(s).push(e);
      g.get(e).push(s);
    }

    return g;
  }
};
