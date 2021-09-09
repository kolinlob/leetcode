/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = head, prev = null;

  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};
