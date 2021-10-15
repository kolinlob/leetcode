/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let inorder = [],
      stack = [],
      current = root;

  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    inorder.push(current.val);
    current = current.right;
  }

  return inorder;
};
