/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/
class Solution {
    public Node copyRandomList(Node head) {
        if (head == null)
            return null;

        // 1. Create copies and insert before current node
        Node current = head;
        while (current != null) {
            Node copyNode = new Node(current.val);
            copyNode.next = current.next;
            copyNode.random = current.random;

            current.next = copyNode;
            current = copyNode.next;
        }

        // 2. Copy proper 'Random' links to copied nodes
        Node orig = head;
        Node copy = head.next;
        while (orig != null && copy != null) {
            if (orig.random != null)
                copy.random = orig.random.next;

            orig = copy.next;
            if (orig != null)
                copy = orig.next;
        }

        // 3. Restore original list links and extract copies into separate list
        orig = head;
        copy = head.next;
        Node headCopy = copy;
        while (orig != null && copy != null) {
            orig.next = copy.next;
            orig = orig.next;

            if (copy.next != null)
                copy.next = orig.next;

            copy = copy.next;
        }

        return headCopy;
    }
}