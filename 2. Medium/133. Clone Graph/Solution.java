class Solution {
    public Node cloneGraph(Node node) {
        Map<Integer, Node> cloned = new HashMap<>();

        return dfsClone(node, cloned);
    }

    private Node dfsClone(Node node, Map<Integer, Node> map) {
        if (node == null)
            return null;

        if (map.containsKey(node.val))
            return map.get(node.val);

        Node newNode = new Node(node.val);
        map.put(newNode.val, newNode);

        for (Node n : node.neighbors)
            newNode.neighbors.add(dfsClone(n, map));

        return newNode;
    }
}