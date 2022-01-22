/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head, slow = head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }

  return false;
};
