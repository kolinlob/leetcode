/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head == null || head.next == null) return head;

  let mid = divide(head);
  let left = sortList(head);
  let right = sortList(mid);

  return merge(left, right);
};

function divide(node) {
  let f = node, s = null;

  while (f && f.next) {
    f = f.next.next;
    s = s ? s.next : node;
  }

  let res = s.next;
  s.next = null;
  return res;
}

function merge(n1, n2) {
  if (n1 == null) return n2;
  if (n2 == null) return n1;

  if (n1.val < n2.val) {
    n1.next = merge(n1.next, n2);
    return n1;
  }

  n2.next = merge(n2.next, n1);
  return n2;
}
