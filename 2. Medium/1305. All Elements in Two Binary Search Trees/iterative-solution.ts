function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  let s1 = [],
    s2 = [],
    res = [];

  while (root1 || root2 || s1.length || s2.length) {
    while (root1) {
      s1.push(root1);
      root1 = root1.left;
    }

    while (root2) {
      s2.push(root2);
      root2 = root2.left;
    }

    if (s2.length == 0 || (s1.length && s1[s1.length - 1].val < s2[s2.length - 1].val)) {
      root1 = s1.pop();
      res.push(root1.val);
      root1 = root1.right;
    } else {
      root2 = s2.pop();
      res.push(root2.val);
      root2 = root2.right;
    }
  }

  return res;
}
