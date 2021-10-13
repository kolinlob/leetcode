/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  if (preorder == null || preorder.length == 0)
    return null;

  let root = new TreeNode(preorder.shift());
  let i = preorder.findIndex((x) => x > root.val);

  root.left = bstFromPreorder(i < 0 ? preorder : preorder.slice(0, i));
  root.right = bstFromPreorder(i < 0 ? [] : preorder.slice(i));

  return root;
};
