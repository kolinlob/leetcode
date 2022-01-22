/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let result = [];
  let queue = root ? [root] : [];

  while (queue.length) {
    let levelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      let current = queue.shift();
      levelSum += current.val;

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }

    result.push(levelSum / levelSize);
  }

  return result;
};
