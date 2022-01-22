/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const paths = [];

  graph[0].forEach((n) => dfs(n, [0]));

  return paths;

  function dfs(node, path) {
    if (node == graph.length - 1) return paths.push([...path, node]);

    graph[node].forEach((n) => dfs(n, [...path, node]));
  }
};
