/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        return reverse(head, null);
    }

    private ListNode reverse(ListNode head, ListNode tail) {
        if (head == null)
            return tail;

        ListNode temp = reverse(head.next, head);
        head.next = tail;
        return temp;
    }
}