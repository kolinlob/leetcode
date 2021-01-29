class MyLinkedList {
    private int size;
    private Node head;
    private Node tail;

    /** Initialize your data structure here. */
    public MyLinkedList() {
        size = 0;
        head = null;
        tail = head;
    }

    /**
     * Get the value of the index-th node in the linked list. If the index is
     * invalid, return -1.
     */
    public int get(int index) {
        if (index >= size)
            return -1;

        Node cur = head;
        int count = 0;

        while (count++ < index)
            cur = cur.next;

        return cur.val;
    }

    /**
     * Add a node of value val before the first element of the linked list. After
     * the insertion, the new node will be the first node of the linked list.
     */
    public void addAtHead(int val) {
        Node newNode = new Node(val, head);
        head = newNode;

        if (tail == null)
            tail = head;

        size++;
    }

    /** Append a node of value val to the last element of the linked list. */
    public void addAtTail(int val) {
        if (tail == null) {
            addAtHead(val);
            return;
        }

        Node newNode = new Node(val);
        tail.next = newNode;
        tail = newNode;
        size++;
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

        if (index == 0) {
            addAtHead(val);
            return;
        }

        if (index == size) {
            addAtTail(val);
            return;
        }

        Node newNode = new Node(val);
        Node prev = head;
        int count = 0;

        while (count++ < index - 1)
            prev = prev.next;

        newNode.next = prev.next;
        prev.next = newNode;
        size++;
    }

    /** Delete the index-th node in the linked list, if the index is valid. */
    public void deleteAtIndex(int index) {
        if (index >= size)
            return;

        Node prev = head;
        if (index == 0)
            head = head.next;
        else {
            int count = 0;
            while (count++ < index - 1)
                prev = prev.next;

            Node del = prev.next;

            if (tail == del) {
                tail = prev;
                tail.next = null;
            } else
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

        public Node(int val, Node next) {
            this.val = val;
            this.next = next;
        }
    }
}
