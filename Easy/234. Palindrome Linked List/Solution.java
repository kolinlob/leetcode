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
    public boolean isPalindrome(ListNode head) {

        // find mid-list node - slow1
        ListNode slow1 = head;
        ListNode fast1 = head;
        while (fast1 != null && fast1.next != null) {
            slow1 = slow1.next;
            fast1 = fast1.next.next;
        }

        // extract the second half into a separate list - slow2
        // and reverse it
        ListNode slow2 = null;
        while (slow1 != null) {
            ListNode temp = slow1.next;
            slow1.next = slow2;
            slow2 = slow1;
            slow1 = temp;
        }

        slow1 = head;
        while (slow1 != null && slow2 != null) {
            if (slow1.val != slow2.val)
                return false;

            slow1 = slow1.next;
            slow2 = slow2.next;
        }

        return true;
    }
}