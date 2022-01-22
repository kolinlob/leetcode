/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let node = head;

  while (node) {
    if (node.child) {
      let next = node.next,
        tail = node.child;

      while (tail?.next)
             tail = tail.next;

      node.next = node.child;
      node.child.prev = node;

      tail.next = next;
      if (next)
          next.prev = tail;

      node.child = null;
    }
    node = node.next;
  }

  return head;
};
