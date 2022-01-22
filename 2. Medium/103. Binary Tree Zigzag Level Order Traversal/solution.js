/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let queue = root ? [root] : [];
  let result = [];
  let ltr = true;

  while (queue.length) {
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (ltr) level.push(current.val);
      else level.unshift(current.val);

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }

    ltr = !ltr;
    result.push(level);
  }

  return result;
};
