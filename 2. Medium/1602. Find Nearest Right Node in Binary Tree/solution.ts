/**
 * @param {TreeNode} root
 * @param {TreeNode} u
 * @return {TreeNode}
 */
function findNearestRightNode(root: TreeNode, u: TreeNode): TreeNode | null {
  if (root == null) return null;

  let queue = [root];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; ++i) {
      let cur = queue.shift();

      if (cur == u) return i < len - 1 ? queue.shift() : null;

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return null;
}
