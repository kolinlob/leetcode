/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (root == null) return "";
  const res: number[] = [];
  const queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (node) {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else res.push(null);
  }

  while (res[res.length - 1] == null) res.pop();

  return res.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data == null) return null;

  const array = data.split(",");
  if (array.length == 0 || array[0] == "") return null;

  const root = new TreeNode(Number(array.shift()));
  const queue = [root];

  while (queue.length) {
    let node = queue.shift();
    let nextValue;

    nextValue = array.shift();
    node.left = nextValue ? new TreeNode(Number(nextValue)) : null;

    nextValue = array.shift();
    node.right = nextValue ? new TreeNode(Number(nextValue)) : null;

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return root;
}
