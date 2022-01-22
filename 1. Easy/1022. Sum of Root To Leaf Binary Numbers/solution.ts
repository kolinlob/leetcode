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

function sumRootToLeaf(root: TreeNode | null): number {
  let paths: number[] = [];

  dfs(root, 0);

  return paths.reduce((acc, cur) => acc + cur, 0);

  function dfs(node: TreeNode | null, path: number): void {
    if (node == null) return;

    path = (path << 1) | node.val;

    if (node.left == null && node.right == null) {
      paths.push(path);
      return;
    }

    dfs(node.left, path);
    dfs(node.right, path);
  }
}

function sumRootToLeaf(root: TreeNode | null): number {
  let sum = 0;

  dfs(root, 0);

  return sum;

  function dfs(node: TreeNode | null, path: number): void {
    if (node == null) return;

    path = (path << 1) | node.val;

    if (node.left == null && node.right == null) {
      sum += path;
      return;
    }

    dfs(node.left, path);
    dfs(node.right, path);
  }
}
