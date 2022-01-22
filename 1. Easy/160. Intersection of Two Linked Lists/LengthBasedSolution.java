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
        int lenA = listLength(headA);
        if (lenA == 0)
            return null;

        int lenB = listLength(headB);
        if (lenB == 0)
            return null;

        while (lenA != lenB) {
            if (lenA > lenB) {
                headA = headA.next;
                lenA--;
            } else {
                headB = headB.next;
                lenB--;
            }
        }

        while (headA != null) {
            if (headA == headB)
                return headA;
            headA = headA.next;
            headB = headB.next;
        }

        return null;
    }

    private int listLength(ListNode root) {
        int len = 0;
        while (root != null) {
            len++;
            root = root.next;
        }
        return len;
    }
}