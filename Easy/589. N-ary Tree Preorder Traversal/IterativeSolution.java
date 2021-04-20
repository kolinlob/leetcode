class Solution {
    public List<Integer> preorder(Node root) {
        Stack<Node> stack = new Stack<>();
        List<Integer> list = new ArrayList<>();

        Node current = root;
        stack.push(root);

        while (!stack.isEmpty() && current != null) {
            current = stack.pop();
            list.add(current.val);

            Collections.reverse(current.children);
            for (Node child : current.children) {
                stack.push(child);
            }
        }

        return list;
    }
}