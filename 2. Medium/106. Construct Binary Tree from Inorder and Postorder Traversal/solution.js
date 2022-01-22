/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return traverse(0, inorder.length - 1);

  function traverse(left, right) {
    if (left > right) return null;

    let r = new TreeNode(postorder.pop());

    let i = inorder.findIndex((x) => x == r.val);
    if (i == -1) return r;

    r.right = traverse(i + 1, right);
    r.left = traverse(left, i - 1);

    return r;
  }
};
