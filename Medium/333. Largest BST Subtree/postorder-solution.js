/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function (root) {
  return postorder(root).pop();

  function postorder(node) {
    if (node == null) return [Infinity, -Infinity, 0];

    let [leftMin, leftMax, leftCount] = postorder(node.left);
    let [rightMin, rightMax, rightCount] = postorder(node.right);

    if (leftMax < node.val && node.val < rightMin)
      return [
        Math.min(node.val, leftMin),
        Math.max(node.val, rightMax),
        1 + leftCount + rightCount,
      ];

    return [-Infinity, Infinity, Math.max(leftCount, rightCount)];
  }
};
