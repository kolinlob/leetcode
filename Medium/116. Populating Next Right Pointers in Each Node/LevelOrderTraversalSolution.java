class Solution {
    public Node connect(Node root) {
        if (root == null)
            return null;

        Queue<Node> level = new LinkedList<>();
        Queue<Node> nextLevel = new LinkedList<>();

        level.add(root);

        while (!level.isEmpty()) {
            Node node = level.poll();

            if (!level.isEmpty()) {
                Node next = level.peek();
                node.next = next;
            }

            if (node.left != null)
                nextLevel.add(node.left);

            if (node.right != null)
                nextLevel.add(node.right);

            if (level.isEmpty()) {
                level = nextLevel;
                nextLevel = new LinkedList<>();
            }
        }

        return root;
    }
}