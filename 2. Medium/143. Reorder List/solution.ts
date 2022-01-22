/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let mid = split(head);
  let rev = reverse(mid);
  merge(head, rev);
}

function split(node: ListNode): ListNode {
  let slow = node, fast = node;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let res = slow.next;
  slow.next = null;

  return res;
}

function reverse(node: ListNode): ListNode {
  let prev: ListNode = null;

  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
}

function merge(n1: ListNode, n2: ListNode): ListNode {
  if (n1 == null) return n2;
  if (n2 == null) return n1;

  n1.next = merge(n2, n1.next);
  return n1;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
