/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let minDepth = 0;
  let queue = root ? [root] : [];

  while (queue.length) {
    let size = queue.length;
    minDepth += 1;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();

      if (current.left == null && current.right == null)
        return minDepth;

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }

  return minDepth;
};
