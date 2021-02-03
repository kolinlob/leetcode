/*
// Definition for a Node.
class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;
};
*/
class Solution {
    public Node flatten(Node head) {
        if (head == null)
            return null;

        Node flatChild = flatten(head.child);
        head.child = null;
        Node flatNext = flatten(head.next);

        if (flatChild != null) {
            head.next = flatChild;
            flatChild.prev = head;

            Node ct = flatChild;
            while (ct != null && ct.next != null)
                ct = ct.next;

            if (flatNext != null) {
                ct.next = flatNext;
                flatNext.prev = ct;
            }
        }

        return head;
    }
}
