/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let result = [];
  let queue = root ? [root] : [];

  while (queue.length) {
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      level.push(current.val);
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }

    result.unshift(level);
  }

  return result;
};
