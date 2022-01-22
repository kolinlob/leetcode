/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root], res = [];

  while (queue.length) {
    const len = queue.length, level = [];
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      level.push(cur.val);
      queue.push(...cur.children);
    }
    res.push(level);
  }

  return res;
};
