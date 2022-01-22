function verticalOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];

  let res: number[][] = [];
  let columns = new Map<number, number[]>();
  let queue: [TreeNode, number][] = [[root, 0]];

  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; ++i) {
      let [node, index] = queue.shift();

      if (columns.has(index)) columns.get(index).push(node.val);
      else columns.set(index, [node.val]);

      node.left && queue.push([node.left, index - 1]);
      node.right && queue.push([node.right, index + 1]);
    }
  }

  let cols = [...columns.keys()].sort((a, b) => a - b);
  for (let index of cols) res.push(columns.get(index));

  return res;
}
