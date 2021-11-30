/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function (root) {
  if (root == null) return 0;
  return isBst(root)
    ? count(root)
    : Math.max(largestBSTSubtree(root.left), largestBSTSubtree(root.right));

  function isBst(node) {
    let stack = [];
    let cur = node, prev = null;
    while (cur || stack.length > 0) {
      while (cur) {
        stack.push(cur);
        cur = cur.left;
      }

      cur = stack.pop();

      if (prev && prev.val >= cur.val) return false;
      prev = cur;
      cur = cur.right;
    }

    return true;
  }

  function count(node) {
    if (node == null) return 0;
    return 1 + count(node.left) + count(node.right);
  }
};
