/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let mid = split(head);
  let rev = reverse(mid);
  merge(head, rev);
};

var split = function (node) {
  let slow = node, fast = node;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let res = slow.next;
  slow.next = null;

  return res;
};

var reverse = function (node) {
  let prev = null;

  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

var merge = function (n1, n2) {
  if (n1 == null) return n2;
  if (n2 == null) return n1;

  n1.next = merge(n2, n1.next);
  return n1;
};
