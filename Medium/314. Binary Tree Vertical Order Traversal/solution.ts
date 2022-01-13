function verticalOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];
  let res: number[][] = new Array(201);
  let queue: [TreeNode, number][] = [[root, 100]];

  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; ++i) {
      let [node, index] = queue.shift();

      if (res[index] == undefined) res[index] = [node.val];
      else res[index].push(node.val);

      node.left && queue.push([node.left, index - 1]);
      node.right && queue.push([node.right, index + 1]);
    }
  }

  return res.filter((x) => x);
}
