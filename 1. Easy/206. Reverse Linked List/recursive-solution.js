/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return reverse(head, null);

  function reverse(node, tail) {
    if (node == null) return tail;
    let rev = reverse(node.next, node);
    node.next = tail;
    return rev;
  }
};
