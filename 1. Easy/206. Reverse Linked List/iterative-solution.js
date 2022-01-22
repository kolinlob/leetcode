/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head, previous = null;

  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
