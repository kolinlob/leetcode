function connect(root: Node | null): Node | null {
  if (root == null) return null;

  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let prev: Node | null = null;

    for (let i = 0; i < len; ++i) {
      let cur = queue.shift();

      if (prev) prev.next = cur;
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);

      prev = cur;
    }
  }

  return root;
}
