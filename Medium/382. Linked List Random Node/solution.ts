class Solution {
  root: ListNode | null;
  size = 0;

  constructor(head: ListNode | null) {
    this.root = head;

    while (head) {
      head = head.next;
      this.size++;
    }
  }

  getRandom(): number {
    let node = this.root;
    let rnd = (Math.random() * this.size) >> 0;

    for (let i = 0; i < rnd; ++i) node = node.next;

    return node.val;
  }
}
