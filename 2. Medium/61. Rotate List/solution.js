/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head == null) return head;

  let length = 0, current = head;
  while (current) {
    length++;
    current = current.next;
  }

  current = head;
  k %= length;

  if (k == 0 || k == length) return head;

  let oldhead = head;
  for (let i = 1; i < length - k; i++)
    current = current.next;

  let newhead = current.next;
  current.next = null;
  head = newhead;

  current = newhead;
  while (current && current.next)
    current = current.next;

  current.next = oldhead;

  return head;
};
