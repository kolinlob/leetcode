/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let aux = new ListNode();
  let cur = head;

  while (cur) {
    let prev = aux;
    while (prev.next?.val < cur.val)
        prev = prev.next;

    let next = cur.next;
    cur.next = prev.next;
    prev.next = cur;

    cur = next;
  }

  return aux.next;
};
