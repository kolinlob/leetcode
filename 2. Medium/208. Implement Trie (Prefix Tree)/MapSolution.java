class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode node = root;

        for (char c : word.toCharArray())
            node = node.next.computeIfAbsent(c, x -> new TrieNode());

        node.word = true;
    }

    public boolean search(String word) {
        TrieNode t = get(word);
        return t != null && t.word == true;
    }

    public boolean startsWith(String prefix) {
        return get(prefix) != null;
    }

    private class TrieNode {
        boolean word = false;
        HashMap<Character, TrieNode> next = new HashMap();
    }

    private TrieNode get(String key) {
        TrieNode node = root;

        for (char c : key.toCharArray()) {
            if (node.next.containsKey(c))
                node = node.next.get(c);
            else
                return null;
        }

        return node;
    }
}