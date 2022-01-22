/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let aux = new ListNode(null, head),
      pre = aux,
      cur = aux.next;

  while (cur) {
    if (cur.val == cur.next?.val) {
      while (cur.val == cur.next?.val)
        cur = cur.next;
      pre.next = cur.next;
    } else pre = pre.next;

    cur = cur.next;
  }

  return aux.next;
};
