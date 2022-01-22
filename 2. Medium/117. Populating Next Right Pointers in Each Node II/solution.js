/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root == null) return null;

  const queue = [root];

  while (queue.length) {
    let len = queue.length,
        prev = null;

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);

      prev && (prev.next = cur);
      prev = cur;
    }
  }

  return root;
};
