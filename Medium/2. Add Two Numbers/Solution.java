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
    class Solution {
        public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
            ListNode head = new ListNode(l1.val + l2.val);
            ListNode curr = head;
            ListNode frst = l1.next;
            ListNode scnd = l2.next;

            while (frst != null || scnd != null || curr.val > 9) {
                int sum = (curr.val / 10) +
                          (frst == null ? 0 : frst.val) +
                          (scnd == null ? 0 : scnd.val);

                curr.val %= 10;
                curr.next = new ListNode(sum);
                curr = curr.next;

                if (frst != null)
                    frst = frst.next;

                if (scnd != null)
                    scnd = scnd.next;
            }

            return head;
        }
    }
}