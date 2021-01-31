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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode current = head;
        ListNode delayed = head;
        int count = 0;

        while (current != null && current.next != null) {
            current = current.next;
            if (count < n) {
                count++;
                continue;
            }

            delayed = delayed.next;
        }

        if (current == head)
            return null;

        if (count + 1 == n)
            head = head.next;
        else
            delayed.next = (n == 1) ? null : delayed.next.next;

        return head;
    }
}