/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null) return head;

  let slow = head, fast = head.next;

  while (fast != null) {
    while (fast && fast.val == slow.val) {
      fast = fast.next;
    }
    slow.next = fast;
    slow = fast;
  }

  return head;
};
