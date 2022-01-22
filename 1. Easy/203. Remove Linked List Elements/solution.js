/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let aux = new ListNode(undefined, head),
    cur = aux;

  while (cur) {
    if (cur.next?.val == val)
        cur.next = cur.next.next;
    else cur = cur.next;
  }

  return aux.next;
};
