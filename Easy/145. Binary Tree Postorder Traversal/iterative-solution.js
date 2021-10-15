/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let postorder = [],
      stack = [],
      current = root,
      previous = null;

  while (stack.length || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack[stack.length - 1];
      if (current.right && current.right != previous)
        current = current.right;
      else {
        postorder.push(current.val);
        stack.pop();
        previous = current;
        current = null;
      }
    }
  }

  return postorder;
};
