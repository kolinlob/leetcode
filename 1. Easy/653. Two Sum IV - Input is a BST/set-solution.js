/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let set = new Set();
  traverse(root);

  for (let num of set) {
    let complement = k - num;
    if (complement == num) continue;
    if (set.has(complement)) return true;
  }

  return false;

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    set.add(node.val);
    traverse(node.right);
  }
};
