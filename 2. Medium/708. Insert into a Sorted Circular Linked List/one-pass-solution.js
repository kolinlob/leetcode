/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  if (head == null) {
    let node = new Node(insertVal);
    node.next = node;
    return node;
  }

  let prev = head;
  let next = head.next;
  let insert = false;

  do {
    if (prev.val <= insertVal && insertVal <= next.val)
        insert = true;
    else if (prev.val > next.val && (insertVal >= prev.val || insertVal <= next.val))
        insert = true;

    if (insert) break;

    prev = next;
    next = next.next;
  } while (prev != head);

  prev.next = new Node(insertVal, next);
  return head;
};
