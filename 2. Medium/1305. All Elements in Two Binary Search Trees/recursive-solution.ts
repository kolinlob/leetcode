function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  let res1 = [];
  inorder(root1, res1);

  let res2 = [];
  inorder(root2, res2);

  return merge(res1, res2);

  function inorder(node: TreeNode | null, res: number[]): void {
    if (node == null) return;

    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
  }

  function merge(arr1: number[], arr2: number[]): number[] {
    let res = [];

    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) res.push(arr1.shift());
      else res.push(arr2.shift());
    }

    if (arr1.length) return [...res, ...arr1];

    return [...res, ...arr2];
  }
}
