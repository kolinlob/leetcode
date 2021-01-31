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
        ListNode aux = new ListNode(-1);
        aux.next = head;

        ListNode front = aux;
        ListNode rear = aux;

        for (int i = 0; i <= n; i++)
        front = front.next;

        while (front != null) {
            front = front.next;
            rear = rear.next;
        }

        rear.next = rear.next.next;

        return aux.next;
    }
}