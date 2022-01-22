class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode aux = new ListNode(-1, head);
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