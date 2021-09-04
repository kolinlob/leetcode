/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let aux = new ListNode(null, head);
  let front = aux, rear = aux;

  for (let i = 0; i <= n; i++)
    front = front.next;

  while (front) {
    front = front.next;
    rear = rear.next;
  }

  rear.next = rear.next.next;

  return aux.next;
};
