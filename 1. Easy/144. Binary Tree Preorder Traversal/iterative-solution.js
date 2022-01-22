/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let preorder = [],
      stack = [],
      current = root;

  while (stack.length || current) {
    while (current) {
      preorder.push(current.val);
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    current = current.right;
  }

  return preorder;
};
