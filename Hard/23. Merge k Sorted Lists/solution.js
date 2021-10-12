/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists == null)
    return null;

  let queue = new MinPriorityQueue({ compare: (a, b) => a.val - b.val });

  for (let list of lists)
    list && queue.enqueue(list);

  let head = queue.front(), cur = head;

  while (queue.size() > 0) {
    let list = queue.dequeue();
    let [node, tail] = decapitate(list);

    if (cur != node) {
      cur.next = node;
      cur = cur.next;
    }

    if (tail)
        queue.enqueue(tail);
  }

  return head;

  function decapitate(list) {
    return list == null ? [null, null] : [list, list.next];
  }
};
