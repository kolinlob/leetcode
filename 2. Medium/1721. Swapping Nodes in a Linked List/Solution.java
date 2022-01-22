class Solution {
    public ListNode swapNodes(ListNode head, int k) {
        ListNode a = head, A = null, b = head, B = null;

        for (int i = 1; i < k; i++)
            a = a.next;

        A = a;

        while (a != null && a.next != null) {
            a = a.next;
            b = b.next;
        }

        B = b;

        int tmp = A.val;
        A.val = B.val;
        B.val = tmp;

        return head;
    }
}