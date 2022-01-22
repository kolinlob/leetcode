class MyHashMap {
    private int size;
    private KVPair[] pairs;

    public MyHashMap() {
        pairs = new KVPair[16];
        size = 0;
    }

    public void put(int key, int value) {
        KVPair pair = getPair(key);

        if (pair == null) {
            int h = hash(key, pairs.length);
            pair = new KVPair(key, value);

            KVPair tmp = pairs[h];
            pairs[h] = pair;
            pair.next = tmp;

            size++;

            if ((double) size / pairs.length > 0.75)
                resize(pairs.length * 2);

        } else
            pair.value = value;
    }

    public int get(int key) {
        KVPair root = getPair(key);
        return root == null ? -1 : root.value;
    }

    public void remove(int key) {
        int h = hash(key, pairs.length);

        if (pairs[h] == null)
            return;

        KVPair dummy = new KVPair(-1, -1);
        dummy.next = pairs[h];
        KVPair cur = dummy;

        while (cur != null && cur.next != null) {
            if (cur.next.key == key)
                cur.next = cur.next == null ? null : cur.next.next;
            else
                cur = cur.next;
        }

        pairs[h] = dummy.next;
        size--;

        if ((double) size / pairs.length < 0.1)
            resize(pairs.length / 2);
    }

    private int hash(int key, int capacity) {
        return Integer.hashCode(key) % capacity;
    }

    private KVPair getPair(int key) {
        KVPair root = pairs[hash(key, pairs.length)];

        while (root != null) {
            if (root.key == key)
                return root;

            root = root.next;
        }

        return null;
    }

    private void resize(int size) {
        KVPair[] tmp = new KVPair[size];

        for (int i = 0; i < pairs.length; i++) {
            KVPair head = pairs[i];
            while (head != null) {
                int h = hash(head.key, size);

                KVPair tnext = head;
                head = head.next;

                KVPair t = tmp[h];
                tmp[h] = tnext;
                tnext.next = t;
            }
        }

        pairs = tmp;
    }

    private class KVPair {
        public int key;
        public int value;
        public KVPair next;

        public KVPair(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
}