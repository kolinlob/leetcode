function sumRootToLeaf(root: TreeNode | null): number {
  let paths: string[] = [];

  dfs(root, "");

  return paths
    .map((p) => Number.parseInt(p, 2))
    .reduce((acc, cur) => acc + cur, 0);

  function dfs(node: TreeNode | null, path: string): void {
    if (node == null) return;

    path += node.val;

    if (node.left == null && node.right == null) {
      paths.push(path);
      return;
    }

    dfs(node.left, path);
    dfs(node.right, path);
  }
}
