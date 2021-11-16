/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head == null) return head;
  if (k < 2) return head;

  let current = head, previous = null, len = 0;
  while (current) {
    current = current.next;
    len++;
  }

  current = head;
  while (current && len >= k) {
    let before = previous, next = null, after = current;
    for (let i = 1; i <= k && current; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      len--;
    }

    if (before) before.next = previous;
    else head = previous;

    after.next = current;
    previous = after;
  }

  return head;
};
