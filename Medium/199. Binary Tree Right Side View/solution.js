/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let result = [];
  let queue = root ? [root] : [];

  while (queue.length) {
    let size = queue.length;
    let current = null;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }

    result.push(current.val);
  }

  return result;
};
