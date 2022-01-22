/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let cur = head,
    prev = null,
    len = 0;

  while (cur) {
    cur = cur.next;
    len++;
  }

  let chunkSize = (len / k) >> 0;
  let extraOne = len % k;
  let res = [head];

  cur = head;
  for (let i = 0; i < k - 1; i++) {
    for (let j = 0; j < (i < extraOne ? 1 : 0) + chunkSize; j++) {
      prev = cur;
      cur = cur.next;
    }

    res.push(cur);
    if (i < len) prev.next = null;
  }

  return res;
};
