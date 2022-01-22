class Solution {
  root: ListNode | null;

  constructor(head: ListNode | null) {
    this.root = head;
  }

  getRandom(): number {
    let node = this.root,
        scope = 1,
        chosen = 0;

    while (node) {
      if (Math.random() < 1 / scope) chosen = node.val;
      scope += 1;
      node = node.next;
    }

    return chosen;
  }
}
