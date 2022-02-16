function swapPairs(head: ListNode | null): ListNode | null {
  if (head?.next == null) return head;

  const first = head, second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;

  return second;
}
