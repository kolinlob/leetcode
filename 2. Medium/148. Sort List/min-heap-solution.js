/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head == null) return null;

  let heap = new MinPriorityQueue({ priority: (a) => a.val });
  let cur = head;
  while (cur) {
    heap.enqueue(cur);
    cur = cur.next;
  }

  let sortedHead = heap.dequeue().element;

  cur = sortedHead;
  while (!heap.isEmpty()) {
    cur.next = heap.dequeue().element;
    cur = cur.next;
  }

  cur.next = null;
  return sortedHead;
};
