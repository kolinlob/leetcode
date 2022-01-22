/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let current = head, previous = null;

  for (let i = 1; i < left; i++) {
    previous = current;
    current = current.next;
  }

  let before = previous, next = null, after = current;

  for (let i = left; i <= right; i++) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  if (before) before.next = previous;
  else head = previous;

  after.next = current;

  return head;
};
