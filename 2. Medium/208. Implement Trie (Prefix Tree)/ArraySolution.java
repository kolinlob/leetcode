class Trie {
    private TrieNode root;
    private final int R = 26;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        root = put(root, word, 0);
    }

    public boolean search(String word) {
        TrieNode t = get(root, word, 0);
        return t != null && t.word == true;
    }

    public boolean startsWith(String prefix) {
        return get(root, prefix, 0) != null;
    }

    private class TrieNode {
        boolean word = false;
        TrieNode[] next = new TrieNode[R];
    }

    private TrieNode get(TrieNode n, String key, int d) {
        if (n == null)
            return null;

        if (d == key.length())
            return n;

        return get(n.next[key.charAt(d) - 'a'], key, d + 1);
    }

    private TrieNode put(TrieNode n, String key, int d) {
        if (n == null)
            n = new TrieNode();

        if (d == key.length()) {
            n.word = true;
            return n;
        }

        n.next[key.charAt(d) - 'a'] = put(n.next[key.charAt(d) - 'a'], key, d + 1);
        return n;
    }
}