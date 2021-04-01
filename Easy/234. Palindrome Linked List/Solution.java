class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head, fast = head, head1 = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode head2 = null;
        while (slow != null) {
            ListNode next = slow.next;
            slow.next = head2;
            head2 = slow;
            slow = next;
        }

        while (head1 != null && head2 != null) {
            if (head1.val != head2.val)
                return false;
            head1 = head1.next;
            head2 = head2.next;
        }

        return true;
    }
}