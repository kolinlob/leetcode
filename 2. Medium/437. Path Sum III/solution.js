/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root == null) return 0;
  return (
    ps3(root, 0) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );

  function ps3(node, sum) {
    if (node == null) return 0;
    return (
      (targetSum == sum + node.val ? 1 : 0) +
      ps3(node.left, sum + node.val) +
      ps3(node.right, sum + node.val)
    );
  }
};
