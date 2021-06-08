/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return createNode(0, inorder.length - 1);

  function createNode(start, end) {
    if (start > end) return null;

    let node = new TreeNode(preorder.shift());
    let i = inorder.indexOf(node.val);

    node.left = createNode(start, i - 1);
    node.right = createNode(i + 1, end);
    return node;
  }
};
