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
    public int getDecimalValue(ListNode head) {
        ListNode cur = head;

        int res = 0;
        while (cur != null) {
            res = res << 1 | cur.val;
            cur = cur.next;
        }

        return res;
    }
}