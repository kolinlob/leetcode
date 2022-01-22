/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root == null) return 0;

  let stack = [];
  let cur = root;
  let sum = 0;

  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      if (cur.left && !cur.left.left && !cur.left.right)
        sum += cur.left.val;

      cur = cur.left;
    }

    cur = stack.pop();
    cur = cur.right;
  }

  return sum;
};
