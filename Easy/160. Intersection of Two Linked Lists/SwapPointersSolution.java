/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == headB)
            return headA;

        ListNode a = headA;
        ListNode b = headB;

        while (a != null && b != null) {
            a = a.next;
            b = b.next;

            if (a == null)
                a = headB;
            else if (b == null)
                b = headA;

            if (a == b)
                return a;
        }

        return null;
    }
}