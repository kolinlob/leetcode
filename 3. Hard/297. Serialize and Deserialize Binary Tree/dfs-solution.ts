/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let res: string[] = [];
  preorder(root);
  return res.join(",");

  function preorder(node: TreeNode | null): void {
    if (node == null) {
      res.push("null");
      return;
    }

    res.push(node.val.toString());

    preorder(node.left);
    preorder(node.right);
  }
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  return preorder(data.split(","));

  function preorder(array: string[]): TreeNode | null {
    if (array.length == 0) return null;

    let val = array.shift();
    if (val == "null") return null;

    let root = new TreeNode(Number(val));
    root.left = preorder(array);
    root.right = preorder(array);

    return root;
  }
}
