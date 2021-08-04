/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = [];
  traverse(root, targetSum, []);
  return res;

  function traverse(node, target, path) {
    if (!node) return;
    if (!node.left && !node.right && node.val == target) {
      res.push([...path, node.val]);
      return;
    }

    traverse(node.left, target - node.val, [...path, node.val]);
    traverse(node.right, target - node.val, [...path, node.val]);
  }
};
