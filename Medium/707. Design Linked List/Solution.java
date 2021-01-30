class MyLinkedList {
    private int size;
    private Node head;

    /** Initialize your data structure here. */
    public MyLinkedList() {
        size = 0;
        head = null;
    }

    /**
     * Get the value of the index-th node in the linked list. If the index is
     * invalid, return -1.
     */
    public int get(int index) {
        Node cur = getNode(index);
        return cur == null ? -1 : cur.val;
    }

    private Node getNode(int index) {
        if (index < 0 || index >= size)
            return null;

        Node n = head;
        int count = 0;
        while (n == null || count++ < index)
            n = n.next;

        return n;
    }

    /**
     * Add a node of value val before the first element of the linked list. After
     * the insertion, the new node will be the first node of the linked list.
     */
    public void addAtHead(int val) {
        addAtIndex(0, val);
    }

    /** Append a node of value val to the last element of the linked list. */
    public void addAtTail(int val) {
        addAtIndex(size, val);
    }

    /**
     * Add a node of value val before the index-th node in the linked list. If index
     * equals to the length of linked list, the node will be appended to the end of
     * linked list. If index is greater than the length, the node will not be
     * inserted.
     */
    public void addAtIndex(int index, int val) {
        if (index > size)
            return;

        Node node = new Node(val);
        Node prev = getNode(index - 1);

        if (prev == null) {
            node.next = head;
            head = node;
        } else {
            node.next = prev.next;
            prev.next = node;
        }
        size++;
    }

    /** Delete the index-th node in the linked list, if the index is valid. */
    public void deleteAtIndex(int index) {
        if (index >= size)
            return;

        Node prev = getNode(index - 1);
        if (prev == null)
            head = head.next;
        else {
            Node del = prev.next;
            prev.next = del.next;
        }

        size--;
    }

    private class Node {
        public int val;
        public Node next;

        public Node(int val) {
            this.val = val;
            this.next = null;
        }
    }
}
