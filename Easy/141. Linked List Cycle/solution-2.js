/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head,
    fast = slow?.next;

  while (fast != slow) {
    fast = fast?.next?.next;
    slow = slow?.next;
  }

  return fast != null;
};
