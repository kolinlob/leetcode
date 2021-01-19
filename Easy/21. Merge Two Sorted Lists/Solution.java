/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {
    private ListNode head = null;
    private ListNode tail = null;

    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        while (l1 != null || l2 != null) {
            if (l1 == null) {
                addNode(l2.val);
                l2 = l2.next;
            } else if (l2 == null) {
                addNode(l1.val);
                l1 = l1.next;
            } else if (l1.val < l2.val) {
                addNode(l1.val);
                l1 = l1.next;
            } else {
                addNode(l2.val);
                l2 = l2.next;
            }
        }

        return head;
    }

    private void addNode(int val) {
        ListNode node = new ListNode(val);

        if (head == null) {
            this.head = node;
            this.tail = head;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
}
