class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode smallerHead = new ListNode(0), smaller = smallerHead;
        ListNode largerHead = new ListNode(0), larger = largerHead;

        ListNode current = head;
        while (current != null) {
            if (current.val < x) {
                smaller.next = new ListNode(current.val);
                smaller = smaller.next;
            } else {
                larger.next = new ListNode(current.val);
                larger = larger.next;
            }

            current = current.next;
        }

        smaller.next = largerHead.next;

        return smallerHead.next;
    }
}