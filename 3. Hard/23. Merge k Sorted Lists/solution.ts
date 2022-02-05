function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const queue = new MinPriorityQueue({ priority: (a: ListNode) => a.val });
  const head = new ListNode();
  let cur = head;

  lists.forEach((list) => list && queue.enqueue(list));

  while (queue.isEmpty() == false) {
    let node = queue.dequeue().element;
    let next = node.next;
    node.next = null;

    cur.next = node;
    cur = cur.next;

    if (next) queue.enqueue(next);
  }

  return head.next;
}
