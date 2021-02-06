class LRUCache {
    private final int capacity;
    private final HashMap<Integer, Node<Integer>> map;
    private Deque<Node<Integer>> list;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<Integer, Node<Integer>>(capacity);
        this.list = new LinkedList<Node<Integer>>();
    }

    public int get(int key) {
        if (map.containsKey(key)) {
            Node<Integer> node = map.get(key);
            list.remove(node);
            list.add(node);
            return node.val;
        } else
            return -1;
    }

    public void put(int key, int value) {
        if (!map.containsKey(key) && map.size() >= capacity) {
            Node<Integer> del = list.poll();
            Integer delK = null;

            for (Map.Entry<Integer, Node<Integer>> entry : map.entrySet())
                if (del == entry.getValue())
                    delK = entry.getKey();

            if (delK != null)
                map.remove(delK);
        }

        Node<Integer> node = map.getOrDefault(key, new Node(value));
        node.val = value;

        map.put(key, node);
        list.remove(node);
        list.add(node);
    }

    private class Node<T> {
        public T val;

        public Node(T val) {
            this.val = val;
        }
    }
}