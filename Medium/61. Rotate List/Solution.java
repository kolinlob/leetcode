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
    public ListNode rotateRight(ListNode head, int k) {
        ListNode tail = head;
        int len = 1;

        while (tail != null && tail.next != null) {
            tail = tail.next;
            len++;
        }

        int rotations = len - k % len;
        if (rotations == len)
            return head;

        tail.next = head;

        for (int i = 0; i < rotations; i++)
            tail = tail.next;

        head = tail.next;
        tail.next = null;

        return head;
    }
}
