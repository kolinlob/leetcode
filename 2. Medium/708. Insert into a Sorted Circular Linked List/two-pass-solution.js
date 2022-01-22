/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  let curr = new Node(insertVal);
  if (head == null) {
    curr.next = curr;
    return curr;
  }

  let prev = head;
  let next = head.next;
  prev.next = curr;
  curr.next = next;

  if (prev == next) return head;

  let x = head.next, min = x.val, max = x.val;
  while (x != head) {
    x = x.next;
    min = Math.min(min, x.val);
    max = Math.max(max, x.val);
  }

  while (prev.val > curr.val || curr.val > next.val) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = next;
    next = curr.next;

    if (prev.val == max && curr.val == min) return head;
    if (curr.val == max && next.val == min) return head;
  }

  return head;
};
