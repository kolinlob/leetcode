/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root == null) return null;
  if (root.val > key) root.left = deleteNode(root.left, key);
  else if (root.val < key) root.right = deleteNode(root.right, key);
  else {
    if (root.right == null) return root.left;
    if (root.left == null) return root.right;
    let tmp = root;
    root = min(tmp.right);
    root.right = delMin(tmp.right);
    root.left = tmp.left;
  }

  return root;

  function min(node) {
    if (node == null) return null;
    if (node.left == null) return node;
    return min(node.left);
  }

  function delMin(node) {
    if (node == null) return null;
    if (node.left == null) return node.right;
    node.left = delMin(node.left);
    return node;
  }
};
