/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let res = 0;

  while (head) {
    res <<= 1;
    res |= head.val;
    head = head.next;
  }

  return res;
};
