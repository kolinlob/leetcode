function copyRandomList(head: Node | null): Node | null {
  const visited = new Map<Node, Node>();

  return copyNode(head);

  function copyNode(node: Node | null): Node | null {
    if (node == null) return null;

    if (visited.has(node)) return visited.get(node);

    const copy = new Node(node.val);
    visited.set(node, copy);

    copy.next = copyNode(node.next);
    copy.random = copyNode(node.random);

    return copy;
  }
}
