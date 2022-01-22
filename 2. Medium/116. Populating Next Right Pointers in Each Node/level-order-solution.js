/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root == null) return root;

  const q = [root];

  while (q.length > 0) {
    const len = q.length;
    let prev = null;

    for (let i = 0; i < len; i++) {
      let cur = q.shift();

      prev && (prev.next = cur);
      prev = cur;

      cur.left && q.push(cur.left);
      cur.right && q.push(cur.right);
    }

    prev.next = null;
  }

  return root;
};
